import { Building2, Home, Wrench } from 'lucide-react';

const projects = [
  {
    icon: Home,
    title: 'Residential System Upgrade',
    description: 'Complete HVAC system replacement for a 2,400 sq ft home in Harrisville. High-efficiency heat pump installation with new ductwork and smart thermostat integration.',
    category: 'Residential'
  },
  {
    icon: Building2,
    title: 'New Construction Install',
    description: 'Full HVAC installation for a newly constructed 3,000 sq ft home. Custom ductwork design, zoned heating and cooling, and energy-efficient equipment selection.',
    category: 'New Build'
  },
  {
    icon: Wrench,
    title: 'Commercial Unit Replacement',
    description: 'Emergency replacement of commercial rooftop unit for a local business. Completed installation within 48 hours to minimize downtime and restore comfort.',
    category: 'Commercial'
  },
  {
    icon: Home,
    title: 'Historic Home Renovation',
    description: 'Sensitive HVAC retrofit for a historic home, preserving architectural integrity while adding modern climate control with mini-split systems.',
    category: 'Residential'
  },
  {
    icon: Wrench,
    title: 'System Efficiency Upgrade',
    description: 'Upgraded aging system with high-efficiency equipment, resulting in 40% reduction in energy costs and improved indoor comfort.',
    category: 'Upgrade'
  },
  {
    icon: Building2,
    title: 'Multi-Unit Installation',
    description: 'Coordinated HVAC installation for a small apartment complex with individual zone control and centralized maintenance access.',
    category: 'Commercial'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From simple repairs to complex installations, we approach every project with the same commitment to quality and attention to detail. Take a look at some of our recent work throughout central Mississippi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-navy to-navy/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-red transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy to-navy/90 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            No matter the size or complexity, we have the experience and expertise to deliver outstanding results. From design to installation, we're with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6013821810"
              className="inline-flex items-center space-x-2 bg-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Call (601) 382-1810</span>
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
