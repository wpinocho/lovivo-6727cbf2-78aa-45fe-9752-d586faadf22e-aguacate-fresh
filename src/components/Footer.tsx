import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-bold">AguacateShop</h3>
            </div>
            <p className="text-gray-400">
              Tu tienda de confianza para los mejores aguacates frescos y naturales.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Productos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orgánico</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Packs Familiares</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Variedades Especiales</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@aguacateshop.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Aguacate St, Ciudad</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AguacateShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;