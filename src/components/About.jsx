const About = () => {
  const skills = [
    'C', 'C++', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Docker', 'Git', 'Linux', 'Tailwind CSS', 'HTML/CSS', 'SQL'
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-6 lg:pl-32 py-20">
      <div className="max-w-5xl w-full">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl md:text-2xl font-bold">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">About Me</h2>
          <div className="h-px bg-gray-700 flex-1 ml-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-4 text-gray-400 leading-relaxed">
            <p>
              Hello! I'm Evan, a passionate software developer currently studying at{' '}
              <span className="text-primary font-semibold">École 42 Nice</span>.
              My journey into programming began with a fascination for how things work
              under the hood, which led me to specialize in low-level programming with C and C++.
            </p>

            <p>
              At 42, I've developed strong problem-solving skills through peer-to-peer learning
              and hands-on projects. From building a custom shell to implementing multithreaded
              applications, I've gained deep understanding of system programming, memory management,
              and algorithm optimization.
            </p>

            <p>
              I'm also expanding my expertise into web development, creating modern, responsive
              applications with React and exploring full-stack technologies. I enjoy bridging
              the gap between low-level systems knowledge and high-level user experiences.
            </p>

            <p className="text-gray-300">
              Here are some technologies I've been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image/Visual */}
          <div className="relative group">
            <div className="relative w-64 h-64 mx-auto">
              {/* Photo placeholder */}
              <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-primary/10 transition-colors duration-300"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

              {/* 42 Logo or Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/50">
                42
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
