"use client"; // This is a client component

import useAxios from "axios-hooks";
import { useState } from "react";
import client from "../../configs/axios.config";
import { signIn, signOut } from "next-auth/react";
import { CircularProgress } from "@mui/material";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 10) {
      setErrorMessage("Password must be at least 10 characters long.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else if (password !== repeatPassword) {
      setErrorMessage("Password and repeat password do not match.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } else {
      try {
        setLoading(true);
        const result = await client.auth.post(
          "http://localhost:8006/api/create-user",
          {
            full_name: name,
            email: email,
            password: password,
          }
        );
        setSuccessMessage("Sign up successful. Please login to continue.");
        setTimeout(() => {
          setSuccessMessage("");
          window.location.href = "/sign-in";
        }, 1000);
        // redirect to sign in page
      } catch (error) {
        console.log("error", error.response.data.message);
        switch (error.response.data.message) {
          case "Email already taken":
            setErrorMessage("Email already exists");
            break;
          default:
            setErrorMessage("Something went wrong. Please try again later.");
            break;
        }
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/foreground.svg"
          alt="Foreground Image"
          className="w-full h-full object-cover"
        />
      </div>

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

      <div className="w-2/5 max-w-md bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10">
        <h1 className="text-4xl font-bold text-green-400">Stack Overflow</h1>
        <h2 className="text-3xl font-bold">Sign up to your account</h2>
        <button
          className="flex items-center justify-center bg-white py-2 px-4 rounded border border-gray-300 w-full"
          onClick={() => signIn("google")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          <span className="text-base font-normal">Sign up with Google</span>
        </button>
        <div className="flex items-center space-x-2 w-full">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-base font-normal px-2">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <form className="space-y-4 w-full" onSubmit={handleSignUp}>
          <input
            required
            type="text"
            placeholder="Name"
            className="w-full rounded border border-gray-300 py-2 px-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded border border-gray-300 py-2 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-300 py-2 px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Repeat Password"
            className="w-full rounded border border-gray-300 py-2 px-4"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          <button
            className="w-full py-2 px-4 rounded-md text-white font-bold bg-green-400"
            type="submit"
          >
            {!loading ? "Sign up" : <CircularProgress color="inherit" />}
          </button>
        </form>
        <div className="flex items-center space-x-2">
          <span className="text-base font-normal">
            Already have an account?
          </span>
          <button
            className="text-base font-bold text-green-400"
            onClick={() => (window.location.href = "/sign-in")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
