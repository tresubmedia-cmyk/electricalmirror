
export default function Interviews() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-amber-50 px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Voices of Experience
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-slate-950 sm:text-6xl">
            Conversations That Inspire.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Insights, experiences and perspectives from industry
            leaders, professionals and innovators.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-slate-950">
          Featured Interviews
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            "Leadership & Vision",
            "Innovation & Technology",
            "Industry Challenges",
            "Future of Energy",
          ].map((title, index) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 p-7 sm:p-9"
            >
              <span className="text-sm font-bold text-amber-600">
                INTERVIEW 0{index + 1}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Discover professional insights and perspectives
                shaping the electrical industry.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
