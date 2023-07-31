"use client";
import Admin from "../index";

// This is a client component

export default function Members() {

    return (
        <Admin>
            <main className="h-full pb-16 overflow-y-auto">
                <div className="container grid px-6 mx-auto mt-6">
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full whitespace-no-wrap">
                                <thead>
                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                        <th className="px-4 py-3">Order</th>
                                        <th className="px-4 py-3">User</th>
                                        <th className="px-4 py-3">Email</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            1
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <span
                                                className="py-1 font-semibold leading-tight"
                                            >
                                                Pham Hong Quan
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            hongquan4242@gmail.com
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <button
                                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Edit"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="red" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Edit"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="green" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span className="flex items-center col-span-3">
                                Showing 21-30 of 100
                            </span>
                            <span className="col-span-2"></span>

                            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <nav aria-label="Table navigation">
                                    <ul className="inline-flex items-center">
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Previous"
                                            >
                                                <svg
                                                    className="w-4 h-4 fill-current"
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                1
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                2
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                3
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                4
                                            </button>
                                        </li>
                                        <li>
                                            <span className="px-3 py-1">...</span>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                8
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                9
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Next"
                                            >
                                                <svg
                                                    className="w-4 h-4 fill-current"
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </Admin>
    );
}