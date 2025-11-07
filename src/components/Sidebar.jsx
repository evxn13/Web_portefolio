import { useState } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#about', label: 'About', icon: '👨‍💻' },
    { href: '#projects', label: 'Projects', icon: '💼' },
    { href: '#skills', label: 'Skills', icon: '⚡' },
    { href: '#contact', label: 'Contact', icon: '📧' },
  ];

  const socialLinks = [
    {
      href: 'https://github.com/evxn13',
      label: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      href: 'https://linkedin.com/in/votre-profil',
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      href: 'mailto:evscheid@student.42nice.fr',
      label: 'Email',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 bg-secondary/50 backdrop-blur-sm border-r border-gray-800 z-50">
        {/* Logo / Initials */}
        <div className="flex flex-col items-center space-y-8">
          <a href="#home" className="text-2xl font-bold text-primary">
            ES
          </a>

          {/* Navigation */}
          <nav className="flex flex-col items-center space-y-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href.slice(1))}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-400 hover:text-primary hover:bg-primary/10'
                }`}
                aria-label={link.label}
              >
                <span className="text-xl">{link.icon}</span>

                {/* Tooltip */}
                <span className="absolute left-16 bg-accent px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold text-primary">
            Evan Scheid
          </a>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
