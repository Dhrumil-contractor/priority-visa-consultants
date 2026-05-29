"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle2,
  XCircle,
  X,
} from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { COMPANY, COUNTRIES } from "@/data/site";
import Reveal from "@/components/Reveal";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  countryInterest: string;
  visaType: string;
  bestTimeToCall: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  countryInterest: "",
  visaType: "",
  bestTimeToCall: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [statusMessage, setStatusMessage] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setIsSuccess(true);

      setStatusMessage(
        result.message || "Your message has been sent successfully!"
      );

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      setFormData(initialFormData);
    } catch (error) {
      setIsSuccess(false);

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your free visa consultation."
        subtitle="A Founder will personally review your profile and recommend the best path at no cost, with zero pressure."
      />

      <section className="pt-14 pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-luxe"
            >
              <p className="font-display text-2xl text-ink">
                Send us a message
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Email"
                  name="email"
                  placeholder="you@email.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <SelectField
                  label="Country interest"
                  name="countryInterest"
                  value={formData.countryInterest}
                  onChange={handleChange}
                  options={COUNTRIES.map((c) => c.name)}
                  required
                />

                <SelectField
                  label="Visa type"
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  options={[
                    "Student",
                    "Visitor",
                    "Tourist",
                    "Work",
                    "Dependent",
                    "Passport",
                  ]}
                  required
                />

                <Input
                  label="Best time to call"
                  name="bestTimeToCall"
                  placeholder="e.g. weekday evenings"
                  value={formData.bestTimeToCall}
                  onChange={handleChange}
                />
              </div>

              <label className="mt-4 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell us a bit about your goal…"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-6 inline-flex w-full items-center justify-center
                  rounded-full bg-emerald-gradient px-6 py-3.5
                  text-sm font-medium text-primary-foreground
                  shadow-glow transition-all duration-300
                  hover:scale-[1.01]
                  hover:shadow-2xl
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  cursor-pointer
                "
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending Message...
                  </div>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <OfficeCard />

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                className="flex items-center justify-between rounded-3xl bg-emerald-gradient p-6 text-primary-foreground shadow-luxe"
              >
                <div>
                  <p className="font-display text-xl">Chat on WhatsApp</p>

                  <p className="mt-1 text-sm text-primary-foreground/85 dark:text-white">
                    Instant replies from a senior advisor.
                  </p>
                </div>

                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/30">
                  <MessageCircle className="h-5 w-5" />
                </span>
              </a>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="relative aspect-[16/10]">
                  <iframe
                    title="Priority Visa Consultancy location"
                    src="https://www.google.com/maps?q=21.921150848885645,73.07426270969472&z=16&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="flex items-center justify-between p-5">
                  <p className="text-sm text-muted-foreground">
                    Find us on the map
                  </p>

                  <div className="flex gap-2">
                    {[Instagram, Facebook, Linkedin].map((I, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="
                            inline-flex h-9 w-9 items-center justify-center
                            rounded-full border border-border bg-secondary
                            text-foreground transition
                            hover:bg-foreground hover:text-background
                          "
                      >
                        <I className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREMIUM POPUP */}
      <div
        className={`
          fixed top-6 right-6 z-[9999]
          transition-all duration-500 ease-out
          ${
            showPopup
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className={`
            relative overflow-hidden
            w-[360px] rounded-3xl border
            backdrop-blur-xl shadow-2xl
            ${
              isSuccess
                ? "border-emerald-200/40 bg-white/90 dark:bg-zinc-900/90"
                : "border-red-200/40 bg-white/90 dark:bg-zinc-900/90"
            }
          `}
        >
          {/* Glow */}
          <div
            className={`
              absolute inset-0 opacity-10 blur-3xl
              ${
                isSuccess
                  ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                  : "bg-gradient-to-r from-red-400 to-orange-400"
              }
            `}
          />

          {/* Top Bar */}
          <div
            className={`
              h-1.5 w-full
              ${
                isSuccess
                  ? "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
                  : "bg-gradient-to-r from-red-500 via-orange-500 to-pink-500"
              }
            `}
          />

          <div className="relative p-5">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`
                  flex h-14 w-14 shrink-0 items-center justify-center
                  rounded-2xl shadow-lg
                  ${
                    isSuccess
                      ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"
                      : "bg-gradient-to-br from-red-500 to-orange-500 text-white"
                  }
                `}
              >
                {isSuccess ? (
                  <CheckCircle2 className="h-7 w-7" />
                ) : (
                  <XCircle className="h-7 w-7" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground">
                  {isSuccess ? "Message Sent Successfully" : "Failed To Send"}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {statusMessage}
                </p>

                {isSuccess && (
                  <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 dark:border-emerald-500/10 dark:bg-emerald-500/5">
                    <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      Our visa experts will contact you within 24–48 hours.
                    </p>
                  </div>
                )}
              </div>

              {/* Close */}
              <button
                onClick={() => setShowPopup(false)}
                className="
                  rounded-full p-1.5 text-muted-foreground
                  transition hover:bg-black/5 hover:text-foreground
                  dark:hover:bg-white/10
                "
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Progress */}
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-muted">
              <div
                className={`
                  h-full origin-left animate-[progress_5s_linear_forwards]
                  ${
                    isSuccess
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500"
                      : "bg-gradient-to-r from-red-500 to-orange-500"
                  }
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function OfficeCard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <p className="font-display text-xl text-ink">Get in touch</p>

      <div className="mt-4 space-y-3 text-sm">
        <p className="flex items-start gap-3">
          <Phone className="mt-0.5 h-4 w-4 text-primary" />
          {COMPANY.phone}
        </p>

        <p className="flex items-start gap-3">
          <Mail className="mt-0.5 h-4 w-4 text-primary" />
          {COMPANY.email}
        </p>

        <p className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-primary" />
          {COMPANY.address}
        </p>
      </div>
    </div>
  );
}

function Input({
  label,
  ...rest
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>

      <input
        {...rest}
        className="
          mt-2 w-full rounded-xl border border-border
          bg-background px-4 py-3 text-sm outline-none
          transition-all duration-300
          focus:ring-2 focus:ring-ring
          focus:shadow-lg
        "
      />
    </label>
  );
}

function SelectField({
  label,
  options,
  ...rest
}: {
  label: string;
  options: readonly string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>

      <select
        {...rest}
        className="
          mt-2 w-full rounded-xl border border-border
          bg-background px-4 py-3 text-sm outline-none
          transition-all duration-300
          focus:ring-2 focus:ring-ring
          focus:shadow-lg
        "
      >
        <option value="">Select an option</option>

        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
