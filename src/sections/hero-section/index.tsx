import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center max-w-4xl mx-auto pt-10 pb-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Ofertas imperdíveis, toda semana
      </h1>
      <p className="text-gray-300 text-lg mb-8">
        Encontre os melhores produtos com os preços que cabem no seu bolso.
        Simples, rápido e confiável.
      </p>
      <Link
        href="/ofertas"
        className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg"
      >
        Ver Ofertas
      </Link>
    </section>
  );
};

export default HeroSection;
