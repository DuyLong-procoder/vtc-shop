import Container from "./Container";

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-xs text-slate-100">
      <Container className="flex items-center justify-between py-2">
        <p>Welcome to our international shop! Enjoy free shipping over $100.</p>
        <button className="font-semibold text-rose-400 hover:text-rose-300">
          Shop Now
        </button>
      </Container>
    </div>
  );
};

export default TopBar;
