import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openPrivacyPolicy', handleOpen);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('openPrivacyPolicy', handleOpen);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navy">Privacy Policy</h2>
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
            <strong>Dunaway Heating & Cooling</strong> is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Information We Collect</h3>
          <p>We may collect personal information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and service address</li>
            <li><strong>Service Information:</strong> Details about your HVAC system, service requests, and appointment history</li>
            <li><strong>Communication Preferences:</strong> Your preferences for receiving communications via phone, email, or SMS</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our HVAC services</li>
            <li>Schedule appointments and service calls</li>
            <li>Send you appointment reminders and service updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you promotional communications if you have opted in</li>
            <li>Process payments and manage billing</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">SMS/Text Messaging</h3>
          <p>
            If you opt in to receive SMS/text messages from us, we will use your phone number to send appointment reminders, service updates, and occasional promotional offers. You can opt out at any time by replying STOP to any message.
          </p>
          <p className="mt-2">
            <strong>Important:</strong> Phone numbers collected through our contact forms or service requests may be used to send SMS/text messages only if you have explicitly opted in through the SMS consent checkbox. We will never send marketing text messages without your consent.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Information Sharing</h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., scheduling software, payment processors)</li>
            <li><strong>Warranty Companies:</strong> When processing warranty claims or covered repairs on your behalf</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Data Security</h3>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Your Rights and Choices</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request that we correct any inaccurate information</li>
            <li><strong>Deletion:</strong> Request that we delete your personal information (subject to legal obligations)</li>
            <li><strong>Opt Out:</strong> Unsubscribe from marketing emails or text messages at any time</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Children's Privacy</h3>
          <p>
            Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <ul className="list-none space-y-1 ml-4">
            <li><strong>Dunaway Heating & Cooling</strong></li>
            <li><strong>Phone:</strong> (601) 382-1810</li>
            <li><strong>Email:</strong> DUNAWAYHVAC@GMAIL.COM</li>
            <li><strong>Location:</strong> Harrisville, MS</li>
          </ul>

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
