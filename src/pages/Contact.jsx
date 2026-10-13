
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-amber-400">
            Get In Touch
          </p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">
            Contact Us<span className="text-amber-400">.</span>
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Have a question, story idea or business enquiry?
            Send us a message.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-8 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-slate-950">
            Let's Talk
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Use the form to share your enquiry with our team.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6">
            <p className="font-bold text-slate-900">Editorial Enquiries</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              For news tips, interviews and editorial contributions.
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-white p-6">
            <p className="font-bold text-slate-900">Business Enquiries</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              For partnerships and business-related questions.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-3"
        >
          {submitted && (
            <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
              Demo submission complete. Connect a backend to send your message.
            </p>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Full Name
              <input
                required
                name="name"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
              />
            </label>

            <label className="text-sm font-semibold text-slate-700">
              Email Address
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
              />
            </label>
          </div>

          <label className="block text-sm font-semibold text-slate-700">
            Subject
            <input
              required
              name="subject"
              placeholder="How can we help?"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Message
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Write your message..."
              className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-400"
            />
          </label>

          <button
            type="submit"
            className="rounded-xl bg-amber-400 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Submit Enquiry →
          </button>
        </form>
      </section>
    </main>
  );
}
