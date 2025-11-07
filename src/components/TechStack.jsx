import { useScrollReveal } from '../hooks/useScrollReveal';

const TechStack = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [frontendRef, frontendVisible] = useScrollReveal();
  const [backendRef, backendVisible] = useScrollReveal();
  const [toolsRef, toolsVisible] = useScrollReveal();
  const [school42Ref, school42Visible] = useScrollReveal();

  const techStack = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'],
    backend: ['C', 'C++', 'Node.js', 'SQL'],
    tools: ['Git', 'GitHub', 'Docker', 'Linux', 'Vim', 'Make', 'Valgrind'],
  };

  return (
    <section id="skills" className="px-6 py-20 lg:ml-[700px] lg:pl-10">
      <div className="max-w-[1400px]">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className={`section-title mb-12 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          Tech Stack
        </h2>

        {/* Tech Categories */}
        <div className="space-y-8">
          {/* Frontend */}
          <div
            ref={frontendRef}
            className={`scroll-reveal ${frontendVisible ? 'is-visible' : ''}`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.frontend.map((tech) => (
                <span
                  key={tech}
                  className="brutal-card px-4 py-2 text-sm font-medium hover:bg-lime-50 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div
            ref={backendRef}
            className={`scroll-reveal scroll-reveal-delay-200 ${backendVisible ? 'is-visible' : ''}`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Backend & Systems</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.backend.map((tech) => (
                <span
                  key={tech}
                  className="brutal-card px-4 py-2 text-sm font-medium hover:bg-lime-50 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div
            ref={toolsRef}
            className={`scroll-reveal scroll-reveal-delay-300 ${toolsVisible ? 'is-visible' : ''}`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tools & Misc</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.tools.map((tech) => (
                <span
                  key={tech}
                  className="brutal-card px-4 py-2 text-sm font-medium hover:bg-lime-50 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 42 School Highlight */}
        <div
          ref={school42Ref}
          className={`brutal-card mt-12 p-8 bg-lime-50 scroll-reveal scroll-reveal-delay-400 ${school42Visible ? 'is-visible' : ''}`}
        >
          <div className="flex items-start gap-4">
            <div className="text-6xl font-bold text-slate-900">42</div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                École 42 Nice
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Peer-to-peer learning environment focused on project-based education.
                No teachers, no classes—just challenges, collaboration, and continuous learning.
              </p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• 15+ projects completed in C/C++</li>
                <li>• System programming & algorithms</li>
                <li>• Collaborative problem-solving</li>
                <li>• Code review & peer evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
