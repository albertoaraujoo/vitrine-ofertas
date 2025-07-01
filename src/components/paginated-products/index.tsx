"use client";

import { useState, useMemo } from "react";
import ProductCard, { ProductProps } from "@/components/product-card";
import ProductFilters from "@/components/product-filters";

type PaginatedProductsProps = {
  products: ProductProps[];
  productsPerPage?: number;
};

const PaginatedProducts = ({
  products,
  productsPerPage = 6,
}: PaginatedProductsProps) => {
  const [visibleCount, setVisibleCount] = useState(productsPerPage);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Obter categorias únicas
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map(product => product.category))
    );
    return uniqueCategories;
  }, [products]);

  // Filtrar produtos
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      const priceMatch =
        product.price >= priceRange.min && product.price <= priceRange.max;
      return categoryMatch && priceMatch;
    });
  }, [products, selectedCategory, priceRange]);

  // Produtos visíveis após filtros e paginação
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = filteredProducts.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + productsPerPage);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(productsPerPage); // Reset para primeira página
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    setVisibleCount(productsPerPage); // Reset para primeira página
  };

  return (
    <>
      <ProductFilters
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onPriceRangeChange={handlePriceRangeChange}
        selectedCategory={selectedCategory}
        priceRange={priceRange}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-white text-lg font-medium mb-2">
            Nenhum produto encontrado
          </h3>
          <p className="text-gray-300">
            Tente ajustar os filtros para encontrar produtos.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-gray-300 text-sm">
              Mostrando {visibleProducts.length} de {filteredProducts.length}{" "}
              produtos
              {selectedCategory !== "all" && (
                <span className="ml-2 px-2 py-1 bg-blue-400 text-white text-xs rounded">
                  {selectedCategory}
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {visibleProducts.map((product: ProductProps) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {hasMoreProducts && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center px-6 py-3 bg-blue-400 hover:bg-blue-300 text-white font-medium rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Ver Mais{" "}
                {Math.min(
                  productsPerPage,
                  filteredProducts.length - visibleCount
                )}{" "}
                Produtos
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PaginatedProducts;
