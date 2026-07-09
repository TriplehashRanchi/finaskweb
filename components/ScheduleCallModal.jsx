"use client";

import { useState } from "react";

const FORM_SLUG = "O5MBFtVehB";
const SUBMIT_URL = `https://formsapi.hashboard.in/public/forms/${FORM_SLUG}/submit`;

const FIELD_IDS = {
  name: "name",
  email: "email",
  phone: "field_1783511191240",
  date: "field_1783510238438",
  timeslot: "field_1783510287711",
};

function formatHour(hour, minute) {
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour}:${minute === 0 ? "00" : minute} ${period}`;
}

function buildTimeSlots() {
  const slots = [];
  let hour = 9;
  let minute = 0;
  while (hour < 17 || (hour === 17 && minute === 0)) {
    if (hour === 17) break;
    const nextMinute = minute + 30;
    const nextHour = nextMinute === 60 ? hour + 1 : hour;
    const normalizedNextMinute = nextMinute === 60 ? 0 : nextMinute;
    slots.push(
      `${formatHour(hour, minute)} - ${formatHour(nextHour, normalizedNextMinute)}`
    );
    hour = nextHour;
    minute = normalizedNextMinute;
  }
  return slots;
}

const TIME_SLOTS = buildTimeSlots();

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#FDF9FB] text-[#00394E] text-sm outline-none transition focus:border-[#DAA434] focus:ring-2 focus:ring-[#DAA434]/20 placeholder:text-slate-400";

const labelClasses = "text-sm font-medium text-[#00394E] mb-1.5 block";

export default function ScheduleCallModal({ onClose }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeslot: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            [FIELD_IDS.name]: values.name,
            [FIELD_IDS.email]: values.email,
            [FIELD_IDS.phone]: values.phone,
            [FIELD_IDS.date]: values.date,
            [FIELD_IDS.timeslot]: values.timeslot,
          },
        }),
      });
      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(
          result.error === "already_registered"
            ? "You have already submitted this form."
            : result.message || "Something went wrong. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage("Could not connect. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[#DAA434]/10 text-[#DAA434] flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#00394E] mb-2">
          Thank you!
        </h3>
        <p className="text-slate-500 text-sm max-w-sm">
          We have received your request. One of our experts will get in touch with you shortly.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 px-6 py-2.5 rounded-lg bg-[#00394E] text-white text-sm font-medium hover:bg-[#DAA434] transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-10">
      <h3 className="font-serif text-2xl text-[#00394E] mb-1">
        Schedule a call
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Pick a slot that works for you and we&apos;ll call you back.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className={labelClasses} htmlFor="schedule-name">
            Full Name
          </label>
          <input
            id="schedule-name"
            type="text"
            required
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange("name")}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="schedule-email">
            Email Address
          </label>
          <input
            id="schedule-email"
            type="email"
            required
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange("email")}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="schedule-phone">
            Phone
          </label>
          <input
            id="schedule-phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={handleChange("phone")}
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses} htmlFor="schedule-date">
              Preferred Date
            </label>
            <input
              id="schedule-date"
              type="date"
              required
              value={values.date}
              onChange={handleChange("date")}
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses} htmlFor="schedule-timeslot">
              Preferred Time Slot
            </label>
            <select
              id="schedule-timeslot"
              required
              value={values.timeslot}
              onChange={handleChange("timeslot")}
              className={inputClasses}
            >
              <option value="" disabled>
                Select a time
              </option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 w-full py-3 rounded-lg bg-[#00394E] text-white font-semibold text-sm hover:bg-[#DAA434] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
