import PropTypes from "prop-types";
const BlogCard = ({ title, img, excerpt, slug }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img className="rounded-t-lg" src={img} alt="" />
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {title}
          </h5>
          <p className="font-normal text-gray-700 mb-3">{excerpt}</p>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href={`/articles/${slug}`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default BlogCard;
