import { Leaf, Heart, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Los Mejores Aguacates
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Frescos, deliciosos y directo del huerto a tu mesa
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Comprar Ahora
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
            <p className="opacity-90">Cultivados sin químicos dañinos</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Saludables</h3>
            <p className="opacity-90">Ricos en vitaminas y grasas saludables</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
            <p className="opacity-90">Frescos en tu puerta en 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;