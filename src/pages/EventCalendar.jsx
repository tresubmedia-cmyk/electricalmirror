
import { useState } from "react";

export default function EventCalendar() {
  const [filter, setFilter] = useState("All");

  const events = [
    {
      title: "Electrical Industry Conference",
      type: "Conference",
      description: "Industry discussions, professional networking and knowledge sharing.",
    },
    {
      title: "Power & Energy Exhibition",
      type: "Exhibition",
      description: "Explore technology, products and energy-sector developments.",
    },
    {
      title: "Technology Networking Meet",
      type: "Networking",
      description: "Connect with professionals and exchange industry perspectives.",
    },
  ];

  const visibleEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.type === filter);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            What's Happening
          </p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-7xl">
            Event Calendar<span className="text-amber-400">.</span>
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Discover industry events, exhibitions, conferences
            and professional networking opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:py-20">
        <div className="flex flex-wrap gap-3">
          {["All", "Conference", "Exhibition", "Networking"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                filter === type
                  ? "bg-amber-400 text-slate-950"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-amber-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                {event.type}
              </span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                {event.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {event.description}
              </p>
              <p className="mt-5 text-sm text-slate-500">
                Event date and venue to be announced.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
