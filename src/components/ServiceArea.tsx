import { MapPin, Navigation } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red/10 border border-red/20 text-red px-4 py-2 rounded-full mb-6">
                <Navigation className="w-5 h-5" />
                <span className="font-semibold">Serving Central Mississippi</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
                Proudly Serving Harrisville & Surrounding Areas
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Based in Harrisville, Mississippi, we're proud to serve homeowners and businesses throughout central Mississippi communities. Our local presence means faster response times and personalized service from technicians who know the area.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Primary Service Area</h3>
                    <p className="text-gray-600">
                      Harrisville, Rankin County, and surrounding central Mississippi communities within a 30-mile radius
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Extended Coverage</h3>
                    <p className="text-gray-600">
                      We also provide service to select areas beyond our primary region. Call us to confirm availability in your area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-navy text-white rounded-xl p-6">
                <h4 className="font-bold text-xl mb-3">Not Sure If We Serve Your Area?</h4>
                <p className="text-gray-200 mb-4">
                  Give us a call at <a href="tel:6013821810" className="text-red font-bold hover:underline">(601) 382-1810</a> and we'll let you know right away. We're always looking to expand our service area to help more neighbors stay comfortable.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy to-navy/80 rounded-2xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-24 h-24 text-red mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-4">Central Mississippi</h3>
                    <p className="text-xl text-white mb-6">Harrisville & Surrounding Areas</p>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                      <p className="text-white font-semibold mb-2">Service Coverage</p>
                      <p className="text-white text-sm">Rankin County and nearby communities</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-red/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-6 h-6" />
                  <span className="font-bold text-lg">Fast Response</span>
                </div>
                <p className="text-sm text-gray-100">
                  Local service means we can get to you quickly when you need us most
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
