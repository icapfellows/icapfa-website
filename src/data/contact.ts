export const inquiryTypes = [
  "General Question",
  "Membership",
  "Partnership",
  "Media",
  "Donation",
  "Website Support",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

/**
 * No form backend has been selected yet. Set FORM_ENDPOINT to a real
 * Formspree/Resend/etc. endpoint to make the contact form actually deliver
 * mail — until then, ContactForm runs client-side validation only and
 * clearly tells the user the form isn't yet connected, rather than faking
 * a "message sent" confirmation.
 */
export const contactFormConfig = {
  endpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "",
  isConfigured: Boolean(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT),
};
