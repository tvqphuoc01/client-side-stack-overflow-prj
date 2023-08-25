"use client";
import { useState } from "react";
import client from "../../configs/axios.config";

// This is a client component

export default function Verify() {
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600 relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="/foreground.svg"
                    alt="Foreground Image"
                    className="w-full h-full object-cover"
                />
            </div>
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
            <div className="w-2/5 max-w-md bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10">
                <h1 className="text-4xl font-bold text-green-400">Stack Overflow</h1>
                <p className="text-center">Email has been sent successfully. Please click <a href="/sign-in" className="underline text-blue-500">here</a> to login</p>
            </div>
        </div>
    );
}
