import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { toast } from 'sonner';

const Cart = () => {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getTotalPrice 
  } = useCartStore();

  console.log('Cart rendered, items:', items.length, 'isOpen:', isOpen);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }
    toast.success('¡Pedido realizado con éxito!');
    clearCart();
    toggleCart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Carrito de Compras</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <p>Tu carrito está vacío</p>
                <p className="text-sm mt-2">¡Agrega algunos aguacates deliciosos!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-green-600 font-semibold">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="px-2 py-1 bg-white rounded border min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 text-red-500 rounded ml-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-green-600">${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Finalizar Compra
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition-colors"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;