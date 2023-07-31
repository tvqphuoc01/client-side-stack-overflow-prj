"use client";
import Admin from "../index";
import { useEffect, useState } from "react";
import client from "../../../configs/axios.config";
import { TextField, Button, Pagination } from "@mui/material";
import { getCookie } from "cookies-next";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// This is a client component

export default function Tags() {
    const [tags, setTags] = useState([]);
    const [isEditting, setIsEditting] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTags, setTotalTags] = useState(0);
    const itemPerPage = 10;
    const userUUID = getCookie("user_uuid");
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(null);

    useEffect(() => {
        getTags();
    }, [currentPage]);

    function handlePage(p, e) {
        setCurrentPage(e);
    }

    async function getTags() {
        try {
            const res = await client.auth.get(
                `http://localhost:8009/api/get-list-tag?page=${currentPage}&page_size=${itemPerPage}`
            );
            const data = await res.data.data;
            setTags(data.tags);
            setTotalTags(data.total);
        } catch (err) {
            console.log(err);
        }
    }


    async function updateTags(tagId, tagName) {
        try {
            const result = await client.auth.put(
                "http://localhost:8009/api/update-tag",
                {
                    tag_id: tagId,
                    tag_name: tagName
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

    async function createTag(name) {
        try {
            await client.main.post(`http://localhost:8009/api/create-tag`, {
                tag_name: name
            }).then((res) => {
                if (res) {
                    alert('Create new tag successfully');
                    setOpen(false);
                    getTags();
                }
            })
        }
        catch (err) {
            alert('Create new tag unsuccessfully');
            setOpen(false);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function deleteTags(tagId) {
        try {
            await client.auth.delete(
                "http://localhost:8009/api/delete-tag",
                {
                    tag_id: tagId,
                    requester_id: userUUID
                }
            );
        } catch (err) {
            console.log(err);
        }
    }

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
                        <DialogTitle>Add new tag</DialogTitle>
                        <DialogContent>
                            <TextField
                                id="name"
                                placeholder="Name of tag"
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
                                createTag(name);
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
                                    {
                                        tags?.map((item, index) => (
                                            <tr key={index} className="text-gray-700 dark:text-gray-400">
                                                <td className="px-4 py-3 text-sm">
                                                    <span
                                                        className="py-1 font-semibold leading-tight"
                                                    >
                                                        {item.id}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {isEditting == index && <TextField
                                                        defaultValue={item.name}
                                                        onChange={(event) => {
                                                            item.name = event.target.value;
                                                            setTags([...tags]);
                                                        }}
                                                    />}
                                                    {isEditting !== index && item.name}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        {isEditting !== index && <button
                                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="Edit"
                                                            onClick={() => {
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
                                                                updateTags(item.id, item.name);
                                                            }}
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="none"
                                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
                                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                                            </svg>
                                                        </button>}
                                                        {isEditting == index && <button
                                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="Cancel"
                                                            onClick={() => {
                                                                setIsEditting(-1);
                                                            }}
                                                        >
                                                            <svg className="w-5 h-5"
                                                                aria-hidden="true"
                                                                fill="red"
                                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                                            </svg>

                                                        </button>}
                                                        {isEditting !== index && <button
                                                            className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="Delete"
                                                            onClick={() => deleteTags(item.id)}
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
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span className="flex items-center col-span-3">
                                Showing {currentPage}-{Math.ceil(totalTags / itemPerPage)} Of {totalTags}
                            </span>
                            <span className="col-span-2"></span>
                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <Pagination
                                    count={Math.ceil(totalTags / itemPerPage)}
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