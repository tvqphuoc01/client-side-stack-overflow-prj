"use client";
import Admin from "../index";
import { useEffect, useState } from "react";
import client from "../../../configs/axios.config";
import { Pagination, Button, TextField } from "@mui/material";
import { getCookie } from "cookies-next";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// This is a client component

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCategories, setTotalCategories] = useState(0);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null);
    const itemPerPage = 10;
    const userUUID = getCookie("user_uuid");

    useEffect(() => {
        getCategories();
    }, [currentPage]);

    function handlePage(p, e) {
        setCurrentPage(e);
    }

    async function getCategories() {
        try {
            const res = await client.auth.get(
                `http://localhost:8009/api/get-list-category?page=${currentPage}&page_size=${itemPerPage}`
            );
            const data = await res.data.data;
            setCategories(data.categories);
            setTotalCategories(data.total);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteCategories(id) {
        try {
            await client.auth.delete(
                `http://localhost:8009/api/delete-category`,
                {
                    data: {
                        category_id: id,
                        requester_id: userUUID
                    }
                }
            ).then((response) => {
                resolve(response);
            }, (err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }

    async function createCategory(name) {
        try {
            await client.main.post(`http://localhost:8009/api/create-category`, {
                category_name: name
            }).then((res) => {
                if (res) {
                    alert('Create new category successfully');
                    setOpen(false);
                    getCategories();
                }
            })
        }
        catch (err) {
            alert('Create new category unsuccessfully');
            setOpen(false);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Admin>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="flex flex-row justify-end pt-8 text-base mr-3">
                    <Button
                        variant="outlined"
                        style={{
                            color: "#FFFFFF",
                            borderColor: "#82D200",
                            background: "linear-gradient(to right, #82D200, #59AD00)",
                            textTransform: "none",
                        }}
                        className="rounded-full mr-3"
                        onClick={handleClickOpen}
                    >
                        <span className="text-base">Add</span>
                    </Button>

                </div>
                <div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add new category</DialogTitle>
                        <DialogContent>
                            <TextField
                                id="name"
                                placeholder="Name of category"
                                type="text"
                                fullWidth
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => {
                                createCategory(name);
                            }}>Add</Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <div className="container grid px-6 mx-auto mt-6">
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr
                                        className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                    >
                                        <th className="px-4 py-3">Id</th>
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                >
                                    {categories?.map((item, index) => {
                                        return (
                                            <tr key={index} className="text-gray-700 dark:text-gray-400">
                                                <td className="px-4 py-3 text-sm">
                                                    <span
                                                        className="py-1 font-semibold leading-tight"
                                                    >
                                                        {item.id}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {item.name}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">

                                                        {<button
                                                            className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="Delete"
                                                            onClick={() => deleteCategories(item.id)}
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                    clipRule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </button>}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span className="flex items-center col-span-3">
                                Showing {currentPage}-{Math.ceil(totalCategories / itemPerPage)} Of {totalCategories}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <Pagination
                                    count={Math.ceil(totalCategories / itemPerPage)}
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