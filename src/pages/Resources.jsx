
export default function Resources() {
  const resources = [
    {
      number: "01",
      title: "Industry Knowledge",
      description: "Explore educational content and sector insights.",
    },
    {
      number: "02",
      title: "Technical Resources",
      description: "Discover technical topics and useful references.",
    },
    {
      number: "03",
      title: "Industry Updates",
      description: "Stay informed about developments and innovations.",
    },
    {
      number: "04",
      title: "Professional Insights",
      description: "Learn from ideas and experiences across the industry.",
    },
    {
      number: "05",
      title: "Power & Energy",
      description: "Explore information related to power and energy.",
    },
    {
      number: "06",
      title: "Digital Publications",
      description: "Find magazine features and editorial content.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-amber-50 px-4 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Knowledge Hub
          </p>
          <h1 className="mt-4 text-5xl font-extrabold text-slate-950 sm:text-7xl">
            Resources<span className="text-amber-500">.</span>
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-600">
            A place to explore industry knowledge, technical topics,
            publications and professional perspectives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-800">
                {item.number}
              </span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
