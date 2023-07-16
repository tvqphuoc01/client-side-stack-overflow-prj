"use client";
import Admin from "../index";

// This is a client component

export default function Replies() {

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
                                        <th className="px-4 py-3">Order</th>
                                        <th className="px-4 py-3">Reply at</th>
                                        <th className="px-4 py-3">Reply by</th>
                                        <th className="px-4 py-3">From answer</th>
                                        <th className="px-4 py-3">Content</th>
                                        <th className="px-4 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                >
                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            1
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            16.07.2023 20:55
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Pham Hong Quan
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <a className="underline text-blue-500" href="https://www.google.com.vn/">70d7a1edcc48ac001fedd333</a>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada lorem suscipit, fermentum ex non, semper tortor?
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <button
                                                    className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Delete"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            1
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            16.07.2023 20:55
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Pham Hong Quan
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <a className="underline text-blue-500" href="https://www.google.com.vn/">70d7a1edcc48ac001fedd333</a>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada lorem suscipit, fermentum ex non, semper tortor?
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <button
                                                    className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Delete"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            1
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            16.07.2023 20:55
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Pham Hong Quan
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <a className="underline text-blue-500" href="https://www.google.com.vn/">70d7a1edcc48ac001fedd333</a>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada lorem suscipit, fermentum ex non, semper tortor?
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <button
                                                    className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Delete"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 dark:text-gray-400">
                                        <td className="px-4 py-3 text-sm">
                                            1
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            16.07.2023 20:55
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Pham Hong Quan
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            <a className="underline text-blue-500" href="https://www.google.com.vn/">70d7a1edcc48ac001fedd333</a>
                                        </td>
                                        <td className="px-4 py-3 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada lorem suscipit, fermentum ex non, semper tortor?
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <button
                                                    className="flex items-center justify-between py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                    aria-label="Delete"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                            class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span class="flex items-center col-span-3">
                                Showing 21-30 of 100
                            </span>
                            <span class="col-span-2"></span>

                            <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <nav aria-label="Table navigation">
                                    <ul class="inline-flex items-center">
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Previous"
                                            >
                                                <svg
                                                    class="w-4 h-4 fill-current"
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                1
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                2
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                3
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                4
                                            </button>
                                        </li>
                                        <li>
                                            <span class="px-3 py-1">...</span>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                8
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                9
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Next"
                                            >
                                                <svg
                                                    class="w-4 h-4 fill-current"
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
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