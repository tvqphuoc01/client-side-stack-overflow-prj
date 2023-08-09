"use client"; // This is a client component

import { Chip } from "@mui/material";
import moment from "moment";

export default function QuestionCard({ question, user_data }) {
  return (
    <div className="mt-4 border border-gray-300 bg-white px-6 py-4 rounded-md">
      <div className="flex-col my-1">
        {question?.status !== undefined && (
          <Chip
            label={
              question?.status === 0 ? "Pending" : question?.status === 1 ? "Approved" : "Rejected"
            }
            color={
              question?.status === 0 ? "primary" : question?.status === 1 ? "success" : "disabled"
            }
            variant="outlined"
            className="py-2 mr-4"
          />
        )}
        <button className="inline-flex items-center px-1 -ml-1 mr-2 flex-column">
          <svg
            className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            ></path>
          </svg>
          {question?.number_of_like}
        </button>
        <button className="inline-flex items-center px-1 -ml-1 mr-2 flex-column">
          <svg
            className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
            />
          </svg>
          {question?.number_of_dislike}
        </button>
        {/* <button className="inline-flex items-center px-1 -ml-1 flex-column">
          <svg
            className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          {number_of_answer} Answers
        </button> */}
      </div>
      <a
        className="text-lg text-green-500 font-bold hover:underline"
        href={question?.status === 0 || question?.status == undefined ? "#" : `/questions/${question?.id}`}
      >
        {question?.title}
      </a>
      <p className="text-sm text-gray-500 font-medium hover:text-gray-700 mt-2">
        {question?.content?.substring(0, 200)} {" ..."}
      </p>
      <div className="flex flex-wrap py-6 space-x-2">
        {question?.tag_list &&
          question?.tag_list.map((tag, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
            >
              {tag}
            </a>
          ))}
      </div>
      <div className="flex justify-between items-center my-4">
        <div className="flex flex-col items-start justify-end w-full md:flex-row md:items-center text-gray-400">
          <div className="flex items-center md:space-x-2">
            <img
              src={user_data.image_url}
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <a href="#" className="text-sm font-bold hover:underline">
              {user_data.full_name}
            </a>
          </div>
          <div className="flex items-center justify-end md:justify-start md:space-x-2">
            <p className="text-sm text-gray-500 font-medium pl-1">
              {" | "}
              {moment(question?.create_date).format("MMMM Do YYYY, HH:mm:ss")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
