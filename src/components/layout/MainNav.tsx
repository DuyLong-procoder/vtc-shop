import Container from "./Container";

const MainNav = () => {
  const items = ["Home", "Shop", "Pages", "Blog", "Contact"];

  return (
    <nav className="bg-white border-b border-slate-200">
      <Container className="flex items-center gap-6 py-3 text-sm font-medium">
        {items.map((item) => (
          <button
            key={item}
            className="relative text-slate-700 hover:text-rose-600"
          >
            {item}
          </button>
        ))}
      </Container>
    </nav>
  );
};

export default MainNav;
