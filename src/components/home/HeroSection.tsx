import Container from "../layout/container";
import Button from "../common/Button";

const CATEGORIES = [
  { label: "Candles", hasChildren: false },
  { label: "Handmade", hasChildren: true },
  { label: "Gift Sets", hasChildren: false },
  { label: "Plastic Gifts", hasChildren: false },
  { label: "Handy Cream", hasChildren: false },
  { label: "Cosmetics", hasChildren: false },
  { label: "Silk Accessories", hasChildren: false },
];

const HeroSection = () => {
  return (
    <section className="pt-8">
      <Container>
        {/* md: vẫn 3 cột (banner 2 + card 1). lg: đổi sang 3 cột thật sự (sidebar + banner + right) */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-[280px_1fr_320px]">
          {/* ===== Sidebar Categories (chỉ hiện ở lg+) ===== */}
          <aside className="hidden lg:block">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100">
              {/* Header đỏ */}
              <div className="flex items-center gap-3 bg-rose-600 px-5 py-4 text-white font-semibold">
                <span className="text-lg leading-none">☰</span>
                Categories
              </div>

              {/* List */}
              <ul className="py-2">
                {CATEGORIES.map((c) => (
                  <li key={c.label}>
                    <a
                      href="#"
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-slate-50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-600/20" />
                        <span className="font-medium text-slate-800">{c.label}</span>
                      </span>

                      {c.hasChildren ? (
                        <ChevronRightIcon className="h-4 w-4 text-slate-400" />
                      ) : (
                        <span />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Quick links giống hình mẫu */}
              <div className="border-t border-slate-100 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Value of the Day
                </p>
                <div className="mt-3 space-y-2 text-sm font-semibold text-slate-900">
                  <a className="block hover:text-rose-600" href="#">
                    Top 100 Offers
                  </a>
                  <a className="block hover:text-rose-600" href="#">
                    New Arrivals
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* ===== Banner lớn (md: chiếm 2 cột, lg: chỉ 1 cột ở giữa) ===== */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-100 via-white to-rose-50 p-8 shadow-sm md:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase text-rose-600">
              Accessories
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Up to 40% off
            </h1>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Latest creations for your home & lifestyle. Get the best deals on
              handcrafted decorations and more.
            </p>
            <Button className="mt-6">Shop Now →</Button>
          </div>

          {/* ===== Hai banner nhỏ bên phải ===== */}
          <div className="space-y-4 md:col-span-1">
            <div className="rounded-3xl bg-amber-50 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase text-amber-600">
                New Arrivals
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Up to 30% off
              </h3>
              <Button className="mt-4 px-4 py-1 text-xs">Shop Now →</Button>
            </div>

            <div className="rounded-3xl bg-sky-50 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase text-sky-600">
                Best Sellers
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Up to 50% off
              </h3>
              <Button className="mt-4 px-4 py-1 text-xs">View Deals →</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

/* ===== icon nhỏ ===== */
function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
