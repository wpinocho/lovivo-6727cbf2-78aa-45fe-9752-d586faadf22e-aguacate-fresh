import { ShoppingCart, Leaf } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Header = () => {
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  console.log('Header rendered, total items:', totalItems);

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <h1 className="text-2xl font-bold">AguacateShop</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-green-200 transition-colors">Inicio</a>
            <a href="#" className="hover:text-green-200 transition-colors">Productos</a>
            <a href="#" className="hover:text-green-200 transition-colors">Sobre Nosotros</a>
            <a href="#" className="hover:text-green-200 transition-colors">Contacto</a>
          </nav>
          
          <button
            onClick={toggleCart}
            className="relative bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;