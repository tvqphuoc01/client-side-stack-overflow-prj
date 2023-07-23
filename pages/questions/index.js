"use client"; // This is a client component

import Layout from "../../components/client-layout/layout";

export default function QuestionList() {
  const category = [
    {
      id: "fefd7ea6-b1c7-4bdf-a86c-c008a585fdac",
      name: "Category 1",
    },
    {
      id: "fc0b925d-2f28-4114-9e03-3a5d973165cd",
      name: "Category 2",
    },
    {
      id: "f7e653b9-c7a5-4ec5-921a-929702b7160e",
      name: "Category 3",
    },
    {
      id: "f014c9b3-e7f2-4f51-ae29-f34c268c6983",
      name: "Category 4",
    },
    {
      id: "ef51c2a3-9062-4e90-ab8a-c496e9b7da4c",
      name: "Category 5",
    },
    {
      id: "e7fdbd97-8a49-46f1-9ba2-198a5be07081",
      name: "Category 6",
    },
    {
      id: "e5327cd1-c4d7-425c-a02c-e1875c8f3b1e",
      name: "Category 7",
    },
    {
      id: "e18c9f24-edec-47e5-aa61-1b39c01d936e",
      name: "Category 8",
    },
    {
      id: "deb4d349-a555-4402-9c68-e689012904a0",
      name: "Category 9",
    },
    {
      id: "d972805c-aeb8-4052-b720-31054b3b914d",
      name: "Category 10",
    },
    {
      id: "d7da7a6e-0135-4a29-a557-00bf38005adf",
      name: "Category 11",
    },
    {
      id: "d6037f0b-5a3b-48d3-acf8-67472248e0db",
      name: "Category 12",
    },
  ];

  const tag = [
    {
      id: "ffae6966-f22a-4bfd-9401-9b61b378d0df",
      name: "Tag 1",
    },
    {
      id: "ff861629-df51-4193-9732-e981408926c8",
      name: "Tag 2",
    },
    {
      id: "ff2ac918-90d6-4053-927b-4c4a6380deae",
      name: "Tag 3",
    },
    {
      id: "fdd7190c-2aa8-4bc6-9aae-6ecdda1d28d4",
      name: "Tag 4",
    },
    {
      id: "fdb9605f-3031-4047-9ca4-50d9aecc21c9",
      name: "Tag 5",
    },
    {
      id: "fd684baa-1117-4dbd-9539-bbe0474739ea",
      name: "Tag 6",
    },
    {
      id: "fd4f39c6-8983-453b-a44a-da2f5ed92bc6",
      name: "Tag 7",
    },
    {
      id: "fd26adc6-a83f-416b-97ec-c4d3131f78c9",
      name: "Tag 8",
    },
    {
      id: "fa3077ea-ae3c-4761-9b84-619451d64f1b",
      name: "Tag 9",
    },
    {
      id: "f916bb49-4385-491b-b41c-ec43d6526ac4",
      name: "Tag 10",
    },
    {
      id: "f86f8183-d687-474e-90e6-2a69c06dfa50",
      name: "Tag 11",
    },
    {
      id: "f67b5274-a6a2-41f7-bb1d-44da07569b11",
      name: "Tag 12",
    },
    {
      id: "f3fcdb7a-598a-4eab-906a-1dbe3419f4b9",
      name: "Tag 13",
    },
    {
      id: "f3eb98c4-686e-409f-9fe9-b3019807ac50",
      name: "Tag 14",
    },
    {
      id: "f363b0c3-181d-438d-88ac-ef872f7b760a",
      name: "Tag 15",
    },
    {
      id: "f2dcd8ca-e1d1-4619-9dcd-7cfe7d82988a",
      name: "Tag 16",
    },
    {
      id: "f1a84116-3e5d-4f58-b3c6-a02da97052a6",
      name: "Tag 17",
    },
    {
      id: "f1813566-fe57-4812-9104-30c084a3f027",
      name: "Tag 18",
    },
    {
      id: "f12a68d7-d195-4729-ad18-0bcb941631d4",
      name: "Tag 19",
    },
    {
      id: "f12399e8-0d7b-4268-a1ea-8c15ec9ebad4",
      name: "Tag 20",
    },
    {
      id: "efa56494-020a-439a-b052-dd3ec91d2b81",
      name: "Tag 21",
    },
    {
      id: "ef5d1a7f-5fbc-40c0-988b-705777a0c6a0",
      name: "Tag 22",
    },
    {
      id: "ef1d3b8c-6e2c-40d4-8768-b51b2fa9bfa9",
      name: "Tag 23",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 flex flex-col items-center min-h-screen bg-slate-50">
        <div className="col-span flex flex-col justify-between h-[95%] ml-16 my-4 rounded-lg shadow-md bg-white p-3">
          <div className="p-4">
            <h1 className="text-gray-700 text-2xl font-semibold hover:underline">
              Filter by
            </h1>
            <div className="py-4">
              <h1 className="text-gray-700 text-lg font-semibold hover:underline">
                Category
              </h1>
              {/* <div className="pt-2 relative mx-auto text-gray-600 w-full">
                <input
                  className="border-2 mt-[1.5rem] border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search category name"
                />
                <button className="absolute right-0 top-0 mx-3 my-10 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  Web development
                </label>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  Checked state
                </label>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  Database
                </label>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  Game development
                </label>
              </div> */}

              {/* Render category */}
            </div>
            <div className="py-4">
              <h1 className="text-gray-700 text-lg font-semibold hover:underline">
                Tags
              </h1>
              {/* <div className="pt-2 relative mx-auto text-gray-600 w-full">
                <input
                  className="border-2 mt-[1.5rem] border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search tag name"
                />
                <button className="absolute right-0 top-0 mx-3 my-10 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  Python
                </label>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  C#
                </label>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  C++
                </label>
              </div>
              <div className="flex mt-[1.5rem] pl-[3rem] items-center">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checked-checkbox"
                  className="inline-block pl-[0.75rem] hover:cursor-pointer"
                >
                  HTML CSS
                </label>
              </div> */}

              {/* Render tag */}
            </div>
          </div>

          <div className="p-5">
            <button
              type="button"
              className="text-white float-right w-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Apply
            </button>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-between h-[95%] mr-16 my-4 rounded-lg shadow-md bg-white p-3">
          <div className="p-4">
            <div className="pt-2 relative mx-auto text-gray-600 w-full">
              <input
                className="border-2 mt-[0.5rem] border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Type what you want to find here"
              />
              <button className="absolute right-0 top-0 mx-3 my-6 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <h1 className="text-xl text-gray-700 font-bold">Results</h1>
              <a
                href="/ask-question"
                className="text-white float-right w-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                + Add your question
              </a>
            </div>
            <div className="mb-7">
              <div className="mt-4 border-b border-gray-300">
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
                    5
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
                    5
                  </button>
                  <button className="inline-flex items-center px-1 -ml-1 flex-column">
                    <svg
                      className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
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
                    2 Answers
                  </button>
                </div>
                <a
                  className="text-lg text-green-500 font-bold hover:underline"
                  href="/questions/1"
                >
                  Build Your New Idea with Laravel Freamwork.
                </a>
                <p className="text-sm text-gray-500 font-medium hover:text-gray-700 mt-2">
                  Laravel is a free and open-source PHP Framework htmlFor Web
                  Artisans based on Symfony that helps craft Web Applications
                  following the MVC (Model View Controller) design pattern.
                </p>
                <div className="flex flex-wrap py-6 space-x-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    MambaUI
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    TailwindCSS
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    Angular
                  </a>
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
                        Pham Hong Quan | June 24th, 2023 at 16:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-b border-gray-300">
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
                    5
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
                    5
                  </button>
                  <button className="inline-flex items-center px-1 -ml-1 flex-column">
                    <svg
                      className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
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
                    2 Answers
                  </button>
                </div>
                <a
                  className="text-lg text-green-500 font-bold hover:underline"
                  href="/questions/1"
                >
                  Build Your New Idea with Laravel Freamwork.
                </a>
                <p className="text-sm text-gray-500 font-medium hover:text-gray-700 mt-2">
                  Laravel is a free and open-source PHP Framework htmlFor Web
                  Artisans based on Symfony that helps craft Web Applications
                  following the MVC (Model View Controller) design pattern.
                </p>
                <div className="flex flex-wrap py-6 space-x-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    MambaUI
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    TailwindCSS
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    Angular
                  </a>
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
                        Pham Hong Quan | June 24th, 2023 at 16:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-b border-gray-300">
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
                    5
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
                    5
                  </button>
                  <button className="inline-flex items-center px-1 -ml-1 flex-column">
                    <svg
                      className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
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
                    2 Answers
                  </button>
                </div>
                <a
                  className="text-lg text-green-500 font-bold hover:underline"
                  href="/questions/1"
                >
                  Build Your New Idea with Laravel Freamwork.
                </a>
                <p className="text-sm text-gray-500 font-medium hover:text-gray-700 mt-2">
                  Laravel is a free and open-source PHP Framework htmlFor Web
                  Artisans based on Symfony that helps craft Web Applications
                  following the MVC (Model View Controller) design pattern.
                </p>
                <div className="flex flex-wrap py-6 space-x-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    MambaUI
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    TailwindCSS
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    Angular
                  </a>
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
                        Pham Hong Quan | June 24th, 2023 at 16:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
