
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "Interviews", path: "/interviews" },
  { name: "Magazine", path: "/magazine" },
  { name: "Gallery", path: "/gallery" },
];

const aboutLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const moreLinks = [
  { name: "Cover Story", path: "/cover-story" },
  { name: "Resources", path: "/resources" },
  { name: "Editorial Calendar", path: "/editorial-calender" },
  { name: "Event Calendar", path: "/event-calender" },
];

function ActiveLine({ active }) {
  return (
    <span
      className={`absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-amber-400 transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const moreRef = useRef(null);
  const { pathname } = useLocation();

  const moreActive = moreLinks.some(
    (item) =>
      pathname === item.path || pathname.startsWith(item.path + "/")
  );

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMoreOpen(false);
        setMobileMoreOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `group relative flex h-full shrink-0 items-center whitespace-nowrap py-5 text-[13px] font-bold transition-colors duration-200 ${
      isActive
        ? "text-slate-950"
        : "text-slate-500 hover:text-slate-950"
    }`;

  const renderDesktopLink = (item) => (
    <NavLink
      key={item.path}
      to={item.path}
      end={item.path === "/"}
      className={desktopLinkClass}
    >
      {({ isActive }) => (
        <>
          {item.name}
          <ActiveLine active={isActive} />
        </>
      )}
    </NavLink>
  );

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center justify-between border-b border-slate-100 px-3 py-4 text-sm font-semibold transition-colors ${
      isActive
        ? "bg-amber-50 text-amber-700"
        : "text-slate-700 hover:bg-slate-50 hover:text-amber-700"
    }`;

  const renderMobileLink = (item) => (
    <NavLink
      key={item.path}
      to={item.path}
      end={item.path === "/"}
      className={mobileLinkClass}
    >
      {item.name}
      <ArrowUpRight size={16} />
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top information bar */}
      <div className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-10">
          <p className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-300 sm:text-[10px] sm:tracking-[0.2em]">
            Electrical Industry · Power · Innovation
          </p>

          <Link
            to="/news"
            className="flex shrink-0 items-center gap-1.5 text-[10px] font-bold text-amber-400 transition hover:text-amber-300"
          >
            Latest News
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-slate-200 bg-white shadow-[0_5px_20px_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          {/* Original logo on the left */}
          <Link
            to="/"
            aria-label="Electrical Mirror home"
            onClick={() => setMenuOpen(false)}
            className="flex min-w-0 shrink-0 items-center py-3 sm:py-4"
          >
            <img
              src="/logo/em-logo.webp"
              alt="Electrical Mirror"
              className="h-10 w-auto max-w-[165px] object-contain object-left sm:h-12 sm:max-w-[210px] lg:h-14 lg:max-w-[235px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden h-[80px] items-stretch gap-8 xl:flex 2xl:gap-8"
          >
            {mainLinks.map(renderDesktopLink)}

            {/* About and Contact before More */}
            {aboutLinks.map(renderDesktopLink)}

            {/* More dropdown is the last navigation item */}
            <div
              ref={moreRef}
              className="relative flex shrink-0 items-stretch"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={moreOpen}
                className={`group relative flex items-center gap-1.5 whitespace-nowrap py-5 text-[13px] font-bold transition-colors ${
                  moreActive || moreOpen
                    ? "text-slate-950"
                    : "text-slate-500 hover:text-slate-950"
                }`}
              >
                More
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
                <ActiveLine active={moreActive || moreOpen} />
              </button>

              <div
                className={`absolute right-0 top-full z-50 w-64 origin-top-right rounded-b-xl border border-slate-100 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all duration-200 ${
                  moreOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Explore More
                </p>

                {moreLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    role="menuitem"
                    onClick={() => setMoreOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-3 py-3 text-[13px] font-semibold transition ${
                        isActive
                          ? "bg-amber-50 text-amber-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`
                    }
                  >
                    {item.name}
                    <ArrowUpRight size={15} />
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Search and mobile menu button */}
          <div className="flex shrink-0 items-center gap-2">
      

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-amber-400 hover:text-slate-950 xl:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive mobile menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out xl:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="max-h-[calc(100dvh-100px)] overflow-y-auto border-b border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg"
          >
            {mainLinks.map(renderMobileLink)}
            {aboutLinks.map(renderMobileLink)}

            {/* Mobile More accordion */}
            <button
              type="button"
              onClick={() => setMobileMoreOpen((open) => !open)}
              aria-expanded={mobileMoreOpen}
              className={`flex w-full items-center justify-between border-b border-slate-100 px-3 py-4 text-sm font-semibold transition ${
                moreActive
                  ? "text-amber-700"
                  : "text-slate-700 hover:text-amber-700"
              }`}
            >
              More
              <ChevronDown
                size={17}
                className={`transition-transform duration-200 ${
                  mobileMoreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                mobileMoreOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden rounded-b-lg bg-slate-50">
                {moreLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-slate-100 px-6 py-3.5 text-sm font-medium ${
                        isActive
                          ? "text-amber-700"
                          : "text-slate-600 hover:text-slate-950"
                      }`
                    }
                  >
                    {item.name}
                    <ArrowUpRight size={15} />
                  </NavLink>
                ))}
              </div>
            </div>

            <Link
              to="/search"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-50"
            >
              <Search size={17} />
              Search Articles
            </Link>

            <Link
              to="/magazine"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Explore Magazine
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
