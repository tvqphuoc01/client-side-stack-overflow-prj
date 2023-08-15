import moment from "moment";
import { useEffect, useState } from "react";
import client from "../../configs/axios.config";
import Editor from "../../components/editor";
import { Alert, Snackbar } from "@mui/material";
import { getCookie } from "cookies-next";

export default function AnswerRow({ answer }) {
    // const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [reply, setReplies] = useState([]);
    const [openReply, setOpenReply] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [contentSnackbar, setContentSnackbar] = useState("");
    async function getReply(answer_id) {
        try {
            const res = await client.auth.get(
                `http://localhost:8009/api/get-reply-by-answer-id?answer_id=${answer_id}`
            );
            const data = await res.data.data;
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async function createReply() {
        try {
            const res = await client.main.post(
                `http://localhost:8009/api/create-reply`,
                {
                    owner_id: getCookie("user_uuid"),
                    answer_id: answer.id,
                    content: data.replace("<img", `<img style="max-width: 200px"`)
                }
            );
            console.log(res.status);
            if (res.status == 201 || res.status == 200) {
                let res = await getReply(answer.id);
                setReplies(res)
                setContentSnackbar("Create answer success. Please check status of answer in your profile")
            } else {
                setContentSnackbar("Create answer failed")
            }
            setData("");
            setOpenSnackbar(true);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    useEffect(() => {
        if (answer.id)
            getReply(answer.id).then((res) => {
                setReplies(res)
            })
    }, [answer.id]);

    return (
        <div className="space-y-4 mx-10">
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
                        {answer.number_of_like}
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
                        {answer.number_of_dislike}
                    </div>
                    <div className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                            className="w-5 h-5 mr-1 text-gray-600"
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
                        {reply.length} Answers
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: answer.content }}>
                </div>
                {/* <p className="text-sm text-gray-500 font-medium hover:text-gray-700 my-2">
                    {answer.content}
                </p> */}
                <div className="flex justify-between items-center my-4">
                    <div className="flex flex-col items-start justify-end w-full md:flex-row md:items-center text-gray-400">
                        <div className="flex items-center md:space-x-2">
                            <img
                                src="https://source.unsplash.com/75x75/?portrait"
                                alt=""
                                className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                            />
                            <p className="text-sm">
                                {answer.user_data.data.full_name} | {moment(answer.create_date).format("MMMM Do YYYY, HH:mm:ss")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-3">
                    <div className="flex-col my-1">
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
                        </button>
                    </div>
                    <button className="font-medium text-green-500 hover:text-green-700 inline-flex items-center px-1 -ml-1 mr-2 flex-column" onClick={() => { setOpenReply(true); }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 pr-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                            />
                        </svg>
                        Reply
                    </button>
                </div>
            </div>
            <div className={`space-y-4 mx-10 ${hidden ? "hidden" : ""}`}>
                {reply.map((item) => (
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
                                {item.number_of_like}
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
                                {item.number_of_dislike}
                            </div>
                            <div className="inline-flex items-center px-1 -ml-1 flex-column">
                                <svg
                                    className="w-5 h-5 mr-1 text-gray-600"
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
                                {item.reply?.length ?? 0} Answers
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: item.content }}>
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
                                        {item.user_data.data.full_name} | {moment(item.create_date).format("MMMM Do YYYY, HH:mm:ss")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between my-3">
                            <div className="flex-col my-1">
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
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {<button className="text-blue-500 hover:text-blue-700" onClick={() => { setHidden(!hidden) }}>{hidden ? "Show more answer" : "Show less answer"}</button>}
            <Editor
                name="description"
                onChange={(data) => {
                    setData(data);
                }}
                editorLoaded={openReply}
                value={data}
            />
            {openReply ? <div className="flex justify-end">
                <button
                    className="text-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 border-2 border-green-500"
                    onClick={() => { setOpenReply(false) }}
                >
                    Cancel
                </button>
                <button
                    className="text-white w-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={async () => { await createReply() }}
                >
                    Post your answer
                </button>
            </div> : <></>}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => { setOpenSnackbar(false); setContentSnackbar("") }}
            >
                <Alert severity="success" elevation={6} variant="filled">{contentSnackbar}</Alert>
            </Snackbar>
        </div>
    );
}
