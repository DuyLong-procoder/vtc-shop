import Container from "../layout/container";
import SectionTitle from "../common/SectionTitle";

const GallerySection = () => {
  return (
    <section>
      <Container>
        <SectionTitle
          title="From Our Instagram"
          subtitle="See how customers style our products at home."
        />
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-2xl bg-slate-200"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
