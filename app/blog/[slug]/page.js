import React from "react";
import service from "@/app/lib/hygraphServices";
import EditorJsRenderer from "@/app/components/richTextEditor/editorJsRenderer";

export default async function Page({ params }) {
  const { blog } = await service.getTargetBlog(params.slug);
  
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={blog.thumbnail.url}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                {blog.title}
              </a>
              <p className="text-xs dark:text-gray-400">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  {blog.author.name}
                </a>
              </p>
            </div>
            <div className="text-gray-100">
            <EditorJsRenderer data={blog.description} />
              
            </div>
          </div>
        </div>
        <div className="pt-12 border-t dark:border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src={`${blog.author.photo?.url || "/img/avatar.png"}`}
              alt="img"
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">{blog.author.name}</h4>
              <p className="dark:text-gray-400">{blog.author.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
