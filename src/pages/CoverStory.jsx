
export default function CoverStory() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-slate-950">
            Special Feature
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            Stories That Shape The Industry.
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            In-depth features exploring the people, ideas and
            developments influencing the electrical industry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
          Featured Stories
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
          Beyond The Headlines
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["01", "The Future of Electrical Technology"],
            ["02", "Powering the Next Generation"],
            ["03", "Innovation Across the Industry"],
            ["04", "People Behind the Progress"],
          ].map(([number, title]) => (
            <article
              key={number}
              className="group rounded-2xl border border-slate-200 p-7 transition hover:border-amber-400 hover:shadow-lg sm:p-9"
            >
              <span className="text-sm font-bold text-amber-600">
                FEATURE {number}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Explore ideas, developments and perspectives
                relevant to the changing industry landscape.
              </p>
              <span className="mt-5 inline-block font-bold text-slate-900 group-hover:text-amber-600">
                Explore story →
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
