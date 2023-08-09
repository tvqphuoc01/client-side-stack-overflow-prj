"use client"; // This is a client component

import { useState, useEffect } from "react";
import Layout from "../../components/client-layout/layout";
import client from "../../configs/axios.config";
import Select from "react-select";
import QuestionCard from "../../components/client-layout/card-item/card-question";

export default function QuestionList() {
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [question, setQuestion] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedTag, setSelectedTag] = useState();
  const [searchValue, setSearchValue] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategory();
    getTag();
    getQuestion();
  }, [loading]);

  async function getCategory() {
    const res = await client.main.get(
      "http://localhost:8009/api/get-list-category"
    );
    setCategory(res.data.data.categories);
  }

  async function getTag() {
    const res = await client.main.get("http://localhost:8009/api/get-list-tag");
    setTag(
      res.data.data.tags.map((item) => ({
        id: item.tag_id,
        name: item.tag_name,
      }))
    );
  }

  async function getQuestion(category, tag, searchValue) {
    const res = await client.main.get(
      "http://localhost:8009/api/get-list-question",
      {
        params: {
          page_size: 999,
          category_id: category,
          tag_id: tag,
          search: searchValue,
        },
      }
    );
    setQuestion(res.data.data);
    setLoading(false);
  }

  const setHandleCategory = (e) => {
    setSelectedCategory(e ? e.value : null);
  };

  const setHandleTag = (e) => {
    setSelectedTag(e ? e.value : null);
  };

  const handleApplyButton = () => {
    getQuestion(selectedCategory, selectedTag, searchValue);
  };

  const handleResetButton = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchValue("");
  };

  return (
    <Layout>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <img
            src="https://www.hadecoration.gift/public/images/ajax-loader-green.gif"
            className="w-1/6 pb-4"
            alt="Loading"
          />
          <p className="text-2xl font-bold text-gray-500">Loading...</p>
        </div>
      ) : (
        <div className="md:grid md:grid-cols-3 gap-4 flex flex-col items-start min-h-screen bg-slate-50 ">
          <div className="col-span flex flex-col justify-between md:ml-16 md:my-4 rounded-lg shadow-md bg-white p-3">
            <div className="p-4">
              <h1 className="text-gray-700 text-2xl font-semibold">Search</h1>
              <div className="pt-2 relative mx-auto text-gray-600 w-full">
                <input
                  className="border-2 mt-[0.5rem] border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Title or content here"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
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
              <h1 className="text-gray-700 text-2xl font-semibold pt-10">
                Filter
              </h1>
              <div className="py-4">
                <h1 className="text-gray-700 text-lg font-semibold pb-2">
                  Category
                </h1>

                {/* Render category */}
                <Select
                  required
                  placeholder="Select category"
                  options={category.map((item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.name,
                  }))}
                  // isMulti
                  isClearable
                  onChange={setHandleCategory}
                />
              </div>
              <div className="py-4">
                <h1 className="text-gray-700 text-lg font-semibold pb-2">
                  Tags
                </h1>
                {/* Render tag */}
                <Select
                  required
                  placeholder="Select tag"
                  options={tag.map((item) => ({
                    key: item.id,
                    value: item.id,
                    label: item.name,
                  }))}
                  // isMulti
                  isClearable
                  onChange={setHandleTag}
                />
              </div>
            </div>

            <div className="p-5">
              <button
                type="button"
                onClick={handleApplyButton}
                className="text-white float-right w-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Apply
              </button>
              {/* <button
              type="button"
              onClick={handleResetButton}
              className="text-green-600 float-right w-50 bg-white hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Reset
            </button> */}
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-between h-[95%] mr-16 my-4 rounded-lg shadow-md bg-white p-3">
            <div className="p-4">
              {/* <div className="pt-2 relative mx-auto text-gray-600 w-full">
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
            </div> */}
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
                {question.length > 0 ? (
                  question.map((item) => {
                    return (
                      <QuestionCard
                        key={item.id} // Don't forget to add a unique key prop when rendering in a loop
                        question={item}
                      />
                    )
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/empty-state.png"
                      className="w-1/2"
                      alt="Empty State"
                    />
                    <p className="text-2xl font-bold text-gray-500">
                      No question
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
