"use client";

import { useState, useEffect } from "react";

interface ProductFiltersProps {
  categories: string[];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  selectedCategory: string;
  priceRange: { min: number; max: number };
}

const ProductFilters = ({
  categories,
  onCategoryChange,
  onPriceRangeChange,
  selectedCategory,
  priceRange,
}: ProductFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // Inicializar SEMPRE com valores padrão
  const [tempPriceRange, setTempPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  // Sincronizar com priceRange quando ele mudar, COM VERIFICAÇÃO
  useEffect(() => {
    if (
      priceRange &&
      typeof priceRange.min === "number" &&
      typeof priceRange.max === "number"
    ) {
      setTempPriceRange({
        min: priceRange.min,
        max: priceRange.max,
      });
    }
  }, [priceRange]);

  const handlePriceChange = () => {
    // Verificar se tempPriceRange existe e tem as propriedades
    if (
      tempPriceRange &&
      typeof tempPriceRange.min === "number" &&
      typeof tempPriceRange.max === "number"
    ) {
      onPriceRangeChange(tempPriceRange.min, tempPriceRange.max);
    }
  };

  const clearFilters = () => {
    onCategoryChange("all");
    const resetRange = { min: 0, max: 1000 };
    setTempPriceRange(resetRange);
    onPriceRangeChange(0, 1000);
  };

  const handleMinChange = (value: string) => {
    const numValue = value === "" ? 0 : Number(value);
    setTempPriceRange(prev => ({
      min: numValue,
      max: prev?.max || 1000,
    }));
  };

  const handleMaxChange = (value: string) => {
    const numValue = value === "" ? 1000 : Number(value);
    setTempPriceRange(prev => ({
      min: prev?.min || 0,
      max: numValue,
    }));
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Toggle para Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-between w-full text-white font-medium"
        >
          <span>Filtros</span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Filtros */}
        <div
          className={`${isOpen ? "block" : "hidden"} md:block md:flex md:items-center md:gap-6 space-y-4 md:space-y-0`}
        >
          {/* Filtro por Categoria */}
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="text-white font-medium text-sm">Categoria:</label>
            <select
              value={selectedCategory}
              onChange={e => onCategoryChange(e.target.value)}
              className="bg-gray-600 text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">Todas</option>
              {categories?.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por Preço */}
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="text-white font-medium text-sm">Preço:</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={tempPriceRange?.min || 0}
                onChange={e => handleMinChange(e.target.value)}
                className="bg-gray-600 text-white rounded px-2 py-1 w-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-gray-300">até</span>
              <input
                type="number"
                placeholder="Max"
                value={tempPriceRange?.max || 1000}
                onChange={e => handleMaxChange(e.target.value)}
                className="bg-gray-600 text-white rounded px-2 py-1 w-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handlePriceChange}
                className="bg-blue-400 hover:bg-blue-300 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                OK
              </button>
            </div>
          </div>

          {/* Botão Limpar */}
          <button
            onClick={clearFilters}
            className="text-gray-300 hover:text-white text-sm underline transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
