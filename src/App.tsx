import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import MaintenancePlans from './components/MaintenancePlans';
import WhyChoose from './components/WhyChoose';
import ServiceArea from './components/ServiceArea';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmsTermsModal from './components/SmsTermsModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsModal from './components/TermsModal';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <MaintenancePlans />
      <WhyChoose />
      <ServiceArea />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <SmsTermsModal />
      <PrivacyPolicyModal />
      <TermsModal />
    </div>
  );
}

export default App;
