import CommitteeCard from "@/app/components/committeeCard";
import { committees } from "@/app/lib/committeeDetails";

const committeeSection = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-20 justify-center ">
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
  );
};

export default committeeSection;
