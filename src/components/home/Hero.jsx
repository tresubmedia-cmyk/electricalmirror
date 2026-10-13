import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
} from "lucide-react";

const DURATION = 5000; // milliseconds: 5000 = 5 second

const slides = [
  {
    category: "Power & Energy",
    title: "Powering the Future Through Innovation",
    description:
      "Discover the latest developments transforming the electrical and power industry, from grid modernisation to next-generation transmission.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80",
    link: "/news",
    date: "13 Oct 2026",
    readTime: "5 min read",
  },
  {
    category: "Renewable Energy",
    title: "A New Era of Clean Energy",
    description:
      "Explore the solar, wind and storage technologies driving a smarter and more sustainable energy future for India.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80",
    link: "/news",
    date: "12 Oct 2026",
    readTime: "4 min read",
  },
  {
    category: "Technology",
    title: "Engineering Tomorrow's World",
    description:
      "The innovations and infrastructure shaping the future of electrical engineering, explained by the people building it.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    link: "/interviews",
    date: "11 Oct 2026",
    readTime: "6 min read",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((c) => (c + 1) % slides.length),
    []
  );
  const previous = useCallback(
    () => setActive((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  // Auto-play: slide badalte hi timer naye sire se shuru hota hai
  // (arrow ya bar pe click karne par bhi dobara 5 second ginta hai)
  useEffect(() => {
    const timer = setTimeout(next, DURATION);
    return () => clearTimeout(timer);
  }, [active, next]);

  const slide = slides[active];
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured stories"
      className="relative w-full overflow-hidden bg-slate-950"
    >
      <style>{`
        @keyframes hero-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes hero-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .hero-fill { animation: none !important; transform: scaleX(1) !important; }
          .hero-text { animation: none !important; }
        }
      `}</style>

      <div className="relative h-[640px] sm:h-[760px] lg:h-[880px]">
        {/* Background images */}
        {slides.map((item, index) => (
          <img
            key={item.title}
            src={item.image}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Text readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 pb-28 sm:px-8 lg:px-10">
          <div
            key={active}
            aria-live="polite"
            className="hero-text max-w-2xl"
            style={{ animation: "hero-in .7s ease-out" }}
          >
            <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-slate-950">
              {slide.category}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              {slide.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={15} className="text-amber-400" />
                {slide.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} className="text-amber-400" />
                {slide.readTime}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={slide.link}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Read Full Story
                <ArrowUpRight size={17} />
              </a>
              <a
                href="/magazine"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Magazine
              </a>
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute inset-x-0 bottom-0">   
          <div className="mx-auto flex max-w-7xl items-end gap-4 px-5 pb-6 sm:gap-8 sm:px-8 sm:pb-8 lg:px-10">
            {/* Progress tabs */}
            <div className="flex flex-1 gap-2 sm:gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}: ${item.category}`}
                  aria-current={active === index}
                  className="group flex-1 text-left"
                >
                  <span
                    className={`mb-2 hidden truncate text-xs font-semibold transition-colors sm:block ${
                      active === index
                        ? "text-white"
                        : "text-slate-400 group-hover:text-white"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="relative block h-1 overflow-hidden rounded-full bg-white/25">
                    <span
                      key={active === index ? `on-${active}` : `off-${index}`}
                      className={`hero-fill absolute inset-0 origin-left rounded-full bg-amber-400 ${
                        index < active ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={
                        active === index
                          ? { animation: `hero-progress ${DURATION}ms linear forwards` }
                          : undefined
                      }
                    />
                  </span>
                </button>
              ))}
            </div>

            {/* Counter + arrows */}
            <div className="flex shrink-0 items-center gap-3">
              
              <button
                type="button"
                onClick={previous}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
              >
                <ArrowLeft size={19} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-slate-950 transition hover:bg-white"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}