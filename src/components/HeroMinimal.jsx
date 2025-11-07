const HeroMinimal = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:pl-32"
    >
      <div className="max-w-4xl">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="inline-block">
            <span className="text-primary font-mono text-sm md:text-base">
              Hi, my name is
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-tight">
            Evan Scheid
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 leading-tight">
            I build things for the web.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            I'm a software engineering student at{' '}
            <span className="text-primary font-semibold">École 42 Nice</span>,
            specializing in low-level programming with C/C++ and modern web technologies.
            Currently focused on creating elegant solutions to complex problems.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-mono text-sm hover:bg-primary/10 transition-all duration-300"
            >
              View my work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary rounded-lg font-mono text-sm hover:bg-primary/20 transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
