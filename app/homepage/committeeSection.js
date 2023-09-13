import CommitteeCard from "@/app/components/committeeCard";
import { committees } from "@/app/lib/committeeDetails";

const committeeSection = () => {
  return (
    <div>
      <div className="flex place-items-end justify-center w-full overflow-hidden pt-20">
        <div className="relative opacity-60 text-[#E5E5E5] text-6xl md:text-8xl font-bold uppercase font-urbanist">
          committee
        </div>
        <div className="absolute uppercase text-[#262626] text-3xl md:text-6xl font-bold drop-shadow-xl font-urbanist leading-relaxed">
          committee
        </div>
      </div>
      <div className="mt-24">
        <div className="relative flex justify-center items-center flex-wrap gap-[100px_50px] px-[50px] py-[100px]">
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
      </div>
    </div>
  );
};

export default committeeSection;
