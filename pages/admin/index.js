"use client";
import Layout from "../../components/admin-layout/layout";

// This is a client component

export default function Admin({ window, children }) {

  return (
    <Layout><main >{children}</main></Layout >
  );
}
