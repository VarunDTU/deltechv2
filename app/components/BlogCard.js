import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({
  title,
  img,
  excerpt,
  slug,
  createdAt,
  authorName,
  authorPhoto,
}) => {
  return (
    <div
      className="w-[360px] flex justify-between flex-col bg-white rounded-b-2xl transform transition-all hover:-translate-y-1 duration-150 border border-[#C5C5C5] shadow-md 
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
    >
      <div>
        <img className="w-full h-48 object-cover" src={img} alt="thumbnail" />
        <div className="px-5">
          <h5 className="my-3 font-serif text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-1 font-sans font-normal text-gray-700">{excerpt}</p>
        </div>
      </div>
      <div>
        <hr className="my-3 h-0.5 border-t-0 bg-neutral-200 " />
        <div className="px-5 pb-4 flex items-center justify-between rounded-b-2xl">
          <a
            className="py-3 px-4 w-fit duration-500 text-[#1341EC] border-2 border-[#1341EC] rounded-xl
            hover:bg-gradient-to-t from-[#1341EC] to-[#142e8a] hover:text-[#fff]"
            href={`/blog/${slug}`}
          >
            Read more
            <FaArrowRight className="ml-1 inline" />
          </a>
          <div className="text-sm flex items-center">
            <img
              className="w-10 h-10 rounded-full ml-3"
              src={authorPhoto}
              alt="Avatar"
            />
            <div className="ml-3">
              <p className="text-gray-900 leading-none">{authorName}</p>
              <p className="text-gray-600">{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
