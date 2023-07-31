"use client";
import Admin from "../index";
import { Button, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import client from "../../../configs/axios.config";
import { getCookie } from "cookies-next";

// This is a client component

export default function Users() {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);
    const [userActive, setUserActive] = useState(true);
    const itemPerPage = 10;

    useEffect(() => {
        getUsers();
    }, [currentPage, userActive]);

    function handlePage(p, e) {
        setCurrentPage(e);
    }

    async function getUsers() {
        try {
            const res = await client.auth.get(
                `http://localhost:8006/api/users?page=${currentPage}&limit=${itemPerPage}&user_role=${userActive ? 'USER' : 'ADMIN'}`
            );
            const data = await res.data;
            setUsers(data.data);
            setTotalUsers(data.total);
        } catch (err) {
            console.log(err);
        }
    }

    async function updateStatus(id, status) {
        try {
            const res = await client.auth.put(
                `http://localhost:8006/api/update-user-account-status`,
                {
                    user_id: id,
                    account_status: status
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Admin>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="flex flex-row justify-end py-8 text-base mr-3">
                    <Button
                        variant="outlined"
                        style={{
                            color: userActive ? "#FFFFFF" : "#82D200",
                            borderColor: "#82D200",
                            background: userActive
                                ? "linear-gradient(to right, #82D200, #59AD00)"
                                : "#FFFFFF",
                            textTransform: "none",
                        }}
                        className="rounded-full mr-3"
                        onClick={() => {
                            setUserActive(true);
                            setCurrentPage(1);
                            setTotalUsers(0);
                        }}
                    >
                        <span className="text-base">User(s)</span>
                    </Button>
                    <Button
                        variant="outlined"
                        style={{
                            color: !userActive ? "#FFFFFF" : "#82D200",
                            borderColor: "#82D200",
                            background: !userActive
                                ? "linear-gradient(to right, #82D200, #59AD00)"
                                : "#FFFFFF",
                            textTransform: "none",
                        }}
                        className="rounded-full"
                        onClick={() => {
                            setUserActive(false);
                            setCurrentPage(1);
                            setTotalUsers(0);
                        }}
                    >
                        <span className="text-base">Admin</span>
                    </Button>
                </div>
                <div className="container grid px-6 mx-auto mt-6">
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">Id</th>
                                        <th className="px-4 py-3">User</th>
                                        <th className="px-4 py-3">Email</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">User point</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    {users?.map((item, index) => {
                                        return <tr key={index} className="text-gray-700 dark:text-gray-400">
                                            <td className="px-4 py-3 text-sm">
                                                {item.id}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span
                                                    className="py-1 font-semibold leading-tight"
                                                >
                                                    {item.full_name}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {item.email}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span
                                                    className={`px-2 py-1 font-semibold leading-tight ${item.account_status == 0 ? 'bg-orange-100 text-orange-700' : item.account_status == 1 ? 'bg-green-100 text-green-700' :
                                                        'bg-red-100 text-red-700'} rounded-full dark:text-white dark:bg-orange-600`}
                                                >
                                                    {item.account_status == 0 ? 'Pending' : item.account_status == 1 ? 'Active' : 'Banned'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                {item.user_points}
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center text-sm">
                                                    {item.account_status != 2 && <button
                                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                        aria-label="Ban"
                                                        onClick={() => {
                                                            item.account_status = 2;
                                                            setUsers([...users]);
                                                            updateStatus(item.id, 2);
                                                        }}
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="red" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                                        </svg>
                                                    </button>}
                                                    {item.account_status != 1 && <button
                                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                        aria-label="Active"
                                                        onClick={() => {
                                                            item.account_status = 1;
                                                            setUsers([...users]);
                                                            updateStatus(item.id, 1);
                                                        }}
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="green" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                                Showing {currentPage}-{Math.ceil(totalUsers / itemPerPage)} Of {totalUsers}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <Pagination
                                    count={Math.ceil(totalUsers / itemPerPage)}
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