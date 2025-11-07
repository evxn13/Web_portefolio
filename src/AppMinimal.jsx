import Sidebar from './components/Sidebar';
import HeroMinimal from './components/HeroMinimal';
import About from './components/About';
import ProjectsMinimal from './components/ProjectsMinimal';
import ContactMinimal from './components/ContactMinimal';
import FloatingEmojis from './components/FloatingEmojis';

function AppMinimal() {
  return (
    <div className="min-h-screen">
      <FloatingEmojis />
      <Sidebar />

      {/* Main Content - offset for sidebar on desktop */}
      <main className="lg:ml-20">
        <HeroMinimal />
        <About />
        <ProjectsMinimal />
        <ContactMinimal />

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm font-mono border-t border-gray-800 mt-20">
          <p>Designed & Built by Evan Scheid</p>
          <p className="mt-2">Inspired by modern web aesthetics</p>
        </footer>
      </main>
    </div>
  );
}

export default AppMinimal;
