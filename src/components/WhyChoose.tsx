import { Shield, Clock, Handshake, Home, Award, CheckCircle } from 'lucide-react';

const trustFactors = [
  {
    icon: Home,
    title: 'Locally Owned & Operated Since 2015',
    description: 'A trusted member of the Harrisville community'
  },
  {
    icon: Award,
    title: 'Licensed & Insured HVAC Professionals',
    description: 'Fully certified and covered for your peace of mind'
  },
  {
    icon: Handshake,
    title: 'Honest Recommendations & Fair Pricing',
    description: 'No upselling, just straightforward advice'
  },
  {
    icon: Clock,
    title: 'Fast Response Times & Reliable Scheduling',
    description: 'We show up on time and get the job done right'
  },
  {
    icon: CheckCircle,
    title: 'Experience with Large and Small Projects',
    description: 'From minor repairs to complete installations'
  },
  {
    icon: Shield,
    title: 'We Work Directly with Warranty Companies',
    description: 'Simplified process for covered repairs'
  }
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-navy to-navy/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ★
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose Dunaway?
          </h2>
          <p className="text-xl text-white leading-relaxed">
            We're more than just an HVAC company. We're your neighbors, committed to keeping your family comfortable with honest service and dependable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-extrabold mb-4 text-navy">Local, Family-Oriented Business</h3>
              <p className="text-gray-800 leading-relaxed font-medium">
                Since 2015, Dunaway Heating & Cooling has been serving Harrisville and surrounding central Mississippi communities with pride. We understand the unique climate challenges of our region and treat every customer like family.
              </p>
              <p className="text-gray-800 leading-relaxed mt-4 font-medium">
                When you call us, you're not getting a faceless corporation. You're getting a local business owner who cares about your comfort and stands behind every job. We live and work in this community, and our reputation means everything to us.
              </p>
            </div>

            <div className="bg-white border-2 border-red rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-extrabold mb-4 text-red">Our Commitment to You</h3>
              <p className="text-gray-900 leading-relaxed font-semibold">
                We believe in doing the job right the first time, every time. That means honest assessments, fair pricing, and quality workmanship you can count on. Your comfort and satisfaction are our top priorities.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-red rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-extrabold text-lg mb-2 text-navy">{factor.title}</h4>
                    <p className="text-gray-800 text-sm font-medium">{factor.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
