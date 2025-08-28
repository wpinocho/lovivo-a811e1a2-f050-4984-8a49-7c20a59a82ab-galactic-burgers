import { motion } from "framer-motion";
import { Plus, MapPin } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Burger {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  planet: string;
  ingredients: string[];
}

interface BurgerCardProps {
  burger: Burger;
}

export const BurgerCard = ({ burger }: BurgerCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    console.log("🍔 Adding burger to cart:", burger.name);
    addItem({
      id: burger.id,
      name: burger.name,
      price: burger.price,
      image: burger.image,
      planet: burger.planet
    });
    
    toast({
      title: "¡Agregado al carrito! 🚀",
      description: `${burger.name} ha sido agregado a tu pedido galáctico`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
    >
      <div className="text-center mb-4">
        <div className="text-6xl mb-2">{burger.image}</div>
        <div className="flex items-center justify-center space-x-1 text-sm text-purple-300 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{burger.planet}</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
        {burger.name}
      </h3>
      
      <p className="text-gray-300 text-center mb-4">
        {burger.description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-purple-300 mb-2">Ingredientes:</h4>
        <div className="space-y-1">
          {burger.ingredients.map((ingredient, index) => (
            <div key={index} className="text-sm text-gray-400">
              {ingredient}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-green-400">
          ${burger.price}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          <span>Agregar</span>
        </motion.button>
      </div>
    </motion.div>
  );
};