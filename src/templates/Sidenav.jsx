import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "group flex items-center rounded-xl px-4 py-3 text-base transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/20";

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[#3f3f46] bg-[#18181b] text-white shadow-md md:hidden"
        aria-label="Toggle Menu"
      >
        <i
          className={
            isOpen ? "ri-close-line text-2xl" : "ri-menu-3-line text-2xl"
          }
        ></i>
      </button>

      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        ></div>
      )}

      <div
        style={{
          "--color-primary": "#6556cd",
          "--color-surface": "#18181b",
          "--color-border": "#3f3f46",
        }}
          className={`fixed inset-y-0 left-0 z-40 w-72 transform overflow-y-auto border-r border-(--color-border) bg-(--color-surface) p-6 transition-transform duration-300 ease-in-out md:static md:min-h-screen md:w-[20%] md:min-w-60 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="mt-2 flex items-center text-xl font-bold tracking-wide text-white md:mt-0">
          <i className="ri-file-video-fill mr-2 text-lg text-(--color-primary)"></i>
          <span>Movies Hub</span>
        </h1>

        <nav className="mt-6 flex flex-col gap-1 text-zinc-400">
          <h2 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            New Feeds
          </h2>

          <Link to="/trending" onClick={closeSidebar} className={linkClass}>
            <i className="ri-fire-fill text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">Trending</span>
          </Link>

          <Link to="/popular" onClick={closeSidebar} className={linkClass}>
            <i className="ri-bard-fill text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">Popular</span>
          </Link>
          <Link to="/movies" onClick={closeSidebar} className={linkClass}>
            <i className="ri-film-line text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">Movies</span>
          </Link>
          <Link to="/tv-shows" onClick={closeSidebar} className={linkClass}>
            <i className="ri-tv-fill text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">Tv-Shows</span>
          </Link>
          <Link to="/people" onClick={closeSidebar} className={linkClass}>
            <i className="ri-team-fill text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">People</span>
          </Link>
        </nav>

        <hr className="my-6 border-(--color-border)" />

        <nav className="flex flex-col gap-1 text-zinc-400">
          <h2 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Website Information
          </h2>

          <Link to="/about" onClick={closeSidebar} className={linkClass}>
            <i className="ri-info-i text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">About Movies Hub</span>
          </Link>

          <Link to="/contact" onClick={closeSidebar} className={linkClass}>
            <i className="ri-phone-fill text-lg transition-transform group-hover:scale-110"></i>
            <span className="ml-2">Contact Us</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
