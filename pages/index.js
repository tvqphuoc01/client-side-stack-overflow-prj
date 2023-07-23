import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Main() {

  useEffect(() => {
    router.replace("/home");
  });
}
