import React from "react";
import service from "@/app/lib/hygraphServices";
import EditorJsRenderer from "@/app/components/richTextEditor/editorJsRenderer";

export default async function Page({ params }) {
  const { blog } = await service.getTargetBlog(params.slug);

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-center items-center py-16">
          <img
            src={`${blog.author.photo?.url || "/img/avatar.png"}`}
            alt="img"
            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="px-5">
            <h4 className="text-lg font-semibold">{blog.author.name}</h4>
            <p className="dark:text-gray-400">{blog.author.bio}</p>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto pt-10 rounded">
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-800">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-4xl text-center font-semibold sm:text-3xl pb-5"
              >
                {blog.title}
              </a>
              <img
                src={blog.thumbnail.url}
                alt=""
                className="w-full h-60 sm:h-96 dark:bg-gray-500 rounded"
              />
            </div>
            <div className="text-gray-100">
              <EditorJsRenderer data={blog.description} className="text-sm" />
            </div>
          </div>
        </div>
        <div className="border-t mt-10 bottom-0 dark:border-gray-700"></div>
      </div>
    </div>
  );
}
