import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-navy hover:text-red transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Information We Collect</h2>
              <p>
                When you contact us or request service, we collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Service address</li>
                <li>Message or service request details</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">How We Use Your Information</h2>
              <p>
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your inquiries and service requests</li>
                <li>Schedule and coordinate service appointments</li>
                <li>Send service updates and appointment reminders</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">SMS/Text Messaging</h2>
              <p className="font-semibold text-navy">
                SMS consent is not shared with third parties or affiliates for marketing purposes.
                Mobile information will not be sold or shared for promotional purposes.
              </p>
              <p className="mt-3">
                If you opt in to receive SMS messages from us, we will use your mobile phone number
                only for the purposes of:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Appointment confirmations and reminders</li>
                <li>Service scheduling updates</li>
                <li>Service notifications</li>
                <li>Responding to your inquiries</li>
              </ul>
              <p className="mt-3">
                You can opt out of SMS messages at any time by replying STOP. See our{' '}
                <Link to="/sms-terms" className="text-red hover:underline">
                  SMS Terms
                </Link>{' '}
                for more information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>With service providers who assist us in operating our business (e.g., scheduling software, email services)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your information,
                please contact us:
              </p>
              <div className="mt-3 space-y-1">
                <p>
                  Phone:{' '}
                  <a href="tel:6013821810" className="text-red hover:underline">
                    (601) 382-1810
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:dunawayhvac@gmail.com" className="text-red hover:underline">
                    dunawayhvac@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new policy on this page with an updated "Last Updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
