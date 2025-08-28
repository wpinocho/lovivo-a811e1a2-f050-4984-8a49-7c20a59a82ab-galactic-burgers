import { motion } from "framer-motion";
import { BurgerCard } from "./BurgerCard";

const galacticBurgers = [
  {
    id: "1",
    name: "Nebula Supreme",
    description: "Carne de meteorito con queso de luna y vegetales de Marte",
    price: 299,
    image: "🍔",
    planet: "Nebulosa Andrómeda",
    ingredients: ["🥩 Carne de meteorito", "🧀 Queso lunar", "🥬 Lechuga marciana", "🍅 Tomates de Júpiter"]
  },
  {
    id: "2",
    name: "Alien Deluxe",
    description: "Proteína extraterrestre con salsa galáctica y pan de plasma",
    price: 349,
    image: "🛸",
    planet: "Planeta Zeta",
    ingredients: ["👽 Proteína alien", "🌌 Salsa galáctica", "🍞 Pan de plasma", "🥒 Pepinos de Saturno"]
  },
  {
    id: "3",
    name: "Cosmic Veggie",
    description: "Hamburguesa vegana con hongos de Venus y especias estelares",
    price: 249,
    image: "🌱",
    planet: "Venus Verde",
    ingredients: ["🍄 Hongos venusianos", "🌿 Especias estelares", "🥑 Aguacate espacial", "🌽 Maíz cósmico"]
  },
  {
    id: "4",
    name: "Black Hole Burger",
    description: "La hamburguesa más densa del universo con gravedad incluida",
    price: 399,
    image: "🕳️",
    planet: "Agujero Negro X1",
    ingredients: ["⚫ Materia oscura", "✨ Energía pura", "🌀 Gravedad concentrada", "💫 Polvo estelar"]
  },
  {
    id: "5",
    name: "Solar Flare",
    description: "Hamburguesa picante con chiles del Sol y queso derretido",
    price: 329,
    image: "☀️",
    planet: "Corona Solar",
    ingredients: ["🌶️ Chiles solares", "🔥 Salsa de plasma", "🧀 Queso derretido", "🥖 Pan tostado por rayos"]
  },
  {
    id: "6",
    name: "Galactic Royale",
    description: "La hamburguesa de los emperadores galácticos con oro comestible",
    price: 499,
    image: "👑",
    planet: "Palacio Imperial",
    ingredients: ["🥇 Oro comestible", "💎 Diamantes saborizados", "🦐 Caviar de estrella", "🍄 Trufa espacial"]
  }
];

export const MenuSection = () => {
  console.log("🍽️ Menu section rendered with", galacticBurgers.length, "burgers");

  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Menú Galáctico
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre sabores de otros mundos en nuestras hamburguesas únicas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galacticBurgers.map((burger, index) => (
            <motion.div
              key={burger.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BurgerCard burger={burger} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};