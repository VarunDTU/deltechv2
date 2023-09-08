import HeroSection from "./homepage/herosection";
import BlogsSection from "./homepage/blogsSection";
import MemberSection from "./homepage/memberSection";
import About from "./homepage/about";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <About />
      <div className="relative">
        <MemberSection />
        </div>
      <BlogsSection />
    </div>
  );
}
