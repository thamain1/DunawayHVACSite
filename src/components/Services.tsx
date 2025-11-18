import { Wrench, Thermometer, Wind, Shield, FileCheck, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'HVAC Installation & Replacement',
    description: 'Expert installation of new heating and cooling systems for residential and light commercial properties. We handle everything from equipment selection to final installation with precision and care.'
  },
  {
    icon: Thermometer,
    title: 'Heating Repair & Service',
    description: 'Fast, reliable furnace and heating system repairs to keep you warm during cold Mississippi winters. We diagnose issues quickly and provide honest recommendations for repairs or replacements.'
  },
  {
    icon: Wind,
    title: 'Air Conditioning Repair & Service',
    description: 'Stay cool all summer long with our expert AC repair and maintenance services. From minor fixes to major repairs, we have the skills and experience to restore your comfort.'
  },
  {
    icon: Shield,
    title: 'Preventative Maintenance Contracts',
    description: 'Protect your investment with regular maintenance plans that extend equipment life, reduce breakdowns, and lower energy bills. We offer flexible service agreements tailored to your needs.'
  },
  {
    icon: FileCheck,
    title: 'Warranty Company Partner Services',
    description: 'We work directly with home warranty companies to streamline your service experience. Let us handle the paperwork while you enjoy peace of mind knowing your repairs are covered.'
  },
  {
    icon: Sparkles,
    title: 'Indoor Air Quality Solutions',
    description: 'Breathe easier with our indoor air quality services including air purification, humidity control, and ventilation solutions. Create a healthier home environment for your family.'
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            Complete HVAC Solutions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From new installations to emergency repairs, Dunaway Heating & Cooling provides comprehensive HVAC services for homes and businesses throughout Harrisville and central Mississippi. No job is too big or too small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-red"
              >
                <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button
                  onClick={scrollToContact}
                  className="text-red font-semibold hover:text-red/80 transition-colors duration-200 inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-navy rounded-2xl p-8 sm:p-12 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Large Projects to Small Upgrades
            </h3>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're building new construction, remodeling your home, or simply need a system upgrade, we have the expertise to handle projects of any size with the same level of professionalism and care.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red/90 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Get a Free Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
