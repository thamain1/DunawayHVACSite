import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address?: string;
  contactMethod: string;
  serviceType: string;
  message?: string;
  smsConsent: boolean;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address || null,
        contact_method: formData.contactMethod,
        service_type: formData.serviceType,
        message: formData.message || null,
        sms_consent: formData.smsConsent,
        status: "new",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save submission");
    }

    if (resendApiKey) {
      const serviceTypeLabels: Record<string, string> = {
        heating: "Heating Service",
        cooling: "Cooling Service",
        maintenance: "Maintenance Plan",
        warranty: "Warranty Claim",
        installation: "New Installation",
        other: "Other Service",
      };

      const contactMethodLabels: Record<string, string> = {
        phone: "Phone",
        email: "Email",
        either: "Either Phone or Email",
      };

      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1e3a8a; }
              .value { margin-top: 5px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #dc2626; text-align: center; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${formData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${formData.phone}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${formData.email}</div>
                </div>
                ${formData.address ? `
                <div class="field">
                  <div class="label">Service Address:</div>
                  <div class="value">${formData.address}</div>
                </div>
                ` : ""}
                <div class="field">
                  <div class="label">Preferred Contact Method:</div>
                  <div class="value">${contactMethodLabels[formData.contactMethod] || formData.contactMethod}</div>
                </div>
                <div class="field">
                  <div class="label">Service Type:</div>
                  <div class="value">${serviceTypeLabels[formData.serviceType] || formData.serviceType}</div>
                </div>
                ${formData.message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${formData.message}</div>
                </div>
                ` : ""}
                <div class="field">
                  <div class="label">SMS Consent:</div>
                  <div class="value">${formData.smsConsent ? "Yes - Opted in" : "No - Not opted in"}</div>
                </div>
              </div>
              <div class="footer">
                <p>This is an automated message from Dunaway Heating & Cooling website contact form.</p>
                <p>Submission ID: ${submission.id}</p>
              </div>
            </div>
          </body>
        </html>
      `;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Dunaway HVAC Website <onboarding@resend.dev>",
          to: ["Dunawayhvac@gmail.com"],
          subject: `New Contact Form Submission - ${serviceTypeLabels[formData.serviceType] || formData.serviceType}`,
          html: emailHtml,
          reply_to: formData.email,
        }),
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error("Email sending failed:", errorText);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
        submissionId: submission.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});