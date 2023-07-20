"use client";
import { Button } from "@mui/material";
import Layout from "../../components/client-layout/layout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MemberCard from "./member-card";
import { useEffect } from "react";

import client from "../../configs/axios.config";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DatePicker from "@mui/lab/DatePicker";

// This is a client component

export default function Contributor() {
  const member = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const [contributor, setContributor] = useState([]);

  const [questionActive, setQuestionActive] = useState(true);
  const [answerActive, setAnswerActive] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    getContributor();
  }, []);

  async function getContributor() {
    try {
      const res = await client.auth.get(
        `http://localhost:8009/api/get-top-user`
      );
      const data = await res.data.data;
      console.log("data", data);
      setContributor(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  const handleQuestionClick = () => {
    setQuestionActive(true);
    setAnswerActive(false);
    // Sort the contributor by question count descending
    const sortedContributor = contributor.sort(
      (a, b) => b.question_count - a.question_count
    );
    setContributor(sortedContributor);
  };

  const handleAnswerClick = () => {
    setAnswerActive(true);
    setQuestionActive(false);
    // Sort the contributor by answer count descending
    const sortedContributor = contributor.sort(
      (a, b) => b.answer_count - a.answer_count
    );
    setContributor(sortedContributor);
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className="px-16">
        <div className="flex flex-row justify-between py-12 text-base">
          <Button
            variant="outlined"
            style={{
              color: "#82D200",
              borderColor: "#82D200",
              backgroundColor: "#FFFFFF",
              textTransform: "none",
            }}
            className="rounded-md"
            onClick={handleButtonClick}
          >
            <span className="pr-3 text-base">All Months</span>
            <CalendarMonthIcon />
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
              <DatePicker
                views={["year", "month"]}
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <input {...params} />}
              />
            </DialogContent>
          </Dialog>

          <div className="gap-x-5 flex flex-row">
            <Button
              variant="outlined"
              style={{
                color: questionActive ? "#FFFFFF" : "#82D200",
                borderColor: "#82D200",
                background: questionActive
                  ? "linear-gradient(to right, #82D200, #59AD00)"
                  : "#FFFFFF",
                textTransform: "none",
              }}
              className="rounded-full"
              onClick={handleQuestionClick}
            >
              <span className="pr-3 text-base">Question</span>
              <ArrowCircleDownIcon />
            </Button>
            <Button
              variant="outlined"
              style={{
                color: answerActive ? "#FFFFFF" : "#82D200",
                borderColor: "#82D200",
                background: answerActive
                  ? "linear-gradient(to right, #82D200, #59AD00)"
                  : "#FFFFFF",
                textTransform: "none",
              }}
              className="rounded-full"
              onClick={handleAnswerClick}
            >
              <span className="pr-3 text-base">Answer</span>
              <ArrowCircleDownIcon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          {contributor.map((item, index) => (
            <MemberCard index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
Contributor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
