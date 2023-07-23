"use client"; // This is a client component
import Layout from "../../components/client-layout/layout";
import Select from "react-select";
import { useState, useEffect } from "react";
import client from "../../configs/axios.config";
import { hasCookie, getCookie } from "cookies-next";

export default function AskQuestion() {
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

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!hasCookie("user_uuid")) {
      window.location.href = "/sign-in";
    }
  }, []);

  const setHandleCategory = (e) => {
    setSelectedCategories(
      Array.isArray(e) ? e.map((category) => category.value) : []
    );
  };

  const setHandleTag = (e) => {
    setSelectedTags(Array.isArray(e) ? e.map((tag) => tag.value) : []);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    // http://localhost:8009/api/create-question
    // title = validated_data.get('title')
    // content = validated_data.get('content')
    // tag = validated_data.get('tag')
    // category = validated_data.get('category')
    // user_id = validated_data.get('user_id')
    // image_url = request.data.get('image_url', '')
    const userUUID = getCookie("user_uuid");
    const data = {
      title: title,
      content: content,
      tag: selectedTags,
      category: selectedCategories,
      user_id: userUUID,
      image_url: imageUrl,
    };

    client.main
      .post("http://localhost:8009/api/create-question", data)
      .then((res) => {
        console.log(res);
        // window.location.href = "/questions";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="flex items-start justify-center min-h-screen py-5 bg-gray-100">
        <div className="w-4/5 bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10 shadow-2xl">
          <h2 className="text-3xl font-bold">Ask your question</h2>
          <div className="flex items-center space-x-2 w-full"></div>

          <form className="space-y-4 w-full" onSubmit={handleSubmitQuestion}>
            <label className="block">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">
                Title
              </span>
              <input
                required
                type="text"
                placeholder="Input your title here"
                className="w-full rounded border border-gray-300 py-2 px-4"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label className="block">
              <span class="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">
                Category
              </span>
              {/* <select
                className="w-full rounded border border-gray-300 py-2 px-4 text-slate-700 text-sm"
              >
                <option selected disabled hidden>
                  Select at least one category
                </option>
                {category.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select> */}

              <Select
                required
                placeholder="Select at least one category"
                options={category.map((item) => ({
                  key: item.id,
                  value: item.id,
                  label: item.name,
                }))}
                isMulti
                onChange={setHandleCategory}
              />
            </label>
            <label className="block">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">
                List of tags
              </span>
              {/* <select
                id="countries"
                className="w-full rounded border border-gray-300 py-2 px-4 text-slate-700 text-sm"
              >
                <option selected disabled hidden>
                  Select at least one tag
                </option>
                {tag.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select> */}

              <Select
                required
                placeholder="Select at least one tag"
                options={tag.map((item) => ({
                  key: item.id,
                  value: item.id,
                  label: item.name,
                }))}
                isMulti
                onChange={setHandleTag}
              />
            </label>

            <div className="block">
              <h1 className="text-slate-700 text-2xl font-extrabold pb-4">
                Your problem
              </h1>
              <textarea
                required
                type="text"
                placeholder="Input your content here"
                rows={6}
                className="w-full rounded border border-gray-300 p-4"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* input imare url (similar to title) */}
            <label className="block">
              <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">
                Image URL
              </span>
              <input
                required
                type="url"
                placeholder="Input your image url here"
                className="w-full rounded border border-gray-300 py-2 px-4"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>

            <button
              className="text-white float-right w-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              //   type="submit"
            >
              Post your question
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
