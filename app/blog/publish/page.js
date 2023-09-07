"use client";
import dynamic from "next/dynamic";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { CreateBlog } from "./uploadBlog";
export default withPageAuthRequired(function Page() {
  const Jodit = dynamic(() => import("./editor"), { ssr: false });

  return (
    <div>
      <Jodit></Jodit>
    </div>
  );
});
