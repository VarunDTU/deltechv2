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
    <div className="w-90 bg-white rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img className="w-full rounded-t-2xl" src={img} alt="" />
      <div className="p-5">
        <h5 className="mb-2 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-black">
          {title}
        </h5>
        <p className="mb-1 font-sans font-normal text-3l text-gray-700 dark:text-gray-400">
          {excerpt}
        </p>
      </div>
      <div className="px-5 pb-5 flex items-center justify-between rounded-b-2xl">
        <div className="flex items-center">
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href={`/blog/${slug}`}
          >
            Read more
            <svg
              className="w-2.5 h-2.5 ml-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
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
  );
};

export default BlogCard;
