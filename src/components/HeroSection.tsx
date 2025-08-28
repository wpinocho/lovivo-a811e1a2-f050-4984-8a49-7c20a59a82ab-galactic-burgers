import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

export const HeroSection = () => {
  console.log("🌟 Hero section rendered");

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <div className="text-8xl mb-4">🍔</div>
          <div className="flex justify-center space-x-4 text-4xl">
            <span>👽</span>
            <span>🛸</span>
            <span>🚀</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          Galactic Burgers
        </motion.h1>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
        >
          Las hamburguesas más deliciosas del universo, hechas con ingredientes de planetas lejanos
        </motion.p>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#menu"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explorar Menú</span>
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-500 rounded-full text-lg font-semibold hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>Delivery Intergaláctico</span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Planetas flotantes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-10 text-6xl opacity-30"
      >
        🪐
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-10 text-4xl opacity-40"
      >
        🌙
      </motion.div>
    </section>
  );
};