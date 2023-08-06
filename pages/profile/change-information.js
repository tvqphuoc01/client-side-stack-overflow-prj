"use client";

import { Button, TextField, Typography, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import client from "../../configs/axios.config";

export default function ChangeInformationModal({
  isOpen,
  onClose,
  onUpdated,
  initFullName,
  userId,
}) {
  const [fullName, setFullName] = useState(initFullName);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initFullName) {
      setFullName(initFullName);
    }
  }, [initFullName]);

  async function handleUpdateInfo() {
    try {
      const res = await client.auth.put(
        `http://localhost:8006/api/user-update-me`,
        {
          user_id: userId,
          full_name: fullName,
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
  }

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
    <div>
      <Modal open={isOpen} style={modalStyle}>
        <div style={paperStyle}>
          <Typography variant="h6">Update Information</Typography>
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

          <TextField
            label="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            fullWidth
            margin="normal"
          />
          {/* <TextField
            label="Avatar URL"
            value={avatar}
            onChange={() => setAvatar(event.target.value)}
            fullWidth
            margin="normal"
          /> */}
          <div className="flex flex-row justify-end gap-2 pt-4">
            <Button variant="filled" color="success" onClick={handleUpdateInfo}>
              Update
            </Button>
            <Button variant="outlined" color="success" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
