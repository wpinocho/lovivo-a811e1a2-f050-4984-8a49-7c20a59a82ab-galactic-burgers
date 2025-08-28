import { ShoppingCart, Rocket } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

export const Header = () => {
  const { itemCount, setIsCartOpen } = useCart();

  console.log("🎯 Header rendered with cart items:", itemCount);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Rocket className="w-8 h-8 text-purple-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Galactic Burgers
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#menu" className="hover:text-purple-400 transition-colors">Menú Galáctico</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">Sobre Nosotros</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contacto</a>
        </nav>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
            >
              {itemCount}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
};