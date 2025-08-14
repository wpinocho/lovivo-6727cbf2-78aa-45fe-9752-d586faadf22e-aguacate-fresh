import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Index = () => {
  console.log('Index page rendered');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
      <Cart />
    </div>
  );
};

export default Index;