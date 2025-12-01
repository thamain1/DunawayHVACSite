import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    contactMethod: 'phone',
    serviceType: 'heating',
    message: '',
    smsConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const apiUrl = `${supabaseUrl}/functions/v1/submit-contact-form`;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          contactMethod: 'phone',
          serviceType: 'heating',
          message: '',
          smsConsent: false
        });
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value
    });
  };

  const openSmsTerms = () => {
    window.dispatchEvent(new CustomEvent('openSmsTerms'));
  };

  const openPrivacyPolicy = () => {
    window.dispatchEvent(new CustomEvent('openPrivacyPolicy'));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
            Ready for Service? Get in Touch Today
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you need emergency repairs, scheduled maintenance, or want to discuss a new installation, we're here to help. Reach out and let's talk about how we can keep your home comfortable.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <a
              href="tel:6013821810"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red group"
            >
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Available 24/7 for emergencies</p>
              <p className="text-2xl font-bold text-red">(601) 382-1810</p>
            </a>

            <a
              href="mailto:Dunawayhvac@gmail.com"
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red group"
            >
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">We'll respond promptly</p>
              <p className="text-lg font-semibold text-red break-all">Dunawayhvac@gmail.com</p>
            </a>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red group">
              <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
              <p className="text-gray-600 mb-3">Proudly serving</p>
              <p className="text-2xl font-bold text-red">Central Mississippi</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-navy p-8 sm:p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Schedule Your Service</h3>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  Fill out the form and we'll get back to you as soon as possible. For immediate assistance or emergency service, please call us directly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Fast Response Times</p>
                      <p className="text-gray-300 text-sm">We respond during business hours and offer 24/7 emergency service</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Transparent Pricing</p>
                      <p className="text-gray-300 text-sm">Honest quotes with no hidden fees or surprises</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Professional Service</p>
                      <p className="text-gray-300 text-sm">Licensed, insured, and experienced technicians</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-gray-300">
                    We respond as quickly as possible during business hours. For urgent matters or after-hours emergencies, please call us directly at <span className="text-red font-bold">(601) 382-1810</span>.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                {isSubmitted ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-navy mb-3">Thank You!</h4>
                      <p className="text-gray-600">
                        We've received your message and will get back to you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-800 font-semibold">Submission Failed</p>
                          <p className="text-red-700 text-sm mt-1">{error}</p>
                        </div>
                      </div>
                    )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200"
                        placeholder="(601) 555-0123"
                      />
                      <div className="mt-4 flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="smsConsent"
                          name="smsConsent"
                          checked={formData.smsConsent}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-red border-gray-300 rounded focus:ring-red focus:ring-2 cursor-pointer flex-shrink-0"
                        />
                        <label htmlFor="smsConsent" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                          I agree to receive SMS/text messages from Dunaway Heating & Cooling at the number provided above, including appointment reminders, service updates, and occasional promotions. Message and data rates may apply. Message frequency varies. Consent is not a condition of purchase. Reply STOP to opt out or HELP for help. See our{' '}
                          <button type="button" onClick={openSmsTerms} className="text-red underline hover:text-red/80">
                            SMS Terms
                          </button>{' '}
                          and{' '}
                          <button type="button" onClick={openPrivacyPolicy} className="text-red underline hover:text-red/80">
                            Privacy Policy
                          </button>.
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-navy mb-2">
                        Service Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200"
                        placeholder="123 Main St, Harrisville, MS"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contactMethod" className="block text-sm font-semibold text-navy mb-2">
                          Preferred Contact Method *
                        </label>
                        <select
                          id="contactMethod"
                          name="contactMethod"
                          required
                          value={formData.contactMethod}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200"
                        >
                          <option value="phone">Phone</option>
                          <option value="email">Email</option>
                          <option value="either">Either</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-semibold text-navy mb-2">
                          Type of Service *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200"
                        >
                          <option value="heating">Heating</option>
                          <option value="cooling">Cooling</option>
                          <option value="maintenance">Maintenance Plan</option>
                          <option value="warranty">Warranty Claim</option>
                          <option value="installation">New Installation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your HVAC needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-600 leading-relaxed mt-4">
                      By submitting this form, you agree that Dunaway Heating & Cooling may contact you by phone, email, or SMS/text at the contact details provided. Message and data rates may apply. Message frequency varies. Reply STOP to opt out or HELP for help. See our{' '}
                      <button type="button" onClick={openSmsTerms} className="text-red underline hover:text-red/80">
                        SMS Terms
                      </button>{' '}
                      and{' '}
                      <button type="button" onClick={openPrivacyPolicy} className="text-red underline hover:text-red/80">
                        Privacy Policy
                      </button>{' '}
                      for more details.
                    </p>
                  </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
