"use client";
import Admin from "../index";
import { useEffect, useState } from "react";
import client from "../../../configs/axios.config";
import moment from "moment";
import { Pagination, Select, MenuItem, BootstrapInput } from "@mui/material";

import { getCookie } from "cookies-next";

// This is a client component

export default function Answers() {

    const [answers, setAnswers] = useState([]);
    const [isEditting, setIsEditting] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalAnswer, setTotalAnswers] = useState(0);
    const itemPerPage = 10;

    useEffect(() => {
        getListAnswers();
    }, [currentPage]);

    function handlePage(p, e) {
        setCurrentPage(e);
    }

    const userUUID = getCookie("user_uuid");

    async function getListAnswers() {
        try {
            const res = await client.auth.get(
                `http://localhost:8009/api/get-all-answer-admin?page=${currentPage}&page_size=${itemPerPage}&requestor_id=${userUUID}`
            );
            const data = await res.data.data;
            setTotalAnswers(data.total);
            setAnswers(data.answers);
        } catch (err) {
            console.log(err);
        }
    }

    async function updateAnsStatus(answerId, status){
        try{
            const res = await client.main.put(
                `http://localhost:8009/api/update-answer-status`, {
                    answer_id: answerId,
                    answer_status: status,
                    requester_id: userUUID
                }
            )
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
                                        <th className="px-4 py-3">Answer at</th>
                                        <th className="px-4 py-3">Answer by</th>
                                        <th className="px-4 py-3">From question</th>
                                        <th className="px-4 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                >
                                    {answers?.map((item, index) => {
                                        return <tr key={index} className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3 text-sm">
                                                {item.id}
                                            </td>
                                            <td className="px-4 py-3 text-xs">
                                                {isEditting !== index && <span
                                                    className={`px-2 py-1 font-semibold leading-tight ${item.answer_status == -1 ? 'bg-orange-100 text-orange-700' : item.answer_status == 1 ? 'bg-green-100 text-green-700' :
                                                        'bg-red-100 text-red-700'} rounded-full dark:text-white dark:bg-orange-600`}
                                                >
                                                    {item.answer_status == -1 ? 'Pending' : item.answer_status == 1 ? 'Approve' : 'Decline'}
                                                </span>}
                                                {isEditting === index && <Select
                                                    labelId="demo-customized-select-label"
                                                    id="demo-customized-select"
                                                    value={item.answer_status}
                                                    onChange={(event) => {
                                                        item.answer_status = event.target.value;
                                                        // console.log(event.target.value)
                                                        setAnswers([...answers]);
                                                    }}
                                                >
                                                    <MenuItem value={-1}>Pending</MenuItem>
                                                    <MenuItem value={1}>Approve</MenuItem>
                                                    <MenuItem value={2}>Decline</MenuItem>
                                                </Select>}
                                            </td>

                                            <td className="px-4 py-3 text-sm">
                                                {moment(item.update_date).format('DD.MM.yyyy HH:mm')}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {item.user_id}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <a className="underline text-blue-500" href="#">{item.question_id}</a>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    {isEditting !== index && <button
                                                        className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                        aria-label="Change"
                                                        onClick={() => 
                                                            {
                                                                setIsEditting(index);
                                                            }}
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                            ></path>
                                                        </svg>
                                                    </button>}
                                                    {isEditting == index && <button
                                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                        aria-label="Edit"
                                                        onClick={() => {
                                                            setIsEditting(-1);
                                                            updateAnsStatus(item.id, item.answer_status);
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
                                                            <path stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </button>}
                                                </div>
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
                                Showing {currentPage}-{Math.ceil(totalAnswer / itemPerPage)} Of {totalAnswer}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <Pagination
                                    count={Math.ceil(totalAnswer / itemPerPage)}
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