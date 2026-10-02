"use client";

import { ArrowRight, Loader2, PartyPopper } from "lucide-react";
import { useEnquirySubmit } from "./use-submit";

export function WaitlistForm() {
  const { state, onSubmit } = useEnquirySubmit("waitlist");

  if (state.status === "sent") {
    return (
      <p className="inline-flex items-center gap-3 rounded-full bg-pearl px-6 py-4 font-bold text-pond">
        <PartyPopper className="size-5 text-sindoor" /> You&apos;re on the list — first bags go to you.
      </p>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={onSubmit} className="flex w-full items-center gap-2 rounded-full bg-pearl p-2 shadow-xl">
        <label htmlFor="waitlist-email" className="sr-only">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="min-w-0 flex-1 bg-transparent px-4 py-2 text-ink outline-none placeholder:text-muted/60"
        />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sindoor px-5 py-3 text-sm font-bold text-pearl transition hover:bg-sindoor-deep disabled:opacity-60"
        >
          {state.status === "sending" ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
          Notify me
        </button>
      </form>
      {state.status === "error" && (
        <p role="alert" className="mt-3 px-4 text-sm font-semibold text-pearl">
          {state.error}
        </p>
      )}
    </div>
  );
}
