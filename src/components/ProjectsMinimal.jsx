const ProjectsMinimal = () => {
  const featuredProjects = [
    {
      title: 'Minishell',
      description: 'A minimal shell implementation in C, featuring command parsing, pipe handling, redirections, and environment variable management. Built from scratch to understand how shells work at a fundamental level.',
      technologies: ['C', 'Shell', 'Lexer', 'Parser', 'Signals', 'Process Management'],
      github: 'https://github.com/evxn13/minishell',
      external: null,
      image: '🐚',
    },
    {
      title: 'Philosophers',
      description: 'Solution to the classic dining philosophers problem using multithreading and mutex synchronization. Demonstrates deep understanding of concurrent programming and deadlock prevention.',
      technologies: ['C', 'Threads', 'Mutex', 'Synchronization', 'Race Conditions'],
      github: 'https://github.com/evxn13/philosophers',
      external: null,
      image: '🍝',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio built with React and Tailwind CSS. Features smooth animations, dark mode, and clean minimalist design inspired by contemporary web aesthetics.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Responsive Design'],
      github: 'https://github.com/evxn13/portfolio',
      external: 'https://votre-portfolio.vercel.app',
      image: '💼',
    },
  ];

  const otherProjects = [
    {
      title: 'Libft',
      description: 'Custom C library implementing standard libc functions, string manipulation, memory operations, and linked lists.',
      technologies: ['C', 'Memory Management', 'Algorithms'],
      github: 'https://github.com/evxn13/libft',
    },
    {
      title: 'Get Next Line',
      description: 'C function to read a line from a file descriptor with buffer management and multiple fd support.',
      technologies: ['C', 'File I/O', 'Static Variables'],
      github: 'https://github.com/evxn13/get_next_line',
    },
    {
      title: 'ft_printf',
      description: 'Recreation of printf with conversion specifiers and formatting options.',
      technologies: ['C', 'Variadic Functions', 'Parsing'],
      github: 'https://github.com/evxn13/ft_printf',
    },
    {
      title: 'Pipex',
      description: 'Shell pipe behavior simulation with process management and I/O redirections.',
      technologies: ['C', 'Pipes', 'Fork', 'Exec'],
      github: 'https://github.com/evxn13/pipex',
    },
    {
      title: 'Push_swap',
      description: 'Sorting algorithm using two stacks with a limited set of operations. Focus on optimization.',
      technologies: ['C', 'Sorting', 'Algorithms', 'Stack'],
      github: 'https://github.com/evxn13/push_swap',
    },
  ];

  return (
    <section id="projects" className="px-6 lg:pl-32 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-xl md:text-2xl font-bold">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Things I've Built</h2>
          <div className="h-px bg-gray-700 flex-1 ml-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? 'md:dir-rtl' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center text-8xl backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    {project.image}
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 ${
                  index % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:text-left' : 'md:text-right'
                } space-y-4`}
              >
                <p className="text-primary font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
                  {project.title}
                </h3>

                {/* Description Card */}
                <div className="bg-accent/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 shadow-lg">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <ul className={`flex flex-wrap gap-3 font-mono text-sm text-gray-400 ${
                  index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'
                }`}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="External Link"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Other Noteworthy Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-accent/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-gray-500">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMinimal;
