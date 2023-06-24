"use client";
import Layout from "../../components/admin-layout/layout";

// This is a client component

export default function Admin() {
  return (
    <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
  );
}
Admin.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
