
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";

import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import Interviews from "./pages/Interviews.jsx";
import Magazine from "./pages/Magazine.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CoverStory from "./pages/CoverStory.jsx";
import Resources from "./pages/Resources.jsx";
import EditorialCalendar from "./pages/EditorialCalendar.jsx";
import EventCalendar from "./pages/EventCalendar.jsx";
import Gallery from "./pages/Gallery.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cover-story" element={<CoverStory />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/editorial-calender"
            element={<EditorialCalendar />}
          />
          <Route
            path="/event-calender"
            element={<EventCalendar />}
          />
          <Route
            path="*"
            element={
              <main className="flex min-h-[60vh] items-center justify-center px-4">
                <div className="text-center">
                  <h1 className="text-5xl font-extrabold text-slate-950">
                    404
                  </h1>
                  <p className="mt-3 text-slate-600">
                    Sorry, this page could not be found.
                  </p>
                  <a
                    href="/"
                    className="mt-6 inline-block rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950"
                  >
                    Back to Home
                  </a>
                </div>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
