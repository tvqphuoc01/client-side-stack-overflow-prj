"use client";
import { Button, Divider, TextField, Typography } from "@mui/material";
import Layout from "../../components/client-layout/layout";
// import QuestionCard from "./question-card";
import QuestionCard from "../../components/client-layout/card-item/card-question";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import client from "../../configs/axios.config";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  const [tag, setTag] = useState("question");
  const [user, setUser] = useState({});
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    console.log(id);
    getUser();
    getQuestion();
  }, [id]);

  async function getUser() {
    try {
      const res = await client.auth.get(
        `http://localhost:8006/api/get-user-by-id?user_id=${id}`
      );
      const data = await res.data.data;
      setUser({
        name: data.full_name,
        email: data.email,
        point: data.user_points,
        avatar: data.image_url,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getQuestion() {
    try {
      const res = await client.auth.get(
        `http://localhost:8009/api/get-question-by-user-id?user_id=${id}`
      );
      const data = await res.data.data;

      setQuestion(data);
      console.log(question);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-row px-16 py-5">
      <div className="bg-white flex flex-col gap-3 px-2 p-5 rounded-lg">
        <div className="flex flex-row justify-center">
          <img src={user.avatar} className="rounded-full object-fill w-1/2" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#82D200",
              color: "#82D200",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Upload avatar
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#82D200",
              color: "#82D200",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Upload information
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#82D200",
              color: "#82D200",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Change Password
          </Button>
        </div>
        <div>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}
          >
            Name
          </Typography>
          <TextField
            disabled
            value={user.name}
            inputProps={{
              style: {
                backgroundColor: "#DEDEDE",
                fontWeight: "400",
                fontSize: "16px",
                padding: "2px 8px",
              },
            }}
          />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}
          >
            Email
          </Typography>
          <TextField
            disabled
            value={user.email}
            inputProps={{
              sx: {
                backgroundColor: "#DEDEDE",
                fontWeight: "400",
                fontSize: "16px",
                padding: "2px 8px",
              },
            }}
          />
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}
          >
            Uuser Point
          </Typography>
          <TextField
            disabled
            value={user.point}
            inputProps={{
              sx: {
                backgroundColor: "#DEDEDE",
                fontWeight: "400",
                fontSize: "16px",
                padding: "2px 8px",
              },
            }}
          />
        </div>
      </div>
      <Divider orientation="vertical" flexItem className="mx-3" />
      <div className="bg-white grow rounded-lg p-5">
        <div className="gap-x-3 flex flex-row">
          <Button
            variant="outlined"
            style={{
              color: tag === "question" ? "#FFFFFF" : "black",
              border: tag === "question" ? "1px solid" : "none",
              borderColor: "#82D200",
              background:
                tag === "question"
                  ? "linear-gradient(to right, #82D200, #59AD00)"
                  : "#F7F7F7",
              textTransform: "none",
            }}
            className="rounded-lg text-base"
            onClick={() => {
              setTag("question");
            }}
          >
            <span className="pr-1">Question</span>
            <p>({23})</p>
          </Button>
          {/* <Button
            variant="outlined"
            style={{
              color: tag === "answer" ? "#FFFFFF" : "black",
              border: tag === "answer" ? "1px solid" : "none",
              borderColor: "#82D200",
              background:
                tag === "answer"
                  ? "linear-gradient(to right, #82D200, #59AD00)"
                  : "#F7F7F7",
              textTransform: "none",
            }}
            className="rounded-lg text-base"
            onClick={() => {
              setTag("answer");
            }}
          >
            <span className="pr-1">Answer</span>
            <p>({23})</p>
          </Button> */}
        </div>
        <div className="mt-10">
          {question.length > 0 ? (
            question.map((item, index) => (
              <QuestionCard
                key={index}
                title={item.title}
                content={item.content}
                number_of_like={item.number_of_like}
                number_of_dislike={item.number_of_dislike}
                number_of_answer={item.number_of_answer}
                created_date={item.create_date}
                tag_list={item.question_tag_list}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img src="/empty-state.png" className="w-1/2" />
              <p className="text-2xl font-bold text-gray-500"> No question </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
