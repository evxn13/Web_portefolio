const Skills = () => {
  const skillsData = {
    languages: [
      'C',
      'C++',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'SQL',
      'Bash',
    ],
    frameworks: [
      'React',
      'Node.js',
      'Express',
      'Tailwind CSS',
    ],
    tools: [
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'Vim/Neovim',
      'VS Code',
      'Make',
      'Valgrind',
    ],
    concepts: [
      'Algorithmes',
      'Structures de données',
      'Programmation système',
      'Multithreading',
      'Gestion mémoire',
      'Architecture réseau',
      'Design patterns',
      'Clean Code',
    ],
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">Compétences Techniques</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Languages */}
          <div className="card">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <h3 className="text-xl font-bold">Langages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.languages.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="card">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="text-xl font-bold">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.frameworks.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-xl font-bold">Outils</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Concepts */}
          <div className="card">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="text-xl font-bold">Concepts</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.concepts.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
