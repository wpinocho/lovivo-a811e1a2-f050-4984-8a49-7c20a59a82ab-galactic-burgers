import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Rocket } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export const CartSidebar = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    total, 
    itemCount, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  console.log("🛒 Cart sidebar rendered, open:", isCartOpen, "items:", itemCount);

  const handleCheckout = () => {
    console.log("🚀 Processing galactic checkout");
    alert("¡Preparando tu pedido para el delivery intergaláctico! 🚀👽");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-purple-900 to-black border-l border-purple-500/30 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Carrito Galáctico
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-purple-800/50 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Items */}
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                  <p className="text-gray-400 text-lg">Tu carrito está vacío</p>
                  <p className="text-gray-500 text-sm mt-2">¡Agrega algunas hamburguesas galácticas!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-purple-800/30 rounded-lg p-4 border border-purple-500/20"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{item.image}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-purple-300">{item.planet}</p>
                            <p className="text-green-400 font-bold">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-purple-700 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-purple-700 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-red-600 rounded text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Total */}
                  <div className="border-t border-purple-500/30 pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-green-400">${total}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      {itemCount} item{itemCount !== 1 ? 's' : ''} en tu carrito
                    </p>
                  </div>
                  
                  {/* Actions */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      <Rocket className="w-5 h-5" />
                      <span>Delivery Intergaláctico</span>
                    </motion.button>
                    
                    <button
                      onClick={clearCart}
                      className="w-full border border-red-500 text-red-400 hover:bg-red-500/20 py-2 rounded-lg transition-colors"
                    >
                      Vaciar Carrito
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};