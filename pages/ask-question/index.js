"use client"; // This is a client component
import Layout from "../../components/client-layout/layout";
import Select from "react-select";
import { useState, useEffect } from "react";
import client from "../../configs/axios.config";
import { hasCookie, getCookie } from "cookies-next";

export default function AskQuestion() {
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [localFilePath, setLocalFilePath] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    if (getCookie("user_uuid") === "") {
      window.location.href = "/sign-in";
    }

    getCategory();
    getTag();
  }, []);

  async function getCategory() {
    const res = await client.main.get(
      "http://localhost:8009/api/get-list-category"
    );
    setCategory(res.data.data.categories);
  }

  async function getTag() {
    const res = await client.main.get("http://localhost:8009/api/get-list-tag");
    setTag(
      res.data.data.tags.map((item) => ({ id: item.id, name: item.name }))
    );
  }

  const setHandleCategory = (e) => {
    setSelectedCategories(
      Array.isArray(e) ? e.map((category) => category.value) : []
    );
  };

  const setHandleTag = (e) => {
    setSelectedTags(Array.isArray(e) ? e.map((tag) => tag.value) : []);
  };

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();

    const imageURL = await handleImageUpload();

    const userUUID = getCookie("user_uuid");
    const data = {
      title: title,
      content: content,
      category_ids: selectedCategories,
      tag_ids: selectedTags,
      user_id: userUUID,
      image_url: imageURL,
    };

    client.main
      .post("http://localhost:8009/api/create-question", data)
      .then((res) => {
        console.log(res);
        setSuccessMessage(
          "Your question has been created, The question will be reviewed by our admin before it is posted"
        );
        setTimeout(() => {
          setSuccessMessage("");
          window.location.href = `/profile/${userUUID}`;
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          "Create question failed, this question may have been asked before. Please try again."
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "stack-overflow-clone-question"); // Replace with your upload preset

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/n3-udpt/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  };

  const handleFileChange = (event) => {
    if (event?.target?.files?.[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setLocalFilePath(URL.createObjectURL(file));
      setImage(file);
    }
  };

  return (
    <Layout>
      {/* Error Message  */}
      <div
        id="error"
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-0 right-0 mr-4 mt-4 z-20"
        role="alert"
        style={{ display: errorMessage ? "block" : "none" }}
      >
        <div className="flex items-center space-x-2">
          <span className="block">{errorMessage}</span>
          <span onClick={() => setErrorMessage("")} role="button">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              role="button"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Success Message  */}
      <div
        id="success"
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute top-0 right-0 mr-4 mt-4 z-20"
        role="alert"
        style={{ display: successMessage ? "block" : "none" }}
      >
        <div className="flex items-center space-x-2">
          <span className="block">{successMessage}</span>
          <span onClick={() => setSuccessMessage("")} role="button">
            <svg
              className="fill-current h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              role="button"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>

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
                Image
              </span>
              <img
                src={
                  localFilePath
                    ? localFilePath
                    : "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
                }
                alt="Avatar Image"
                width={300}
                height={300}
                className="object-fill mb-4"
              />
              <input type="file" onChange={handleFileChange} />
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
