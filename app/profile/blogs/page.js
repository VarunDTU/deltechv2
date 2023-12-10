"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
// import GetPost_admin from "./getpost";
export default function Page() {
  const { data: session } = useSession({
    required: true,
  });
  const [blogs, setblogs] = useState();
  useEffect(() => {
    async function getpost() {
      const temp={};
      // const temp = await GetPost_admin(session?.user);
      setblogs(temp);
    }
    if (!blogs) {
      getpost();
    }
  }, session);

  return (
    <div className="pt-20 p-2 min-h-screen">
      <ul role="list" className="divide-y divide-gray-100">
        {blogs ? (
          blogs?.blogs.map((blog) => (
            <li key={blog.dlug} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={blog.thumbnail.url}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {blog.title}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {blog.createdAt.slice(0, 16)}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {blog.email}
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div>loading</div>
        )}
      </ul>
    </div>
  );
}
