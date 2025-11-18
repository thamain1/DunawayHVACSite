import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Harrisville, MS',
    rating: 5,
    text: "We called Dunaway when our AC went out on the hottest day of summer. They came out the same day and had us cooling down within hours. Fair pricing, honest service, and super friendly. Can't recommend them enough!",
    service: 'AC Repair'
  },
  {
    name: 'James Thompson',
    location: 'Rankin County, MS',
    rating: 5,
    text: "Had Dunaway install a new HVAC system in our home. They took the time to explain all our options and helped us choose the right size for our needs. Installation was clean and professional. Very happy with our decision.",
    service: 'System Installation'
  },
  {
    name: 'Linda Patterson',
    location: 'Harrisville, MS',
    rating: 5,
    text: "Been using Dunaway for our maintenance plan for three years now. They're always on time, thorough, and treat my home with respect. It's nice to have a local company you can trust to do the job right.",
    service: 'Maintenance Plan'
  },
  {
    name: 'Robert Jenkins',
    location: 'Central MS',
    rating: 5,
    text: "When our furnace quit working in January, Dunaway responded quickly even though it was after hours. The technician was knowledgeable and got us heating again fast. That's the kind of service that keeps me coming back.",
    service: 'Heating Repair'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Don't just take our word for it. Here's what your neighbors in Harrisville and surrounding areas have to say about their experience with Dunaway Heating & Cooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-red/10" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red text-red" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-navy text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-navy rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-200 text-lg mb-8">
              Experience the same reliable service and honest approach that has made us a trusted name in Harrisville. We're ready to help with all your heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:6013821810"
                className="inline-flex items-center space-x-2 bg-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Call Now: (601) 382-1810</span>
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
                <span>Schedule Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
