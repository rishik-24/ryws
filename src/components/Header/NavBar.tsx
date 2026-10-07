import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";

const NavBar = () => {
  return (
    <header
      className="fixed right-0 left-0 z-50 border-b border-neutral-800/30 backdrop-blur-xl dark:border-neutral-200/30"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            RYWS
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <div
            id="status-indicator-badge"
            className="items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 sm:inline-flex dark:text-amber-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
            <span>Under Development</span>
          </div>

          <Link href={"/"}>Home</Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
