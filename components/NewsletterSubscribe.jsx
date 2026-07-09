"use client";

import { useState } from "react";

const FORM_SLUG = "RE-AB8lEg-";
const SUBMIT_URL = `https://formsapi.hashboard.in/public/forms/${FORM_SLUG}/submit`;

export default function NewsletterSubscribe({
  heading = "Stay Updated with the Latest Financial Insights",
  subheading = "Get our latest insights on wealth, insurance, tax, and planning delivered straight to your inbox.",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { email } }),
      });
      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(
          result.error === "already_registered"
            ? "You're already subscribed."
            : result.message || "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setErrorMessage("Could not connect. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-[#00394E] px-6 py-16 text-center sm:px-12">
      <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-white">
        {heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-white/70">
        {subheading}
      </p>

      {status === "success" ? (
        <p className="mx-auto mt-8 max-w-md text-sm font-semibold text-white">
          Thank you for subscribing! We&apos;ve received your request.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D44659] focus:ring-2 focus:ring-[#D44659]/30"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-[#D44659] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#D44659]/20 transition hover:bg-[#b03a4b] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" ? (
        <p className="mt-4 text-sm font-medium text-red-300">{errorMessage}</p>
      ) : null}
    </section>
  );
}
