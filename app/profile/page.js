import service from "@/app/lib/hygraphServices";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ClientOnly from "../components/utils/clientOnly";
import EditProfile from "./editProfile";

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
  return (
    <>
      <div className="pt-[90px] ml-[90px] 2xl:pl-[185px] lg:pl-[160px] lg:pr-0 w-[calc(100%-90px)] pr-3 max-w-[1800px] 2xl:mx-auto">
        <div className="flex w-[calc(100vw-230px)]">
          <img
            className="w-[120px] min-w-[120px] rounded-full"
            src={`${author?.photo?.url || "/img/avatar.png"}`}
          />

          <div className="ml-5 w-full">
            <div>
              <p className="text-[30px] font-bold truncate">{author?.name}</p>
              <p className="text-[18px] truncate">{author?.email}</p>
            </div>
            <ClientOnly>
              <EditProfile author={author}></EditProfile>
            </ClientOnly>
          </div>
        </div>

        <p className="pt-4 mr-4 text-gray-500 font-light text-[15px] pl-1.5 max-w-[500px]">
          {author?.bio}
        </p>

        <ul className="w-full flex items-center pt-4 border-b">
          <li className="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black">
            Blogs
          </li>
        </ul>


        <div className="pb-20" />
      </div>
    </>
  );
}

// <ul role="list" className="divide-y divide-gray-100">
//   {author.posts.map((blog, index) => (
//     <li
//     key={index}
//     className="flex justify-between gap-x-6 py-5"
//     ></li>
//     ))}
// </ul>
