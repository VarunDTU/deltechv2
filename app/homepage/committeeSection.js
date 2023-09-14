import CommitteeCard from "@/app/components/committeeCard";
import { committees } from "@/app/lib/committeeDetails";
import Heading from "../components/Heading";

const committeeSection = () => {
  return (
    <div className="py-10">
      <div className="py-10">
        <Heading background="OUR COMMITTEES" main="OUR COMMITTEES" />
      </div>
      <div className=" flex flex-wrap gap-y-28 gap-x-20  justify-center py-20">
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
