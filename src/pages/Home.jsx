
import Hero from "../components/home/Hero.jsx";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-slate-50 px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Electrical Mirror
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Explore the Electrical Industry
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Discover industry news, expert interviews, magazine
            features and the latest developments in electrical,
            power and energy technology.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Latest News", "/news"],
              ["Expert Interviews", "/interviews"],
              ["Our Magazine", "/magazine"],
            ].map(([title, link]) => (
              <a
                key={link}
                href={link}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  Explore more from Electrical Mirror.
                </p>
                <span className="mt-5 inline-block font-bold text-amber-600">
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
