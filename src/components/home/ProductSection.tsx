import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Wooden Chair", price: 49 },
  { id: 2, name: "Minimal Lamp", price: 39 },
  { id: 3, name: "Soft Blanket", price: 29 },
  { id: 4, name: "Ceramic Vase", price: 19 },
];

const ProductSection = () => {
  return (
    <section>
      <Container>
        <SectionTitle
          title="Popular Products"
          subtitle="Handpicked favorites just for you."
        />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <div className="mb-3 h-32 w-full rounded-xl bg-slate-100" />
              <h4 className="text-sm font-semibold text-slate-900">
                {p.name}
              </h4>
              <p className="mt-1 text-sm font-bold text-rose-600">
                ${p.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
