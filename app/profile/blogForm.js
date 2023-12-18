"use client";
import service from "../lib/hygraphServices";
import { useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation';
import EditorJsRenderer from "../components/richTextEditor/editorJsRenderer";
const EditorBlock = dynamic(
  () => import("@/app/components/richTextEditor/editor"),
  {
    ssr: false,
  }
);

const BlogForm = (props) => {
  const { push } = useRouter();
  const { data: session, status } = useSession();
  const [data, setData] = useState(null);
  const submitData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValue = {
      title: formData.get("title"),
      thumbnail: formData.get("thumbnail"),
      excerpt: formData.get("excerpt"),
      description: data,
    };
    console.log(JSON.stringify(formValue.description));
    if (props.id == null) {
      const {createBlog} = await service.createBlog(session.user.email, formValue);
      console.log(createBlog);
      push(`/blog/${createBlog.id}`);
    } else {
      const {updateBlog} = await service.updateBlog(props.id, formValue);
      console.log(updateBlog);
      push(`/blog/${updateBlog.id}`);
    }
  };
  return (
    <div className="text-base text-center font-normal font-serif text-zinc-800 border-t pb-8 bg-gray-900 pt-20">
      <div className="max-w-5xl mx-auto bg-slate-800 mt-10 rounded-lg shadow-md overflow-hidden">
        {/* Box container starts */}
        <form
          className="flex flex-col items-center space-y-4 md:space-y-6 p-6"
          onSubmit={submitData}
        >
          <div className="w-full">
            <label
              htmlFor="title"
              className="block text-slate-100 mb-2 text-lg font-semibold"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              autoComplete="off"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="thumbnail"
              className="block text-slate-100 mb-2 text-lg font-semibold pt-5"
            >
              Thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              // required
              autoComplete="off"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="excerpt"
              className="block text-slate-100 mb-2 text-lg font-semibold pt-5"
            >
              Excerpt
            </label>
            <input
              type="text"
              name="excerpt"
              id="excerpt"
              placeholder="caption for blog"
              className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              // required
              autoComplete="off"
            />
          </div>
          <div className="w-full max-w-md">
            <label
              htmlFor="content"
              className="block text-slate-100 mb-2 text-lg font-semibold pt-5"
            >
              Content
            </label>
            <div className="border sm:text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600">
              <EditorBlock
                data={data}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>
            {/* <div className="text-gray-100">
              <EditorJsRenderer data={data} className="text-sm" />
            </div> */}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="font-merriweather tracking-wider text-md w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold mb-2 transition-all duration-500 bg-gradient-to-tl from-[#1341EC] via-[#5CA0F2] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0"
            >
              {props.id == null ? "Create" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
