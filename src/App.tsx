import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from './components/Toaster';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ClientsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}