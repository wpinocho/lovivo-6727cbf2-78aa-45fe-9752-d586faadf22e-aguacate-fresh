import ProductCard from './ProductCard';
import { avocadoProducts } from '../data/products';

const ProductGrid = () => {
  console.log('ProductGrid rendered with', avocadoProducts.length, 'products');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección premium de aguacates, desde variedades clásicas 
            hasta opciones orgánicas especiales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avocadoProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;