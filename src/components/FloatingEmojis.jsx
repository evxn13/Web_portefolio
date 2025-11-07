const FloatingEmojis = () => {
  // Émojis pour 42 et les langages de programmation
  const emojis = [
    // 42 School
    { emoji: '4️⃣', delay: 0, duration: 15, left: '10%', top: '15%' },
    { emoji: '2️⃣', delay: 1, duration: 18, left: '85%', top: '25%' },
    { emoji: '🎓', delay: 2, duration: 16, left: '15%', top: '70%' },
    { emoji: '💻', delay: 3, duration: 20, left: '90%', top: '60%' },

    // C/C++
    { emoji: '⚙️', delay: 1.5, duration: 17, left: '25%', top: '40%' },
    { emoji: '🔧', delay: 4, duration: 19, left: '70%', top: '80%' },

    // JavaScript/Web
    { emoji: '🌐', delay: 2.5, duration: 16, left: '5%', top: '50%' },
    { emoji: '⚡', delay: 3.5, duration: 18, left: '80%', top: '10%' },
    { emoji: '🎨', delay: 5, duration: 17, left: '50%', top: '90%' },

    // Docker/Git
    { emoji: '🐳', delay: 1, duration: 19, left: '95%', top: '45%' },
    { emoji: '📦', delay: 4.5, duration: 16, left: '30%', top: '20%' },

    // Général dev
    { emoji: '🚀', delay: 2, duration: 20, left: '60%', top: '65%' },
    { emoji: '💡', delay: 3, duration: 15, left: '40%', top: '85%' },
    { emoji: '🔥', delay: 0.5, duration: 18, left: '75%', top: '35%' },
  ];

  return (
    <div className="floating-emojis-container pointer-events-none">
      {emojis.map((item, index) => (
        <div
          key={index}
          className="floating-emoji"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
