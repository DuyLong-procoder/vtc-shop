import Container from "../layout/Container";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section className="pt-8">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Banner lớn bên trái */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-100 via-white to-rose-50 p-8 shadow-sm md:col-span-2">
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

          {/* Hai banner nhỏ bên phải */}
          <div className="space-y-4">
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
