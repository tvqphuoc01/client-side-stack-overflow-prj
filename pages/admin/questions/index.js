"use client";
import Admin from "../index";
import { useEffect, useState } from "react";
import client from "../../../configs/axios.config";
import moment from "moment";
import { Pagination } from "@mui/material";
import { getCookie } from "cookies-next";
import MyDialog from "./my-dialog";

// This is a client component

export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const [totalQuestions, setTotalQuestions] = useState(0);

    const userUUID = getCookie("user_uuid");
    const [openDialog, setOpenDialog] = useState(false);
    const [rowToUpdate, setRowToUpdate] = useState([]);

    useEffect(() => {
        getListQuestions();
    }, [currentPage]);

    async function getListQuestions() {
        try {
            const res = await client.auth.get(
                `http://localhost:8009/api/get-list-question?page=${currentPage}&page_size=${itemPerPage}&requester_id=${userUUID}`
            );
            const data = await res.data.data;
            setTotalQuestions(await res.data.total);
            setQuestions(data);
        } catch (err) {
            console.log(err);
        }
    }

    function handlePage(p, e) {
        setCurrentPage(e);
    }

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const getDetails = (e, rowId) => {
        debugger;
        setOpenDialog(true);
        let details;
        details = questions.filter((row) => {
            return row.id === rowId;
        });
        setRowToUpdate(details);
    };


    return (
        <Admin>
            <MyDialog
                open={openDialog}
                handleOpenDialog={handleOpenDialog}
                handleCloseDialog={handleCloseDialog}
                values={rowToUpdate}
            />
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
                                        <th className="px-4 py-3">Created at</th>
                                        <th className="px-4 py-3">Created by</th>
                                        <th className="px-4 py-3">Title</th>
                                        <th className="px-4 py-3">Content</th>
                                        <th className="px-4 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                >
                                    {questions?.map((item, index) => {
                                        return (
                                            <tr key={index} className="text-gray-700 dark:text-gray-400">
                                                <td className="px-4 py-3 text-sm">
                                                    {item.id}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {moment(item.create_date).format('DD.MM.yyyy HH:mm:ss')}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {item.user_data.data.full_name}
                                                </td>
                                                <td className="px-4 py-3 text-sm" >
                                                    {item.title}
                                                </td>
                                                <td className="px-4 py-3 text-sm" style={{ overflow: "hidden", width: "200px", textOverflow: "ellipsis", display: 'block', whiteSpace: 'nowrap' }}>
                                                    {item.content}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        <button
                                                            className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="View"
                                                            onClick={(e) => getDetails(e, item.id)}
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="grid px-4 py-3 text-xs font-semibold tracking-wide sm:justify-end text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span className="flex items-center col-span-3">
                                Showing {currentPage}-{Math.ceil(totalQuestions / itemPerPage)} Of {totalQuestions}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <Pagination
                                    count={Math.ceil(totalQuestions / itemPerPage)}
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
        </Admin >
    );
}