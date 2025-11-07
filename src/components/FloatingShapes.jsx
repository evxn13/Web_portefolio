const FloatingShapes = () => {
  return (
    <>
      {/* Cercle flottant 1 */}
      <div
        className="floating-shape w-72 h-72 border-2 border-primary rounded-full"
        style={{
          top: '10%',
          left: '5%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      {/* Carré flottant */}
      <div
        className="floating-shape w-48 h-48 border-2 border-primary-light rotate-45"
        style={{
          bottom: '15%',
          right: '10%',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />

      {/* Petit cercle flottant */}
      <div
        className="floating-shape w-32 h-32 border-2 border-primary-dark rounded-full"
        style={{
          top: '50%',
          right: '15%',
          animation: 'float 7s ease-in-out infinite 1s',
        }}
      />

      {/* Triangle (via clip-path) */}
      <div
        className="floating-shape w-40 h-40 border-2 border-primary"
        style={{
          top: '30%',
          left: '70%',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 9s ease-in-out infinite 3s',
        }}
      />

      {/* Cercle moyen */}
      <div
        className="floating-shape w-56 h-56 border-2 border-primary-light rounded-full"
        style={{
          bottom: '40%',
          left: '15%',
          animation: 'float 11s ease-in-out infinite 4s',
        }}
      />
    </>
  );
};

export default FloatingShapes;
