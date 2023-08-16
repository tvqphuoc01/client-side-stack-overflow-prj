"use client";

import { Button, TextField, Typography, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import client from "../../configs/axios.config";

export default function UpdatePassModal({
  isOpen,
  onClose,
  onUpdated,
  userId,
  userEmail,
}) {
  const [newPass, setNewPass] = useState("");
  const [error, setError] = useState("");
  const [resetKey, setResetKey] = useState("");

  useEffect(() => {}, []);

  async function getResetKey() {
    try {
      const res = await client.auth.get(
        `http://localhost:8006/api/get-user-validation-code?user_email=${userEmail}`
      );
      const data = await res.data;
      console.log(data);
      return data.validation_code;
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdatePass() {
    try {
      if (newPass.length < 10) {
        setError("Please enter a password that is at least 10 characters long");
        return;
      }

      const resetKey = await getResetKey();
      console.log(resetKey);

      const res = await client.auth.post(
        `http://localhost:8006/api/update-password`,
        {
          user_id: userId,
          new_password: newPass,
          reset_key: resetKey,
        }
      );
      const data = await res.data.data;
      console.log(data);
      setError("");
      onClose();
      onUpdated();
    } catch (err) {
      // setError(err.message);
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
          <Typography variant="h6">Change Password</Typography>
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
            type="password"
            label="New Password"
            value={newPass}
            onChange={(event) => setNewPass(event.target.value)}
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
            <Button variant="filled" color="success" onClick={handleUpdatePass}>
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
