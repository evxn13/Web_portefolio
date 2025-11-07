import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectCard from './ProjectCard';

const BaghelProjects = () => {
  const [titleRef, titleVisible] = useScrollReveal();

  const projects = [
    {
      title: 'Minishell',
      description: 'A minimal bash-like shell implementation in C. Features command parsing, pipe handling, redirections, environment variables, and signal management. Built to understand shells at a fundamental level.',
      tags: ['C', 'Shell', 'Parser', 'Signals'],
      github: 'https://github.com/evxn13/minishell',
      year: '2024',
    },
    {
      title: 'Philosophers',
      description: 'Solution to the dining philosophers problem using multithreading and mutex synchronization. Demonstrates concurrent programming and deadlock prevention strategies.',
      tags: ['C', 'Threads', 'Mutex', 'Concurrency'],
      github: 'https://github.com/evxn13/philosophers',
      year: '2024',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with brutal design aesthetics. Built with React and Tailwind CSS, featuring smooth animations and clean minimalist layout.',
      tags: ['React', 'Tailwind', 'Vite', 'Design'],
      github: 'https://github.com/evxn13/portfolio',
      live: 'https://votre-portfolio.vercel.app',
      year: '2025',
    },
    {
      title: 'Push_swap',
      description: 'Sorting algorithm optimization using two stacks with a limited instruction set. Focus on efficiency and algorithmic thinking.',
      tags: ['C', 'Algorithms', 'Sorting'],
      github: 'https://github.com/evxn13/push_swap',
      year: '2023',
    },
    {
      title: 'Libft',
      description: 'Custom C library implementing standard libc functions, string manipulation, memory operations, and linked list utilities.',
      tags: ['C', 'Memory', 'Data Structures'],
      github: 'https://github.com/evxn13/libft',
      year: '2023',
    },
    {
      title: 'ft_printf',
      description: 'Recreation of the printf function with conversion specifiers and formatting. Deep dive into variadic functions and parsing.',
      tags: ['C', 'Variadic', 'Parsing'],
      github: 'https://github.com/evxn13/ft_printf',
      year: '2023',
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 lg:ml-[700px] lg:pl-10">
      <div className="max-w-[1400px]">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className={`section-title mb-12 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          Selected Work
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BaghelProjects;
