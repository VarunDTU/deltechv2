const HeroSection = () => {
  return (
    <section className="mb-32">
      <div className="relative overflow-hidden bg-cover backdrop-blur-lg bg-white bg-no-repeat bg-[url('./assets/hero.png')] h-[500px]">
        <div className="min-w-full min-h-full backdrop-blur-sm bg-blue-900/50 flex items-center justify-center">
          <div className="font-bold text-6xl text-white uppercase">
            Deltech-Mun
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32"></div>
    </section>
  );
};

export default HeroSection;