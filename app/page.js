import HeroSection from "./homepage/herosection";
import BlogsSection from "./homepage/blogsSection";
// import MemberSection from "./homepage/MemberSection";

export default function Page() {
  return (
    <div>
      <HeroSection />
      {/* <MemberSection /> */}
      <BlogsSection />
    </div>
  );
}
