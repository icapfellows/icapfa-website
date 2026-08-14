"use client";

import { useState, type FormEvent } from "react";
import { inquiryTypes, contactFormConfig } from "@/data/contact";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

interface Errors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const inquiryType = String(data.get("inquiryType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!inquiryType) nextErrors.inquiryType = "Please choose an inquiry type.";
    if (!message) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!contactFormConfig.isConfigured) {
      // No backend has been connected yet — say so plainly rather than
      // pretending the message was delivered. See README for how to wire
      // up Formspree/Resend/etc. via NEXT_PUBLIC_CONTACT_FORM_ENDPOINT.
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(contactFormConfig.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClasses =
    "w-full rounded border border-maroon/20 bg-white px-4 py-2.5 text-base text-ink focus:border-gold";

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-maroon">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClasses}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm text-red-700">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-maroon">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClasses}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-sm text-red-700">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="organization" className="mb-1.5 block text-sm font-semibold text-maroon">
          Organization <span className="font-normal text-ink/50">(optional)</span>
        </label>
        <input id="organization" name="organization" type="text" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="inquiryType" className="mb-1.5 block text-sm font-semibold text-maroon">
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue=""
          aria-invalid={Boolean(errors.inquiryType)}
          aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
          className={fieldClasses}
        >
          <option value="" disabled>
            Select an inquiry type
          </option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.inquiryType ? (
          <p id="inquiryType-error" className="mt-1.5 text-sm text-red-700">
            {errors.inquiryType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-maroon">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClasses}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit items-center rounded bg-gold px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <div role="status" aria-live="polite">
        {status === "success" ? (
          <p className="text-sm font-semibold text-gold-dark">
            Thank you — your message has been sent.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-semibold text-red-700">
            Something went wrong sending your message. Please try again.
          </p>
        ) : null}
        {status === "not-configured" ? (
          <p className="text-sm font-semibold text-gold-dark">
            This form isn&apos;t connected to a mail service yet, so your message
            wasn&apos;t sent. Please contact the ICAP Fellows Association (ICAPFA)
            directly in the meantime — see the details on this page.
          </p>
        ) : null}
      </div>
    </form>
  );
}
