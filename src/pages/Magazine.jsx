
export default function Magazine() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Digital Publication
          </span>
          <h1 className="mt-5 text-5xl font-black sm:text-7xl">
            The Magazine<span className="text-amber-400">.</span>
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Explore industry insights, technical knowledge, expert
            perspectives and stories from the electrical sector.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-slate-950">
          Explore Our Editions
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((edition) => (
            <article
              key={edition}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-950 via-slate-800 to-amber-500 p-6">
                <div className="border border-white/40 p-6 text-center text-white">
                  <p className="text-xs font-bold tracking-[0.3em]">
                    ELECTRICAL
                  </p>
                  <p className="mt-2 text-3xl font-black">MIRROR</p>
                  <p className="mt-3 text-xs">DIGITAL MAGAZINE</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-amber-600">
                  EDITION 0{edition}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  Industry Insights
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Discover features and perspectives from the industry.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
