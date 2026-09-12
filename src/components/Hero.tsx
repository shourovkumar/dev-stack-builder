import bannerImage from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Ideal{' '}
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and
            put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="brand-gradient-bg text-white px-6 py-3 rounded-lg font-semibold">
              Explore Technologies
            </button>
            <button className="border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="flex-1">
          <img src={bannerImage} alt="Banner" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
