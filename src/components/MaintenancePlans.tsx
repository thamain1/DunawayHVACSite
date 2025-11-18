import { Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    features: [
      'Annual system inspection',
      'Filter replacement',
      'Basic cleaning and tune-up',
      'Priority scheduling',
      'Safety check and testing'
    ]
  },
  {
    name: 'Preferred Plan',
    features: [
      'Bi-annual system inspections',
      'Filter replacements included',
      'Comprehensive cleaning',
      'Priority emergency service',
      'Detailed performance report',
      '15% discount on repairs'
    ],
    highlighted: true
  },
  {
    name: 'Premium Plan',
    features: [
      'Quarterly system checkups',
      'All filters included',
      'Complete system optimization',
      'First-priority emergency response',
      'Extended warranty coverage',
      '20% discount on all repairs',
      'Indoor air quality assessment'
    ]
  }
];

export default function MaintenancePlans() {
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
    <section id="maintenance" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-red/10 border border-red/20 text-red px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Protect Your Investment</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            Maintenance Plans
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Regular maintenance is the key to extending your HVAC system's lifespan, preventing unexpected breakdowns, and keeping your energy bills low. Our flexible maintenance plans ensure your system runs efficiently year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-navy text-white shadow-2xl scale-105 border-4 border-red'
                  : 'bg-gray-50 text-gray-900 shadow-lg hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-red text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-6 ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                {plan.name}
              </h3>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-red' : 'text-red'
                    }`} />
                    <span className={plan.highlighted ? 'text-gray-100' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-red text-white hover:bg-red/90 shadow-lg hover:shadow-xl'
                    : 'bg-navy text-white hover:bg-navy/90'
                }`}
              >
                Ask About This Plan
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-6 text-center">
              Why Regular Maintenance Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Extend Equipment Life</h4>
                  <p>Regular tune-ups can add years to your system's lifespan, protecting your investment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Lower Energy Bills</h4>
                  <p>A well-maintained system runs more efficiently, reducing your monthly energy costs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Prevent Breakdowns</h4>
                  <p>Catch small issues before they become expensive emergency repairs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Maintain Warranty</h4>
                  <p>Many manufacturers require regular maintenance to keep warranties valid.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
