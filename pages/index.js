import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "../components/client-layout/layout"

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  });

  return null;
}
