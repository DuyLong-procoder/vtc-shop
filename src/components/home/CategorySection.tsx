import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

const categories = [
  "Home Decor",
  "Lighting",
  "Kitchen",
  "Furniture",
  "Outdoor",
  "Accessories",
];

const CategorySection = () => {
  return (
    <section>
      <Container>
        <SectionTitle
          title="Top Categories"
          subtitle="Browse our most popular categories for home & lifestyle."
        />
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="flex h-24 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs font-medium text-slate-700 shadow-sm hover:border-rose-400 hover:text-rose-600 transition"
            >
              <div className="mb-2 h-8 w-8 rounded-full bg-rose-100" />
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
