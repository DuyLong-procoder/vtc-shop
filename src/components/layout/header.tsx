import { useEffect, useState } from "react";
import Container from "./container";
import MainNav from "./mainnav";
import TopBar from "./topbar";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-white">
      {/* Top bar chỉ hiện khi chưa sticky (giống ảnh) */}
      {!isSticky && <TopBar />}

      {/* Normal header (chưa sticky) */}
      {!isSticky && (
        <div className="border-b border-slate-100">
          <Container className="flex items-center gap-6 py-4">
            {/* Logo */}
            <a href="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="VTC Academy"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Search lớn */}
            <div className="hidden md:flex flex-1">
              <div className="flex w-full items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 gap-3">
                <SearchIcon className="h-5 w-5 text-slate-400" />
                <input
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Icons + language/currency (giống bản trên) */}
            <div className="ml-auto flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
                <span className="text-lg">🇬🇧</span>
                <span className="font-semibold">English</span>
                <CaretDownIcon className="h-4 w-4 text-slate-500" />
              </button>

              <button className="hidden md:flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
                <span className="font-semibold">USD</span>
                <CaretDownIcon className="h-4 w-4 text-slate-500" />
              </button>

              <div className="flex items-center gap-2">
                <IconBadgeButton badge={4} ariaLabel="Cart">
                  <CartIcon className="h-5 w-5" />
                </IconBadgeButton>
                <IconBadgeButton ariaLabel="Account">
                  <UserIcon className="h-5 w-5" />
                </IconBadgeButton>
                <IconBadgeButton badge={0} ariaLabel="Wishlist">
                  <HeartIcon className="h-5 w-5" />
                </IconBadgeButton>
              </div>
            </div>
          </Container>

          {/* Nav bar dưới (Categories + menu + hotline) */}
          <div className="bg-white">
            <Container className="flex items-center justify-between py-3">
              <div className="flex items-center gap-6">
                <button className="flex w-[280px] items-center justify-center gap-3 bg-rose-600 px-5 py-3 text-white font-semibold hover:bg-rose-700">
                  <MenuIcon className="h-5 w-5" />
                  Categories
                </button>

                <MainNav />
              </div>

              <div className="hidden md:flex items-center gap-8 font-semibold">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-rose-600" />
                  <span>1900 292958</span>
                </div>
                <button className="flex items-center gap-2 hover:text-rose-600">
                  <PinIcon className="h-5 w-5 text-rose-600" />
                  Find Store
                </button>
              </div>
            </Container>
          </div>
        </div>
      )}

      {/* Sticky header (khi cuộn) — giống ảnh 2 */}
      {isSticky && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <Container className="flex items-center gap-6 py-3">
            {/* Logo nhỏ */}
            <a href="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="VTC Academy"
                className="h-8 w-auto object-contain"
              />
            </a>

            {/* Menu ngang */}
            <div className="hidden lg:block">
              <MainNav sticky />
            </div>

            {/* Icons */}
            <div className="ml-auto flex items-center gap-3">
              <IconBadgeButton badge={4} ariaLabel="Cart">
                <CartIcon className="h-5 w-5" />
              </IconBadgeButton>
              <IconBadgeButton ariaLabel="Account">
                <UserIcon className="h-5 w-5" />
              </IconBadgeButton>
              <IconBadgeButton badge={0} ariaLabel="Wishlist">
                <HeartIcon className="h-5 w-5" />
              </IconBadgeButton>

              {/* Search nhỏ bên phải */}
              <div className="hidden md:flex items-center rounded-md border border-slate-200 px-3 py-2 gap-2">
                <SearchIcon className="h-4 w-4 text-slate-400" />
                <input
                  className="w-56 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search products..."
                />
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Spacer để tránh content bị che bởi sticky */}
      {isSticky && <div className="h-[64px]" />}
    </header>
  );
}

/* ---------- small helpers ---------- */

function IconBadgeButton({
  children,
  badge,
  ariaLabel,
}: {
  children: React.ReactNode;
  badge?: number;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="relative rounded-full p-2 hover:bg-slate-100"
    >
      {children}
      {typeof badge === "number" && badge > 0 && (
        <span className="absolute -right-1 -top-1 min-w-[18px] rounded-full bg-rose-600 px-1.5 text-[11px] font-bold leading-[18px] text-white text-center">
          {badge}
        </span>
      )}
    </button>
  );
}

/* ---------- icons (SVG) ---------- */
function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CaretDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
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

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 7h15l-2 8H8L6 4H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 21a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7-4.6-9.2-9A5.5 5.5 0 0 1 12 6.8 5.5 5.5 0 0 1 21.2 12C19 16.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.5 2.9.6A2 2 0 0 1 22 16.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
