import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMenuOpen(false);
    }
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
              <img src="/image.png" alt="Dunaway Heating & Cooling" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-navy text-lg leading-tight">Dunaway</span>
              <span className="text-sm text-gray-600 leading-tight">Heating & Cooling</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-red font-semibold transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="tel:6013821810"
              className="flex items-center space-x-2 bg-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>(601) 382-1810</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <a
              href="tel:6013821810"
              className="flex items-center justify-center bg-red text-white p-3 rounded-lg hover:bg-red/90 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-red font-semibold text-left px-4 py-2 hover:bg-gray-50 rounded transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
