import HeroSection from "./homepage/herosection";
import CommitteeSection from "./homepage/committeeSection";
import About from "./homepage/about";
import Venue from "./homepage/venue";

export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <CommitteeSection />
      <Venue />
    </>
  );
}
