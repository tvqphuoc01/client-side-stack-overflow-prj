"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/admin-layout/layout";
import { useRouter } from "next/router";
import client from "../../configs/axios.config";
import { hasCookie, getCookie } from "cookies-next";
// This is a client component

export default function Admin({children }) {
  const router = useRouter();
  
  useEffect(() => {
    checkUser();
  }, [])

  function checkUser(){
        const userUUID = getCookie("user_uuid");
        if (!userUUID){
          router.replace('/sign-in');
        }
        try
          {
            setTimeout(async() => {
              await client.auth.get(`http://localhost:8006/api/get-user-by-id?user_id=${userUUID}`).then((res) => {
              if(res.data.data.role !== 'ADMIN'){
                router.replace('/sign-in');
              }
            })
          }, 1);
          } catch (err) {
            console.log(err);
          }
      }
  return (
    <Layout><main >{children}</main></Layout>
  );
}
