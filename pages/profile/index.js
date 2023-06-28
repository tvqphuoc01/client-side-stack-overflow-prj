"use client";
import { Button, Divider, TextField, Typography } from "@mui/material";
import Layout from "../../components/client-layout/layout";
import QuestionCard from "./question-card";
import { useState } from "react";

// This is a client component

export default function Profile() {
  const [tag, setTag] = useState("question");
  return (
    <div className="flex flex-row px-16 py-5">
      <div className="bg-white flex flex-col gap-3 px-2 p-5 rounded-lg">
        <div className="flex flex-row justify-center">
          <img src="https://picsum.photos/200" className="rounded-full object-fill w-1/2" />
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="outlined" sx={{ borderColor: "#82D200", color: "#82D200", textTransform: "none", fontWeight: 600, fontSize: 16 }}>
            Upload avatar
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#82D200", color: "#82D200", textTransform: "none", fontWeight: 600, fontSize: 16 }}>
            Upload information
          </Button>
          <Button variant="outlined" sx={{ borderColor: "#82D200", color: "#82D200", textTransform: "none", fontWeight: 600, fontSize: 16 }}>
            Change Password
          </Button>
        </div>
        <div>
          <Typography sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}>Name</Typography>
          <TextField disabled value={"Nguyễn Văn A"} inputProps={{ style: { backgroundColor: "#DEDEDE", fontWeight: "400", fontSize: "16px", padding: "2px 8px" } }} />
          <Typography sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}>Email</Typography>
          <TextField disabled value={"nguyenvana@gmail.com"} inputProps={{ sx: { backgroundColor: "#DEDEDE", fontWeight: "400", fontSize: "16px", padding: "2px 8px" } }} />
          <Typography sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}>Usre Point</Typography>
          <TextField disabled value={23} inputProps={{ sx: { backgroundColor: "#DEDEDE", fontWeight: "400", fontSize: "16px", padding: "2px 8px" } }} />
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
              background: tag === "question" ? "linear-gradient(to right, #82D200, #59AD00)" : "#F7F7F7",
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
          <Button
            variant="outlined"
            style={{
              color: tag === "answer" ? "#FFFFFF" : "black",
              border: tag === "answer" ? "1px solid" : "none",
              borderColor: "#82D200",
              background: tag === "answer" ? "linear-gradient(to right, #82D200, #59AD00)" : "#F7F7F7",
              textTransform: "none",
            }}
            className="rounded-lg text-base"
            onClick={() => {
              setTag("answer");
            }}
          >
            <span className="pr-1">Answer</span>
            <p>({23})</p>
          </Button>
        </div>
        <div className="mt-10">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </div >
  );
}
Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
