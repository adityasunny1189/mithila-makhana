"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { grades, packOptions } from "@/lib/data";
import { Field } from "./field";
import { useEnquirySubmit } from "./use-submit";

const quantities = ["100 – 500 kg", "500 kg – 2 t", "2 – 10 t", "10 t + (container)", "Just a sample for now"];

export function EnquiryForm() {
  const { state, onSubmit, reset } = useEnquirySubmit("bulk");

  if (state.status === "sent") {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center rounded-[2rem] bg-pearl p-10 text-center">
        <CheckCircle2 className="size-16 text-leaf" />
        <h3 className="font-display mt-6 text-3xl font-semibold text-pond">Dhanyavaad! We&apos;ve got it.</h3>
        <p className="mt-3 max-w-sm text-muted">Our trade team will reply with pricing and sample options within one working day.</p>
        <button onClick={reset} className="mt-8 font-bold text-sindoor underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[2rem] bg-pearl p-6 shadow-[0_40px_80px_-50px_rgba(31,61,43,0.7)] sm:grid-cols-2 sm:p-10">
      <Field label="Your name" name="name" required placeholder="Full name" autoComplete="name" />
      <Field label="Company" name="company" placeholder="Brand / business name" autoComplete="organization" />
      <Field label="Email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" />
      <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+91" autoComplete="tel" />
      <Field as="select" label="Grade" name="grade" options={[...grades.map((g) => `${g.name} (${g.size})`), "Not sure — advise me"]} />
      <Field as="select" label="Monthly quantity" name="quantity" options={quantities} />
      <Field as="select" label="Packing" name="packing" options={[...packOptions.map((p) => `${p.name} · ${p.size}`), "Custom"]} />
      <Field label="Country / city" name="country" placeholder="e.g. Mumbai, India" autoComplete="country-name" />
      <Field as="textarea" label="Anything else?" name="message" className="sm:col-span-2" placeholder="Delivery timelines, certifications, private label, flavour plans…" />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">We reply within one working day. No spam, ever.</p>
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sindoor px-7 py-4 font-bold text-pearl transition hover:bg-sindoor-deep disabled:opacity-60"
        >
          {state.status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
          Send enquiry
        </button>
      </div>
      {state.status === "error" && (
        <p role="alert" className="rounded-2xl bg-sindoor/10 px-4 py-3 text-sm font-semibold text-sindoor-deep sm:col-span-2">
          {state.error}
        </p>
      )}
    </form>
  );
}
