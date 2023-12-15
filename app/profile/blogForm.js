"use client";
import service from "../lib/hygraphServices";
import { useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from "next/dynamic";
const EditorBlock = dynamic(() => import("@/app/components/richTextEditor/editor"), {
  ssr: false,
});

const BlogForm = (props) => {
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
    // if (props.id == null) {
    //   const resp = await service.createBlog(session.user.email, formValue);
    //   console.log(resp);
    // } else {
    //   const resp = await service.updateBlog(props.id, formValue);
    //   console.log(resp);
    // }
  };
  return (
    <div className="text-base mt-2 text-center font-normal font-serif text-zinc-800 border-t pt-5 pb-8">
      <form className="space-y-4 md:space-y-6" onSubmit={submitData}>
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            // required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium">
            Thumbnail
          </label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            // required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="excerpt" className="block mb-2 text-sm font-medium">
            Excerpt
          </label>
          <input
            type="text"
            name="excerpt"
            id="excerpt"
            placeholder="caption for blog"
            className="border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            // required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2 text-sm font-medium">
            Content
          </label>
          <EditorBlock
          data={data} onChange={setData} holder="editorjs-container" />
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
  );
};

export default BlogForm;
