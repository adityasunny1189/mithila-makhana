"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Field } from "./field";
import { useContactSubmit } from "./use-submit";

export function ContactForm() {
  const { state, onSubmit, reset } = useContactSubmit();

  if (state.status === "sent") {
    return (
      <div className="flex min-h-[24rem] flex-col items-center justify-center p-8 text-center">
        <CheckCircle2 className="size-16 text-leaf" />
        <h3 className="font-display mt-5 text-3xl text-kohl">Dhanyavaad! 🙏</h3>
        <p className="mt-2 max-w-sm text-muted">We&apos;ve received your message and will get back to you soon.</p>
        <button onClick={reset} className="mt-6 font-extrabold text-sindoor underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 p-6 sm:p-8">
      <Field label="Name" name="name" required placeholder="Your name" autoComplete="name" />
      <Field label="Mobile / Email" name="contact" required placeholder="98XXXXXXXX or you@email.com" autoComplete="email" />
      <Field as="textarea" label="Message" name="message" required placeholder="How can we help?" />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {state.status === "error" && (
        <p role="alert" className="rounded-2xl border-2 border-sindoor bg-sindoor/10 px-4 py-3 text-sm font-bold text-sindoor-deep">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={state.status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full border-[2.5px] border-kohl bg-sindoor px-7 py-3.5 font-extrabold text-pearl shadow-[4px_4px_0_var(--kohl)] transition hover:-translate-y-0.5 hover:bg-sindoor-deep disabled:opacity-60"
      >
        {state.status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Submit
      </button>
    </form>
  );
}
