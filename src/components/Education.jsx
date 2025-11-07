const Education = () => {
  const educationData = [
    {
      institution: 'École 42 Nice',
      degree: 'Cursus Développeur',
      period: '2023 - En cours',
      description: 'Formation intensive en programmation, peer-to-peer learning, projets pratiques en C/C++, développement web et administration système.',
      achievements: [
        'Validation de 15+ projets du cursus',
        'Participation à plusieurs rushs et hackathons',
        'Pédagogie active et peer-evaluation',
        'Apprentissage autonome et travail en équipe',
      ],
    },
    // Vous pouvez ajouter d'autres formations ici
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">Formation</h2>

        <div className="max-w-4xl mx-auto mt-12">
          {educationData.map((edu, index) => (
            <div key={index} className="card mb-6 relative">
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-secondary hidden md:block"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-gray-300">{edu.degree}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {edu.period}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{edu.description}</p>

              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    Points clés :
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <svg
                          className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Additional info */}
          <div className="card bg-primary bg-opacity-10 border border-primary mt-8">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Pédagogie 42
                </h4>
                <p className="text-gray-300">
                  La pédagogie de l'École 42 repose sur le peer-learning et l'apprentissage par projet.
                  Pas de cours magistraux, mais une progression autonome à travers des projets de complexité croissante,
                  développant à la fois les compétences techniques et les soft skills essentiels au métier de développeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
