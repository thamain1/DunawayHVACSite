import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmsTermsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-8">SMS Terms</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Program Name</h2>
              <p>Dunaway Heating & Cooling SMS</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Program Description</h2>
              <p>
                We send text messages for customer care purposes, including appointment confirmations,
                scheduling updates, service notifications, and responses to customer inquiries.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Opt-in</h2>
              <p>
                You opt in by submitting your information through our contact/service request form
                and checking the SMS consent checkbox.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Message Frequency</h2>
              <p>Message frequency varies based on your service needs.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Message & Data Rates</h2>
              <p>Message and data rates may apply.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Opt-out</h2>
              <p>
                Reply STOP to cancel at any time. You may receive one final confirmation message.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Help</h2>
              <p>
                Reply HELP for help or contact us at{' '}
                <a href="tel:6013821810" className="text-red hover:underline">
                  (601) 382-1810
                </a>{' '}
                or{' '}
                <a href="mailto:dunawayhvac@gmail.com" className="text-red hover:underline">
                  dunawayhvac@gmail.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Carriers</h2>
              <p>Carriers are not liable for delayed or undelivered messages.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Privacy</h2>
              <p>
                We respect your privacy. We do not sell or share your mobile number or SMS opt-in
                data with third parties for their marketing purposes. See our{' '}
                <Link to="/privacy-policy" className="text-red hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
