"use client";
import service from "../lib/hygraphServices";
import { useSession } from "next-auth/react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/components/ui/use-toast";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Categories } from "@/app/lib/blogCategories";
// import EditorJsRenderer from "../components/richTextEditor/editorJsRenderer";

const EditorBlock = dynamic(
  () => import("@/app/components/richTextEditor/editor"),
  {
    ssr: false,
  }
);

const BlogForm = (props) => {
  const { toast } = useToast();
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
      category: Array.from(formData.getAll("category")).filter(
        (value) => value !== ""
      ),
      description: data,
    };
    console.log(JSON.stringify(formValue));

    if (props.id == null) {
      const { createBlog } = await service.createBlog(
        session.user.email,
        formValue
      );
      console.log(createBlog);
      toast({
        title: "Successfully Created!",
        description: "Blog has been created.",
      });
      push(`/blog/${createBlog.id}`);
    } else {
      const { updateBlog } = await service.updateBlog(props.id, formValue);
      console.log(updateBlog);
      toast({
        title: "Successfully Updated!",
        description: "Blog has been updated.",
      });
      push(`/blog/${updateBlog.id}`);
    }
  };

  return (
    <div className="text-base text-gray-300 font-normal font-serif pb-8 bg-slate-900 pt-20">
      <div className="max-w-2xl mx-auto bg-slate-700 py-4 mt-8 rounded-lg shadow-md overflow-hidden">
        <form
          className="flex flex-col items-center px-4 space-y-4 md:space-y-6 p-6"
          onSubmit={submitData}
        >
          <div className="grid w-full max-w-md items-center gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="bg-gray-50 text-gray-900"
              required
            />
          </div>
          <div className="grid w-full max-w-md items-center gap-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              type="text"
              name="excerpt"
              id="excerpt"
              placeholder="Caption"
              className="bg-gray-50  text-gray-900"
              required
            />
          </div>
          <div className="grid w-full max-w-md items-center gap-2">
            <Label htmlFor="category">Category</Label>
            {Categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id="category" name="category" value={category.id} />
                <label
                  htmlFor="category"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>

          <div className="grid w-full max-w-md items-center gap-2">
            <Label htmlFor="thumbnail">Thumbnail</Label>
            <Input
              type="file"
              name="thumbnail"
              id="thumbnail"
              className="bg-gray-50"
              required
            />
          </div>

          <div className="grid w-full max-w-md items-center gap-2">
            <Label htmlFor="content">Content</Label>

            <div className="border sm:text-sm rounded-lg block w-full bg-gray-50  text-gray-900 p-1.5 px-4 border-slate-950 ">
              <EditorBlock
                data={data}
                onChange={setData}
                holder="editorjs-container"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button type="submit">
              {props.id == null ? "Create" : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
