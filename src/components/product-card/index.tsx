"use client";

import Image from "next/image";
import React, { useState } from "react";

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductCardProps = {
  product: ProductProps;
  originalPrice?: number;
};

const ProductCard = ({ product, originalPrice }: ProductCardProps) => {
  // Se não tiver preço original, assume um desconto de 30% para demonstração
  const calculatedOriginalPrice = originalPrice || product.price * 1.3;
  const discount = Math.round(
    ((calculatedOriginalPrice - product.price) / calculatedOriginalPrice) * 100
  );

  return (
    <div className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden hover:border-blue-400 transition-colors group h-full flex flex-col">
      <div className="relative h-48 bg-white flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-4"
        />
        <div className="absolute top-2 right-2 bg-blue-400 text-white px-2 py-1 rounded text-body-xs font-medium">
          -{discount}%
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-sans text-heading-xs text-white mb-2 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex-1 flex flex-col justify-between">
          <div></div> {/* Espaço flexível */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-inter text-body-sm text-gray-300 line-through">
                R$ {calculatedOriginalPrice.toFixed(2)}
              </span>
            </div>
            <span className="font-sans text-heading-sm text-blue-200">
              R$ {product.price.toFixed(2)}
            </span>
          </div>
        </div>

        <button className="w-full bg-blue-400 hover:bg-blue-300 text-white font-medium py-3 rounded-lg transition-colors font-inter text-action-sm mt-4">
          Comprar Agora
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
