import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BaghelHero = () => {
  const heroRef = useRef(null);
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' });

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Utiliser requestAnimationFrame pour une animation ultra-fluide
    let ticking = false;

    const updatePosition = () => {
      if (window.innerWidth < 1024) {
        // Sur mobile, on garde le comportement normal
        heroElement.style.position = 'static';
        heroElement.style.top = 'auto';
        heroElement.style.left = 'auto';
        heroElement.style.transform = 'none';
        heroElement.style.zIndex = 'auto';
        return;
      }

      const scrollY = window.scrollY;
      const maxScroll = 500; // Distance pour transition complète
      const progress = Math.min(scrollY / maxScroll, 1);

      // Fonction d'easing pour une transition plus douce
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const smoothProgress = easeOutCubic(progress);

      // Calcul de la position horizontale
      const containerWidth = heroElement.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Position de départ : centré
      const startLeft = (viewportWidth - containerWidth) / 2;
      // Position finale : marge confortable à gauche (10% de la largeur viewport)
      const endLeft = viewportWidth * 0.1;

      const currentLeft = startLeft - (startLeft - endLeft) * smoothProgress;

      // Toujours en position fixed sur desktop pour éviter le "jump"
      heroElement.style.position = 'fixed';
      heroElement.style.top = '50vh';
      heroElement.style.left = `${currentLeft}px`;
      heroElement.style.transform = 'translateY(-50%)';
      heroElement.style.zIndex = '40';
      heroElement.style.transition = 'none'; // Pas de transition CSS, on gère avec rAF

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updatePosition(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div
        ref={heroRef}
        className="max-w-[600px] lg:max-w-[500px] mx-auto lg:mx-0"
      >
        <div
          ref={contentRef}
          className={`space-y-6 scroll-reveal ${contentVisible ? 'is-visible' : ''}`}
        >
          {/* Name/Title */}
          <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Evan Scheid
          </h1>

          {/* Subtitle */}
          <p className="text-2xl lg:text-3xl text-slate-600 font-medium">
            Student Software Engineer at École 42 Nice
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed">
            Building efficient systems and elegant web experiences.
            Specializing in low-level programming with C/C++ and modern web technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/evxn13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-2 hover:text-lime-500 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:underline-offset-2 hover:text-lime-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:evscheid@student.42nice.fr"
              className="hover:underline hover:underline-offset-2 hover:text-lime-500 transition-colors"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="btn-brutal-primary">
              View Work
            </a>
            <a href="/cv.pdf" download className="btn-brutal-secondary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaghelHero;
