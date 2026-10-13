
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowUpRight, Images } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Industry Exhibition",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Electrical Innovation",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Professional Networking",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Power Infrastructure",
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Modern Architecture",
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Business Conference",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Energy Technology",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Industry Landscape",
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Industry Gathering",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = ["All", "Events", "Industry", "Technology"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-amber-400/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            <Images size={19} />
            Our Visual Stories
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Moments That
            <span className="block text-amber-400">
              Tell Our Story.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore industry events, technology, infrastructure
            and memorable moments through our visual gallery.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Explore Gallery
              <ArrowUpRight size={18} />
            </a>

            <Link
              to="/contact"
              className="rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              Explore Collection
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Our Gallery
            </h2>

            <p className="mt-3 text-slate-500">
              A closer look at our industry and community.
            </p>
          </div>

          <p className="text-sm font-semibold text-slate-500">
            {filteredItems.length} photographs
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-slate-950"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left"
              aria-label={`View ${item.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-90 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">
                    {item.title}
                  </h3>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-amber-400 group-hover:text-slate-950">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-50 px-4 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Have a story to share?
            </h2>
            <p className="mt-3 text-slate-600">
              Get in touch with our team to share your industry moments.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
          >
            Contact Our Team
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400 hover:text-slate-950"
          >
            <X size={23} />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="mx-auto max-h-[75vh] w-full rounded-xl object-contain"
            />

            <div className="mt-5 text-center text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {selectedImage.category}
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
