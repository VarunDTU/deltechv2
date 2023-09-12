import Heading from "../components/Heading";

const About = () => {
  return (
    <div className="gap-8 items-center py-16 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
      <img className="m-auto w-3/5 " src="/img/deltech.png" alt="deltech" />
      <div className="mt-4 md:mt-0">
        <div className="w-full relative py-10">
          <Heading background="about us" main="about us" />
        </div>
        <p className="mb-6 font-light text-gray-500 md:text-lg mx-7 md:mx-0">
          DelTech MUN and Debating society, the oldest debating society in DTU,
          is a collection of discussing enthusiasts spread out across both
          verticals of the University, the Main Campus, and the University
          School of Management & Entrepreneurship (East Campus). The society
          organizes an array of events over the year, the main event being the
          DelTech Model United Nations Conference, which is one of the most
          eminent conferences in the Delhi circuit. Other events include weekly
          charchas, 'Youth ki Awaaz, ' mock MUNs, group discussions, and
          intra-MUN.
        </p>
      </div>
    </div>
  );
};

export default About;
