import moment from "moment";
import { useEffect, useState } from "react";
import client from "../../configs/axios.config";
import Editor from "../../components/editor";
import { Alert, Button, Snackbar } from "@mui/material";
import { getCookie } from "cookies-next";

export default function ReplyRow({ reply }) {
    const [replyData, setReplyData] = useState(reply);
    const [like, setLike] = useState(null);
    async function getReplyById() {
        try {
            const res = await client.main.get(
                `http://localhost:8009/api/get-reply-by-id?reply_id=${replyData.id}`
            );
            setReplyData(res.data.data)
        } catch (err) {
            console.log(err);
        }
    }
    async function createReplyLike(data) {
        try {
            const res = await client.main.post(
                `http://localhost:8009/api/create-reply-like`,
                {
                    reply_id: replyData.id,
                    user_id: getCookie("user_uuid"),
                    is_like: data
                }
            );
            if (res.status == 200) {
                getReplyById();
                setLike(data);
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async function getReplyLikeByUserId(id) {
        try {
            const like = await client.main.get(
                `http://localhost:8009/api/get-reply-like-by-user-id?reply_id=${id}&user_id=${getCookie("user_uuid")}`,
            );
            setLike(like.data.data)
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    useEffect(() => {
        if (replyData.id) {
            getReplyLikeByUserId(replyData.id)
        }
    }, [replyData.id]);
    return (
        <div className="flex flex-col mt-4 border-b border-gray-300">
            <div className="flex-col my-1">
                <div className="inline-flex items-center px-1 -ml-1 mr-2 flex-column">
                    <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="text-green-600"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        ></path>
                    </svg>
                    {replyData.number_of_like}
                </div>
                <div className="inline-flex items-center px-1 -ml-1 mr-2 flex-column">
                    <svg
                        className="w-5 h-5 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            className="text-red-600"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                        />
                    </svg>
                    {replyData.number_of_dislike}
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: replyData.content }}>
            </div>
            <div className="flex justify-between items-center my-4">
                <div className="flex flex-col items-start justify-end w-full md:flex-row md:items-center text-gray-400">
                    <div className="flex items-center md:space-x-2">
                        <img
                            src="https://source.unsplash.com/75x75/?portrait"
                            alt=""
                            className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                        />
                        <p className="text-sm">
                            {replyData.user_data.data.full_name} | {moment(replyData.create_date).format("MMMM Do YYYY, HH:mm:ss")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between my-3">
                <div className="flex">
                    <Button className={`inline-flex items-center flex-column ${like === true ? "text-blue-600" : "text-gray-500"} normal-case`} onClick={() => createReplyLike(true)} variant="text">
                        <svg
                            className="w-5 h-5 mr-1"
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
                        Like
                    </Button>
                    <Button className={`inline-flex items-center flex-column ${like === false ? "text-blue-600" : "text-gray-500"} normal-case`} onClick={() => createReplyLike(false)} variant="text">
                        <svg
                            className="w-5 h-5 mr-1"
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
                        Dislike
                    </Button>
                </div>
            </div>
        </div>
    );
}
