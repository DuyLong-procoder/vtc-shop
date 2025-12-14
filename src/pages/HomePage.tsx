import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import ProductSection from "../components/home/ProductSection";
import DealSection from "../components/home/DealSection";
import GallerySection from "../components/home/GallerySection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="space-y-12 pb-16">
        <HeroSection />
        <CategorySection />
        <ProductSection />
        <DealSection />
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
