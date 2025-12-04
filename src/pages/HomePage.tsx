// src/pages/HomePage.tsx
import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import MainNav from "../components/layout/MainNav";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import ProductSection from "../components/home/ProductSection";
import DealSection from "../components/home/DealSection";
import GallerySection from "../components/home/GallerySection";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopBar />
      <Header />
      <MainNav />

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
