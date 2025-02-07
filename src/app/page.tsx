import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroProduct from "./components/HeroProduct";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-yellow-400 p-4">
      <Navbar/>
      <HeroSection/>
      <HeroProduct/>
      <ProductCatalog/>
      <ProductDetail/>
      <Footer/>
    </div>
  );
}