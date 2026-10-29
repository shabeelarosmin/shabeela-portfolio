export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-neutral-500">
          © 2026 Shabeela. Crafted with creativity.
        </p>

        <a
          href="#home"
          className="text-sm text-[#d8b15a] transition-colors hover:text-[#f5d98b]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
