import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openSmsTerms = () => {
    window.dispatchEvent(new CustomEvent('openSmsTerms'));
  };

  const openPrivacyPolicy = () => {
    window.dispatchEvent(new CustomEvent('openPrivacyPolicy'));
  };

  const openTerms = () => {
    window.dispatchEvent(new CustomEvent('openTerms'));
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Maintenance Plans', id: 'maintenance' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/image.png" alt="Dunaway Heating & Cooling" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">Dunaway</span>
                <span className="text-sm text-gray-300 leading-tight">Heating & Cooling</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted HVAC partner in Harrisville, MS since 2015. Keeping families comfortable with honest service and reliable solutions.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-white rounded-sm flex items-center justify-center">
                <div className="flex flex-col h-full w-full">
                  <div className="h-1/2 bg-red"></div>
                  <div className="h-1/2 bg-white"></div>
                </div>
              </div>
              <span className="text-sm text-gray-400">Proudly American</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-red transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>HVAC Installation</li>
              <li>Heating Repair</li>
              <li>AC Repair & Service</li>
              <li>Maintenance Plans</li>
              <li>Warranty Services</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:6013821810"
                  className="flex items-start space-x-3 text-gray-300 hover:text-red transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span>(601) 382-1810</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Dunawayhvac@gmail.com"
                  className="flex items-start space-x-3 text-gray-300 hover:text-red transition-colors duration-200 group break-all"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Dunawayhvac@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Harrisville, MS</p>
                  <p className="text-sm text-gray-400">Serving surrounding areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <button
                onClick={openSmsTerms}
                className="text-gray-300 hover:text-red transition-colors underline"
              >
                SMS Terms
              </button>
              <span className="text-gray-500">•</span>
              <button
                onClick={openPrivacyPolicy}
                className="text-gray-300 hover:text-red transition-colors underline"
              >
                Privacy Policy
              </button>
              <span className="text-gray-500">•</span>
              <button
                onClick={openTerms}
                className="text-gray-300 hover:text-red transition-colors underline"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Dunaway Heating & Cooling. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Licensed & Insured</span>
              <span className="text-red">•</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-white to-red"></div>
    </footer>
  );
}
