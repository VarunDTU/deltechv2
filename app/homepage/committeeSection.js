import CommitteeCard from "@/app/components/committeeCard";
import { committees } from "@/app/lib/committeeDetails";
import Heading from "../components/Heading";
import Link from "next/link";

const committeeSection = () => {
  return (
    <div className="md:py-10 py-5 flex flex-col justify-center items-center">
      <div className="md:py-10 py-5">
        <Heading background="COMMITTEES" main="COMMITTEES" />
      </div>
      <div className=" flex flex-wrap gap-y-28 gap-x-14 justify-center py-20">
        {committees.map((committee, index) => (
          <CommitteeCard
            key={index}
            shortName={committee.shortName}
            name={committee.name}
            img={committee.img}
            excerpt={committee.excerpt}
            description={committee.description}
            guide={committee.guide}
          />
        ))}
      </div>
      <Link
        href="https://app.deltechmun.in"
      >
        <button
          type="button"
          className="font-merriweather mb-16 tracking-wider text-md w-fit px-[60px] py-[15px] rounded-xl text-[#FFF] text-[18px] font-semibold transition-all duration-500 bg-gradient-to-tl from-[#1341EC] via-[#5CA0F2] to-[#142e8a] bg-size-200 bg-pos-100 hover:bg-pos-0"
        >
          Register Now
        </button>
      </Link>
    </div>
  );
};

export default committeeSection;
