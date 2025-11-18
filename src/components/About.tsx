import { Award, Users, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Family-First Approach',
    description: 'We treat every customer like family and every home like our own.'
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description: 'Committed to doing the job right the first time, every time.'
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Proud to serve and support the Harrisville community.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Always learning and staying current with the latest HVAC technology.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Since 2015
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
                About Dunaway Heating & Cooling
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Founded in 2015, Dunaway Heating & Cooling was built on a simple promise: to provide Harrisville and surrounding communities with honest, dependable HVAC service at a fair price. What started as a one-person operation has grown into a trusted local business, but our commitment to personal service hasn't changed.
                </p>

                <p>
                  We understand that your home's comfort system is more than just equipment. It's about keeping your family comfortable through Mississippi's hot summers and cool winters. It's about peace of mind knowing that when something goes wrong, you have a neighbor you can call who will be there quickly and get the job done right.
                </p>

                <p>
                  Every member of our team is trained, licensed, and insured, but more importantly, they're people who care about doing quality work. We don't believe in high-pressure sales tactics or unnecessary repairs. Instead, we give you honest assessments and recommendations based on what's truly best for your home and budget.
                </p>

                <p>
                  Whether it's a routine maintenance visit, an emergency repair, or a complete system replacement, we approach every job with the same level of professionalism and attention to detail. That's the Dunaway difference, and it's why our customers keep coming back and referring their friends and family.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy to-navy/80 rounded-2xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-white font-bold text-5xl">D</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">10+ Years</h3>
                    <p className="text-xl text-white mb-6">Serving Our Community</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">500+</div>
                        <div className="text-sm text-white">Happy Customers</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                        <div className="text-2xl font-bold text-white mb-1">100%</div>
                        <div className="text-sm text-white">Satisfaction Focus</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-red/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-8 text-center">
              Our Values
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-navy mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red to-red/90 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Experience the Dunaway Difference
            </h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              When you choose Dunaway Heating & Cooling, you're choosing a partner who's invested in your comfort and satisfaction. Let's work together to keep your home comfortable all year long.
            </p>
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
              className="bg-white text-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
