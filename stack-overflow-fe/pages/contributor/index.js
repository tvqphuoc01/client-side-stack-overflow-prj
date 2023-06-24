"use client";
import { Button } from "@mui/material";
import Layout from "../../components/client-layout/layout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MemberCard from "./member-card";

// This is a client component

export default function Contributor() {
  const member = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <div style={{ backgroundColor: "#F7F7F7"}}>
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
          >
            <span className="pr-3 text-base">Month</span>
            <CalendarMonthIcon />
          </Button>
          <div className="gap-x-5 flex flex-row">
            <Button
              variant="outlined"
              style={{
                color: "#FFFFFF",
                borderColor: "#82D200",
                background: "linear-gradient(to right, #82D200, #59AD00)",
                textTransform: "none",
              }}
              className="rounded-full"
            >
              <span className="pr-3 text-base">Question</span>
              <ArrowCircleDownIcon />
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "#82D200",
                borderColor: "#82D200",
                backgroundColor: "#FFFFFF",
                textTransform: "none",
              }}
              className="rounded-full"
            >
              <span className="pr-3 text-base">Answer</span>
              <ArrowCircleDownIcon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          {member.map((item, index) => (
            <MemberCard index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
Contributor.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
