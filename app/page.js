import HeroSection from "./homepage/herosection";
import CommitteeSection from "./homepage/committeeSection";
import MemberSection from "./homepage/memberSection";
import About from "./homepage/about";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <About />
      <MemberSection />
      <CommitteeSection />
    </div>
  );
}
