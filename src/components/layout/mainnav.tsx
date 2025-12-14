export default function MainNav({ sticky = false }: { sticky?: boolean }) {
  const itemClass =
    "flex items-center gap-1 font-semibold hover:text-rose-600";

  return (
    <nav
      className={`${
        sticky ? "flex items-center gap-8" : "hidden lg:flex items-center gap-8"
      }`}
    >
      <a href="#" className={itemClass}>
        Home <Caret />
      </a>
      <a href="#" className={itemClass}>
        Shop <Caret />
      </a>
      <a href="#" className={itemClass}>
        Pages <Caret />
      </a>
      <a href="#" className={itemClass}>
        Blog <Caret />
      </a>
      <a href="#" className={itemClass}>
        Contact
      </a>
    </nav>
  );
}

function Caret() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
