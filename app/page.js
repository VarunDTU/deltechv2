import HeroSection from "./homepage/herosection";
import CommitteeSection from "./homepage/committeeSection";
import About from "./homepage/about";
import Venu from "./homepage/venu";

export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <CommitteeSection />
      <Venu />
    </>
  );
}
