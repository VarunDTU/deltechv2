import HeroSection from "./homepage/herosection";
import BlogsSection from "./homepage/blogsSection";
import MemberSection from "./homepage/memberSection";
import About from "./homepage/about";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <div className="relative">
        <MemberSection />
        </div>
      <BlogsSection />
      <About />
      <MemberSection />
    </div>
  );
}
