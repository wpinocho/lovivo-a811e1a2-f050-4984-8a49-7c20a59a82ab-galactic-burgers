import { motion } from "framer-motion";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  console.log("🦶 Footer rendered");

  return (
    <footer className="bg-black/80 border-t border-purple-500/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Galactic Burgers
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Las mejores hamburguesas del universo, entregadas directamente desde el espacio exterior.
            </p>
            <div className="flex space-x-4 text-2xl">
              <span>🛸</span>
              <span>👽</span>
              <span>🚀</span>
              <span>🌌</span>
            </div>
          </motion.div>
          
          {/* Contacto */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Contacto Intergaláctico</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Estación Espacial Alpha, Sector 7</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1-800-GALACTIC</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>orders@galacticburgers.space</span>
              </div>
            </div>
          </motion.div>
          
          {/* Horarios */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Horarios Galácticos</h4>
            <div className="space-y-2 text-gray-400">
              <div>Lun - Vie: 24/7 (Tiempo Terrestre)</div>
              <div>Sáb - Dom: 24/7 (Tiempo Marciano)</div>
              <div className="text-sm text-purple-400 mt-3">
                * Delivery disponible en toda la galaxia
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-purple-500/30 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Galactic Burgers. Todos los derechos reservados en el universo conocido.</p>
          <p className="text-sm mt-2">🚀 Powered by alien technology 👽</p>
        </motion.div>
      </div>
    </footer>
  );
};