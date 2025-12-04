import Container from "./Container";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <Container className="flex items-center justify-between py-4 gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          VTC<span className="text-rose-600">Shop</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 gap-2">
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            placeholder="What are you looking for?"
          />
          <button className="rounded-full bg-rose-600 px-4 py-1 text-sm font-semibold text-white hover:bg-rose-700">
            Search
          </button>
        </div>

        {/* Icons / links */}
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <button className="hover:text-rose-600">Login / Register</button>
          <button className="hover:text-rose-600">Wishlist</button>
          <button className="hover:text-rose-600">Cart (0)</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
