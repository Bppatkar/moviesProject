import { Link } from "react-router-dom";

const Sidenav = () => {
  const linkClass =
    "group flex items-center rounded-xl px-4 py-3 text-base transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/20";

  return (
    <div
      style={{
        "--color-primary": "#6556cd",
        "--color-surface": "#18181b",
        "--color-border": "#3f3f46",
      }}
      className="flex h-full min-h-screen w-full flex-col overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-surface)] p-6"
    >
      <Link to="/" className="flex items-center text-xl font-bold tracking-wide text-white group cursor-pointer">
        <i className="ri-file-video-fill mr-2 text-lg text-[var(--color-primary)] transition-transform group-hover:scale-110"></i>
        <span className="transition-colors group-hover:text-[#6556cd]">Movies Hub</span>
      </Link>

      <nav className="mt-6 flex flex-col gap-1 text-zinc-400">
        <h2 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          New Feeds
        </h2>

        <Link to="/trending" className={linkClass}>
          <i className="ri-fire-fill text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">Trending</span>
        </Link>

        <Link to="/popular" className={linkClass}>
          <i className="ri-bard-fill text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">Popular</span>
        </Link>
        <Link to="/movies" className={linkClass}>
          <i className="ri-film-line text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">Movies</span>
        </Link>
        <Link to="/tv-shows" className={linkClass}>
          <i className="ri-tv-fill text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">Tv-Shows</span>
        </Link>
        <Link to="/people" className={linkClass}>
          <i className="ri-team-fill text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">People</span>
        </Link>
      </nav>

      <hr className="my-6 border-[var(--color-border)]" />

      <nav className="flex flex-col gap-1 text-zinc-400">
        <h2 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Website Information
        </h2>

        <Link to="/about" className={linkClass}>
          <i className="ri-info-i text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">About Movies Hub</span>
        </Link>

        <Link to="/contact" className={linkClass}>
          <i className="ri-phone-fill text-lg transition-transform group-hover:scale-110"></i>
          <span className="ml-2">Contact Us</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
