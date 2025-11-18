import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
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

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-red"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red"></div>
        <div className="absolute top-1/4 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-red/20 border-2 border-red text-white px-6 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">24/7 Emergency Service Available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Keeping Homes and Businesses Comfortable Since 2015
          </h1>

          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="h-px w-12 bg-white/40"></div>
            <p className="text-lg sm:text-xl text-white font-semibold tracking-wide">
              Licensed - Bonded - Insured
            </p>
            <div className="h-px w-12 bg-white/40"></div>
          </div>

          <p className="text-xl sm:text-2xl text-gray-200 mb-4 leading-relaxed">
            Your trusted local HVAC experts delivering reliable heating and cooling solutions
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Honest service, fair pricing, and fast response times. We treat your home like our own and ensure your comfort year-round.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Service</span>
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>View Services</span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-200">Licensed & Insured</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-200">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
