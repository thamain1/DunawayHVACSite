import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function TermsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openTerms', handleOpen);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('openTerms', handleOpen);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-navy">Terms & Conditions</h2>
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
            Welcome to <strong>Dunaway Heating & Cooling</strong>. These Terms & Conditions govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these terms.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Services</h3>
          <p>
            Dunaway Heating & Cooling provides residential and commercial HVAC services, including heating and cooling system installation, repair, maintenance, and warranty work. All services are subject to availability and scheduling.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Appointments and Scheduling</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service appointments are scheduled based on availability</li>
            <li>We strive to arrive within the scheduled time window, but delays may occur due to unforeseen circumstances</li>
            <li>Cancellations or rescheduling requests should be made at least 24 hours in advance when possible</li>
            <li>Emergency service is available 24/7 and may be subject to additional charges</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Pricing and Payment</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All prices are subject to change and will be confirmed before service is performed</li>
            <li>We provide honest assessments and fair pricing with no hidden fees</li>
            <li>Payment is due upon completion of services unless other arrangements have been made</li>
            <li>We accept cash, checks, and major credit cards</li>
            <li>A diagnostic fee may apply for service calls and will be communicated upfront</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Warranties</h3>
          <p>
            We stand behind our work with warranties on both parts and labor:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manufacturer warranties apply to all new equipment and parts</li>
            <li>Our workmanship is guaranteed, and we will address any issues related to our service</li>
            <li>Warranty terms vary by service and will be provided in writing</li>
            <li>We work directly with warranty companies to simplify the claims process</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Maintenance Plans</h3>
          <p>
            Our maintenance plans provide regular service to keep your HVAC system running efficiently:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plans include scheduled inspections and tune-ups</li>
            <li>Plan members receive priority scheduling and discounts on repairs</li>
            <li>Plans are billed annually or semi-annually as agreed</li>
            <li>Cancellation policies will be provided at enrollment</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Customer Responsibilities</h3>
          <p>To ensure safe and effective service, customers agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide safe and clear access to HVAC equipment</li>
            <li>Inform us of any known hazards or special conditions</li>
            <li>Ensure pets are secured during service visits</li>
            <li>Maintain adequate clearance around HVAC equipment</li>
          </ul>

          <h3 className="text-lg font-bold text-navy mt-6">Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, Dunaway Heating & Cooling shall not be liable for any indirect, incidental, special, or consequential damages arising from our services. Our liability is limited to the amount paid for the specific service in question.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Service Area</h3>
          <p>
            We primarily serve Harrisville, MS and surrounding areas in central Mississippi. Service availability outside our primary area may be subject to additional travel fees.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Licensing and Insurance</h3>
          <p>
            Dunaway Heating & Cooling is a licensed and insured HVAC contractor. Our technicians are certified professionals who adhere to industry standards and local building codes.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Modifications to Terms</h3>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications.
          </p>

          <h3 className="text-lg font-bold text-navy mt-6">Contact Information</h3>
          <p>
            For questions about these Terms & Conditions, please contact us:
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
