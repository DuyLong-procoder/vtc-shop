import Container from "./container";

export default function TopBar() {
  return (
    <div className="bg-slate-100 text-sm">
      <Container className="flex items-center justify-center py-2">
        <p className="text-center">
          <span className="font-semibold">
            Welcome to our international shop!
          </span>{" "}
          Enjoy free shipping on orders $100 up.{" "}
          <a href="#" className="font-semibold text-rose-600 hover:underline">
            Shop Now →
          </a>
        </p>
      </Container>
    </div>
  );
}
