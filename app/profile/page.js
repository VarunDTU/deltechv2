import service from "@/app/lib/hygraphServices";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ClientOnly from "../components/utils/clientOnly";
import EditProfile from "./editProfile";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

export default async function Page() {
  const session = await getServerSession(options);
  let { author } = await service.getTargetAuthor(session.user.email);
  if (author == null) {
    let { createAuthor } = await service.createAuthor(
      session.user.email,
      session.user.name
    );
    author = createAuthor;
  }

  const name = (string) =>
    `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`;


  return (
    <>
      <div className="font-merriweather">
        <div className="bg-[#040b23] h-[30vh] z-[-1]" />
        <div className="flex md:w-36 md:h-36 absolute top-[22%] md:left-[15%] left-[33%] z-10 shadow-xl bg-gradient-to-r from-[#269af7] to-[#8e59ff] items-center justify-center rounded-full">
          <img
            className="w-[130px] h-[130px] min-w-[120px] rounded-full"
            src={`${author?.photo?.url || "/img/avatar.png"}`}
          />
        </div>

        {/* pc only */}
        <div className="hidden ml-[420px] mt-2 md:flex items-center gap-3">
          <div className="mr-2">
            <p className="text-[24px] truncate">{name(author?.name)}</p>
            <p className="text-[14px] truncate text-gray-400">
              {author?.email}
            </p>
          </div>

          <div className="h-10" style={{ borderLeft: "1px solid black" }} />

          <p className="mt-3 ml-2 text-gray-500 font-light text-[15px] max-w-[400px]">
            {author?.bio}
          </p>

          <div className="h-10" style={{ borderLeft: "1px solid black" }} />

          <ClientOnly>
            <EditProfile author={author}></EditProfile>
          </ClientOnly>
        </div>
      </div>

      {/* mobile only */}
      <div className="mt-20 flex items-center font-merriweather sm:hidden">
        <div className="mx-auto">
          <p className="text-[20px] truncate text-center">
            {name(author?.name)}
          </p>
          <p className="text-[13px] truncate text-gray-400 text-center">
            {author?.email}
          </p>
        </div>

        <ClientOnly>
          <EditProfile author={author}></EditProfile>
        </ClientOnly>
      </div>
      <p className="mt-3 text-center text-gray-700 font-medium tracking-wide text-[14px] max-w-[400px] sm:hidden">
        {author?.bio}
      </p>

      {/* profile start */}
      <div className="pt-[40px] sm:ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] sm:pr-3 max-w-[1800px] 2xl:mx-auto overflow-x-hidden relative ml-[50px]">
        {/* blog start  */}
        <ul className="w-full flex items-center pt-4 border-b sm:justify-start justify-center">
          <li className="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black">
            Blogs
          </li>
        </ul>

        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm my-5 flex flex-col">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
          <div class="p-5">
            <h3 className=" mb-2 text-[#999] ">10 Jan 2023</h3>
            <h1 className=" mb-4 text-3xl text-[#333] font-semibold">
              Blog Card
            </h1>
            <p className="font-normal text-gray-700 mb-4 tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              expedita voluptates blanditiis corporis laborum.
            </p>
            <button className=" border-none outline-none text-white bg-gradient-to-r from-[#269af7] to-[#8e59ff] text-[14px] shadow-btn none transition-all ease-in duration-200 py-3 px-4 mr-4 hover:shadow-hover rounded-[50px]">
              <div className="flex gap-1 items-center">
                <AiOutlineDelete size={15} /> Delete
              </div>
            </button>
            <button className=" border-none outline-none text-white bg-gradient-to-r from-[#269af7] to-[#8e59ff] text-[14px] shadow-btn none transition-all ease-in duration-200 py-3 px-5 hover:shadow-hover rounded-[50px]">
              <div className="flex gap-1 items-center">
                <AiOutlineEdit size={15} /> Edit
              </div>
            </button>
          </div>
        </div>

        <div className="pb-20" />
      </div>
    </>
  );
}