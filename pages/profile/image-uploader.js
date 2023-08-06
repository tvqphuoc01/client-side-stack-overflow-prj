"use client"; // This is a client component

import { useState, useEffect } from "react";
import { Button, Modal, Typography } from "@mui/material";
import client from "../../configs/axios.config";

export default function ImageUploader({
  isOpen,
  onClose,
  onUpdated,
  userId,
  initAvatarPath,
}) {
  const [localFilePath, setLocalFilePath] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initAvatarPath) {
      setLocalFilePath(initAvatarPath);
    }
  }, [initAvatarPath]);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "stack-overflow-clone-avatar"); // Replace with your upload preset

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

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const imageURL = await handleImageUpload();

    console.log("imageURL: ", imageURL);
    console.log("userId: ", userId);

    try {
      const res = await client.auth.put(
        `http://localhost:8006/api/user-update-me`,
        {
          user_id: userId,
          image_url: imageURL,
        }
      );
      const data = await res.data.data;
      console.log(data);
      setError("");
      onClose();
      onUpdated();
    } catch (err) {
      // setError("Full name is not valid, please try again");
      setError(err.toString());
      console.log(err);
    }
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const paperStyle = {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "16px",
    minWidth: "300px",
  };

  return (
    <Modal open={isOpen} style={modalStyle}>
      <div style={paperStyle}>
        <Typography variant="h6">Upload Avatar</Typography>

        {/* Error Message */}
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "16px",
            color: "#FF0000",
          }}
        >
          {error}
        </Typography>

        <img
          src={
            localFilePath
              ? localFilePath
              : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
          }
          alt="Avatar Image"
          width={400}
          height={400}
          className="rounded-full object-fill mb-4"
        />
        <input type="file" onChange={handleFileChange} />

        <div className="flex flex-row justify-end gap-2 pt-4">
          <Button onClick={onClose} variant="filled" color="success">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="outlined" color="success">
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
}
