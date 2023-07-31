"use client";
import Admin from "../index";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import client from "../../../configs/axios.config";
import moment from "moment";
import { getCookie } from "cookies-next";

// This is a client component

export default function Replies() {
    const [replies, setReplies] = useState([]);
    const [isEditting, setIsEditting] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalReplies, setTotalReplies] = useState(0);
    const itemPerPage = 6;
    const userUUID = getCookie("user_uuid");

    useEffect(() => {
        getReplies();
    }, [currentPage]);

    function handlePage(p, e) {
        setCurrentPage(e);
    }

    async function getReplies() {
        try {
            const res = await client.auth.get(
                `http://localhost:8009/api/get-all-reply-admin?requester_id=${userUUID}&page=${currentPage}&limit=${itemPerPage}`
            );
            const data = await res.data.data;
            setReplies(data.data);
            setTotalReplies(data.total_records);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Admin>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto mt-6">
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr
                                        className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                    >
                                        <th className="px-4 py-3">Id</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Reply at</th>
                                        <th className="px-4 py-3">Reply by</th>
                                        <th className="px-4 py-3">From answer</th>
                                        <th className="px-4 py-3">Content</th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                >
                                    {replies?.map((item, index) => {
                                        return <tr className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3 text-sm">
                                                {item.reply_id}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {moment(item.update_date).format('DD.MM.yyyy HH:mm')}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span
                                                    className={`px-2 py-1 font-semibold leading-tight ${item.answer_status == -1 ? 'bg-orange-100 text-orange-700' : item.answer_status == 1 ? 'bg-green-100 text-green-700' :
                                                        'bg-red-100 text-red-700'} rounded-full dark:text-white dark:bg-orange-600`}
                                                >
                                                    {item.answer_status == -1 ? 'Pending' : item.answer_status == 1 ? 'Approve' : 'Decline'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {item.owner_id}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <a className="underline text-blue-500" href="#">{item.answer_id}</a>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {item.content}
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span className="flex items-center col-span-3">
                                Showing {currentPage}-{Math.ceil(totalReplies / itemPerPage)} Of {totalReplies}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <Pagination
                                    count={Math.ceil(totalReplies / itemPerPage)}
                                    size="medium"
                                    page={currentPage}
                                    shape="rounded"
                                    color="secondary"
                                    key={currentPage}
                                    onChange={handlePage}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </Admin>
    );
}