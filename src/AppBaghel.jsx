import BaghelHero from './components/BaghelHero';
import BaghelProjects from './components/BaghelProjects';
import TechStack from './components/TechStack';
import ContactBaghel from './components/ContactBaghel';

function AppBaghel() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background animated blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Blobs colorés avec blur */}
        {/* Blob lime en haut à gauche */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-lime-500/20 via-lime-400/15 to-transparent rounded-full blur-[60px] animate-blob"></div>

        {/* Blob lime/vert en bas à droite */}
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-lime-400/15 via-lime-500/20 to-transparent rounded-full blur-[70px] animate-blob" style={{ animationDelay: '2s' }}></div>

        {/* Blob central lime clair */}
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-gradient-to-r from-lime-300/10 via-lime-500/15 to-transparent rounded-full blur-[50px] animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Blob lime/jaune droit */}
        <div className="absolute top-[60%] right-[10%] w-[450px] h-[450px] bg-gradient-to-bl from-lime-500/18 to-yellow-300/10 rounded-full blur-[65px] animate-blob" style={{ animationDelay: '6s' }}></div>

        {/* Blob lime subtil gauche milieu */}
        <div className="absolute top-[45%] left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-lime-600/12 to-lime-400/8 rounded-full blur-[55px] animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Content */}
      <BaghelHero />
      <BaghelProjects />
      <TechStack />
      <ContactBaghel />
    </div>
  );
}

export default AppBaghel;
