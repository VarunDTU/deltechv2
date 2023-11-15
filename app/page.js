import HeroSection from "./homepage/herosection";
import CommitteeSection from "./homepage/committeeSection";
import About from "./homepage/about";
import Venue from "./homepage/venue";
import ImportantUpdate from "./Updates/Update";

export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <ImportantUpdate />
      <CommitteeSection />
      <Venue />
    </>
  );
}
