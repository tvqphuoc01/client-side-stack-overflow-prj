"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import client from "../../configs/axios.config";

// This is a client component

export default function Verify() {
    const router = useRouter();
    const { id } = router.query;
    const [text, setText] = useState("Verify Successful")
    useEffect(() => {
        if (id === undefined) {
            setText("Something is wrong")
        } else {
            verifyUser()
        }
    }, [id])

    async function verifyUser() {
        try {
            const res = await client.auth.get(`http://localhost:8006/api/verify-user?user_id=${id}`)
            setText("Verify Successful")
        } catch (err) {
            setText("Verify Unsuccessful")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600 relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="/foreground.svg"
                    alt="Foreground Image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-2/5 max-w-md bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10">
                <p
                    className="text-3xl font-semibold"
                    style={{
                        background: "-webkit-linear-gradient(#82D200, #59AD00)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>{text}</p>
                {text === "Verify Successful" ? <p>Please click <a href="/sign-in" className="underline text-blue-500">here</a> to login</p> : <></>}
            </div>
        </div>
    );
}
