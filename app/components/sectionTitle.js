const SectionTitle = ({ title, excerpt }) => {
  return (
    <div className="bg-[#040b23]/90">
      <div
        style={{ backgroundImage: `url(./img/section.png)` }}
        className="w-full h-full bg-center py-3 bg-cover"
      >
        <div className="mx-auto max-w-screen-md w-11/12 text-center md:pt-32 pt-20 md:mb-16 mb-6">
          <h2 className="mb-3 text-3xl lg:text-4xl uppercase tracking-wider font-merriweather font-extrabold text-white ">
            {title}
          </h2>
          <p className="font-light text-gray-400 md:text-lg text-sm font-serif p-4">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
