
export default function EditorialCalendar() {
  const items = [
    ["January – March", "Industry trends and new developments"],
    ["April – June", "Technology and innovation"],
    ["July – September", "Power, energy and infrastructure"],
    ["October – December", "Industry review and future outlook"],
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Editorial Planning
          </p>
          <h1 className="mt-4 text-5xl font-extrabold sm:text-7xl">
            Editorial Calendar<span className="text-amber-400">.</span>
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Explore a sample overview of editorial themes and
            planned content areas throughout the year.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-slate-950">
          Annual Content Overview
        </h2>

        <div className="mt-8 space-y-4">
          {items.map(([period, topic], index) => (
            <article
              key={period}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-extrabold text-amber-800">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  {period}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {topic}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Note: These are sample editorial themes, not confirmed
          publication dates or an official editorial schedule.
        </p>
      </section>
    </main>
  );
}
