"use client";
import {
  Button,
  Divider,
  TextField,
  Typography,
  Chip,
  Modal,
} from "@mui/material";
import Layout from "../../components/client-layout/layout";
import QuestionCard from "../../components/client-layout/card-item/card-question";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ChangeInformationModal from "./change-information";
import ImageUploader from "./image-uploader";
import UpdatePassModal from "./update-password";

import client from "../../configs/axios.config";
import { getCookie } from "cookies-next";
import { Update } from "@mui/icons-material";
export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const userUUID = getCookie("user_uuid");

  const [tag, setTag] = useState("question");
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [user, setUser] = useState({});

  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const openUpdateInformationModal = () => {
    setIsModalOpen(true);
  };

  const closeUpdateInformationModal = () => {
    setIsModalOpen(false);
  };

  const openUploadAvatarModal = () => {
    setIsModalOpen2(true);
  };

  const closeUploadAvatarModal = () => {
    setIsModalOpen2(false);
  };

  const onUpdated = () => {
    setIsUpdate(!isUpdate);
  };

  const openUpdatePassModal = () => {
    setIsModalOpen3(true);
  };

  const closeUpdatePassModal = () => {
    setIsModalOpen3(false);
  };

  useEffect(() => {
    getUser();
    getQuestion();
    getAnswer();
  }, [id, isUpdate]);

  async function getUser() {
    try {
      const res = await client.auth.get(
        `http://localhost:8006/api/get-user-by-id?user_id=${id}`
      );
      const data = await res.data.data;

      setUser(data);

      setFullName(data.full_name);
      setAvatar(data.image_url);
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

      console.log("question", question);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAnswer() {
    try {
      const res = await client.auth.get(
        `http://localhost:8009/api/get-answer-by-user-id?user_id=${id}`
      );
      const data = await res.data.data;
      setAnswer(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-row px-16 py-5">
      <div className="bg-white flex flex-col gap-3 px-5 p-5 rounded-lg">
        <div className="flex flex-row justify-center">
          <img
            src={
              user.image_url
                ? user.image_url
                : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
            }
            style={{ width: "220px", height: "220px" }}
            className="rounded-full object-fill w-1/2"
          />
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
            onClick={openUploadAvatarModal}
          >
            Upload avatar
          </Button>

          <ImageUploader
            isOpen={isModalOpen2}
            onClose={closeUploadAvatarModal}
            onUpdated={onUpdated}
            userId={id}
            initAvatarPath={user.image_url}
          />

          <Button
            variant="outlined"
            sx={{
              borderColor: "#82D200",
              color: "#82D200",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
            onClick={openUpdateInformationModal}
          >
            Update information
          </Button>

          <ChangeInformationModal
            isOpen={isModalOpen}
            onClose={closeUpdateInformationModal}
            onUpdated={onUpdated}
            initFullName={user.full_name}
            userId={id}
          />

          <Button
            variant="outlined"
            sx={{
              borderColor: "#82D200",
              color: "#82D200",
              textTransform: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
            onClick={openUpdatePassModal}
          >
            Change Password
          </Button>

          <UpdatePassModal
            isOpen={isModalOpen3}
            onClose={closeUpdatePassModal}
            onUpdated={onUpdated}
            userId={id}
            userEmail={user.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          {user.account_status == 0 ? (
            <Chip
              label="Pending"
              color="primary"
              variant="outlined"
              className="py-2"
            />
          ) : (
            <Chip
              label="Active"
              color="success"
              variant="outlined"
              className="py-2"
            />
          )}

          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "16px" }}
          >
            Name
          </Typography>
          <TextField
            disabled
            value={user.full_name}
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
            User Point
          </Typography>
          <TextField
            disabled
            value={user.user_points}
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
            <p>({question.length})</p>
          </Button>
          <Button
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
            <p>({answer.length})</p>
          </Button>
        </div>
        <div className="mt-10">
          {tag === "question" ?
            question.length > 0 ? (
              question.map((item, index) => (
                <QuestionCard question={item} user_data={user} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img src="/empty-state.png" className="w-1/2" />
                <p className="text-2xl font-bold text-gray-500"> No question </p>
              </div>
            ) : tag === "answer" ? answer.length > 0 ? (
              answer.map((item, index) => (
                <QuestionCard question={item} user_data={user} />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img src="/empty-state.png" className="w-1/2" />
                <p className="text-2xl font-bold text-gray-500"> No answer </p>
              </div>
            ) : <></>}
        </div>
      </div>
    </div>
  );
}
Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
