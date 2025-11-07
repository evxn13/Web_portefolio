const ContactMinimal = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 lg:pl-32 py-20">
      <div className="max-w-2xl mx-auto w-full text-center">
        {/* Section Number */}
        <span className="text-primary font-mono text-lg mb-4 block">03. What's Next?</span>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question, want to collaborate on a project, or just want to say hi,
          I'll try my best to get back to you!
        </p>

        {/* CTA Button */}
        <a
          href="mailto:evscheid@student.42nice.fr"
          className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg font-mono hover:bg-primary/10 transition-all duration-300"
        >
          Say Hello
        </a>

        {/* Contact Info */}
        <div className="mt-16 pt-16 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <a
              href="mailto:evscheid@student.42nice.fr"
              className="hover:text-primary transition-colors"
            >
              evscheid@student.42nice.fr
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://github.com/evxn13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMinimal;
