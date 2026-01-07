import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function SmsTermsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openSmsTerms', handleOpen);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('openSmsTerms', handleOpen);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navy">SMS Terms & Conditions</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            By opting in to receive SMS/text messages from <strong>Dunaway Heating & Cooling</strong>, you agree to receive text messages at the mobile number you provided. These messages may include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Appointment reminders and confirmations</li>
            <li>Service updates and notifications</li>
            <li>Occasional promotions and special offers</li>
            <li>Important account or service information</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Message Frequency</h3>
          <p>
            Message frequency varies based on your service needs and activity. You may receive multiple messages per week during active service periods, or only occasional messages when we have important updates or offers.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Message & Data Rates</h3>
          <p>
            Standard message and data rates may apply depending on your mobile carrier and plan. Please check with your mobile service provider for details about your messaging plan.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Opt Out Instructions</h3>
          <p>
            You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will receive a confirmation message, and no further messages will be sent unless you re-subscribe.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Help & Support</h3>
          <p>
            For help or support, reply <strong>HELP</strong> to any message, or contact us directly:
          </p>
          <ul className="list-none space-y-1 ml-4">
            <li><strong>Phone:</strong> (601) 382-1810</li>
            <li><strong>Email:</strong> dunawayhvac@gmail.com</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Consent Not Required for Purchase</h3>
          <p>
            Consent to receive SMS messages is not a condition of purchasing any goods or services from Dunaway Heating & Cooling. You may still receive our services without opting in to text messages.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Privacy</h3>
          <p>
            We respect your privacy. Your mobile number and personal information will not be sold, shared, or distributed to third parties except as necessary to provide our services. For more information, please review our Privacy Policy.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Changes to Terms</h3>
          <p>
            We reserve the right to modify these SMS Terms at any time. Changes will be effective immediately upon posting. Your continued opt-in to receive messages after changes are posted constitutes your acceptance of the modified terms.
          </p>

          <p className="mt-6 text-sm text-gray-600">
            Last Updated: November 2025
          </p>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-navy/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
