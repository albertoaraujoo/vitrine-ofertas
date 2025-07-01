import React from "react";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="relative h-64 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Banner de Ofertas"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
};

export default BannerSection;
