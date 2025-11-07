import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactBaghel = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();
  const [linksRef, linksVisible] = useScrollReveal();

  return (
    <section id="contact" className="px-6 py-20 lg:ml-[700px] lg:pl-10">
      <div className="max-w-[1400px]">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className={`section-title mb-12 scroll-reveal ${titleVisible ? 'is-visible' : ''}`}
        >
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`space-y-6 scroll-reveal scroll-reveal-delay-200 ${infoVisible ? 'is-visible' : ''}`}
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm currently looking for new opportunities in software development.
              Whether you have a question, want to collaborate, or just say hi,
              feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:evscheid@student.42nice.fr"
                  className="text-slate-900 hover:text-lime-500 hover:underline hover:underline-offset-2 transition-colors"
                >
                  evscheid@student.42nice.fr
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a
                  href="https://github.com/evxn13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-lime-500 hover:underline hover:underline-offset-2 transition-colors"
                >
                  github.com/evxn13
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a
                  href="https://linkedin.com/in/votre-profil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-lime-500 hover:underline hover:underline-offset-2 transition-colors"
                >
                  linkedin.com/in/votre-profil
                </a>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="mailto:evscheid@student.42nice.fr"
                className="btn-brutal-primary inline-block"
              >
                Send a Message
              </a>
            </div>
          </div>

          {/* Quick Links Card */}
          <div
            ref={linksRef}
            className={`brutal-card space-y-4 scroll-reveal scroll-reveal-delay-300 ${linksVisible ? 'is-visible' : ''}`}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h3>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-3 p-4 border-2 border-slate-900 rounded-brutal hover:bg-lime-50 transition-colors group"
            >
              <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium group-hover:text-lime-500 transition-colors">
                Download CV
              </span>
            </a>

            <a
              href="#projects"
              className="flex items-center gap-3 p-4 border-2 border-slate-900 rounded-brutal hover:bg-lime-50 transition-colors group"
            >
              <svg className="w-5 h-5 text-lime-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="font-medium group-hover:text-lime-500 transition-colors">
                View Projects
              </span>
            </a>

            <a
              href="https://github.com/evxn13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border-2 border-slate-900 rounded-brutal hover:bg-lime-50 transition-colors group"
            >
              <svg className="w-5 h-5 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-medium group-hover:text-lime-500 transition-colors">
                GitHub Profile
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t-2 border-slate-900 text-center">
          <p className="text-slate-600 text-sm">
            Designed & Built by Evan Scheid • {new Date().getFullYear()}
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Inspired by modern web aesthetics • École 42 Nice
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBaghel;
