import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../store/cartStore';
import { useCartStore } from '../store/cartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    console.log('Adding product to cart:', product.name);
    addItem(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;