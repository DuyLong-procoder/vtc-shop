import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const DealSection = () => {
  return (
    <section>
      <Container>
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase text-rose-300 font-semibold">
              Deal of the day
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              50% Off Wooden Desk Organizer
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-md">
              Limited time offer. Get the best accessory to keep your workspace
              clean and organized.
            </p>
          </div>
          <Button className="bg-rose-500 hover:bg-rose-600">
            Shop Deal →
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default DealSection;
