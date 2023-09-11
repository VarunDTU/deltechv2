"use client";
import dynamic from "next/dynamic";
import { CreateBlog } from "./uploadBlog";
import { useSession } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession({
    required: true,
  });
  const Jodit = dynamic(() => import("./editor"), { ssr: false });

  return (
    <div>
      <Jodit></Jodit>
    </div>
  );
};
