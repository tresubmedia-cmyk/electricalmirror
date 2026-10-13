
export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-amber-400">
            Who We Are
          </p>
          <h1 className="mt-5 text-5xl font-extrabold sm:text-7xl">
            About Us<span className="text-amber-400">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A platform dedicated to industry news, knowledge,
            innovation and conversations across the electrical sector.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="font-bold uppercase tracking-widest text-amber-600">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Connecting People With Industry Knowledge
          </h2>
        </div>
        <div className="space-y-5 leading-8 text-slate-600">
          <p>
            Electrical Mirror brings together industry developments,
            technology updates and professional perspectives in one place.
          </p>
          <p>
            Our goal is to make relevant information accessible to
            readers and professionals interested in the electrical
            and power industries.
          </p>
          <p>
            We aim to encourage learning, awareness and meaningful
            conversations about the industry's future.
          </p>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-950">
            What We Focus On
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {["Industry News", "Knowledge Sharing", "Innovation"].map(
              (item) => (
                <div key={item} className="rounded-2xl bg-white p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Bringing useful information and fresh perspectives
                    to industry readers.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
