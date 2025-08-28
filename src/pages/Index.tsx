import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { CartSidebar } from "@/components/CartSidebar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  console.log("🚀 Galactic Burger Store initialized");

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white overflow-x-hidden">
        {/* Estrellas de fondo */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="27" r="1"/%3E%3Ccircle cx="47" cy="47" r="1"/%3E%3Ccircle cx="17" cy="37" r="0.5"/%3E%3Ccircle cx="37" cy="17" r="0.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <MenuSection />
          <Footer />
        </div>
        
        <CartSidebar />
      </div>
    </CartProvider>
  );
};

export default Index;