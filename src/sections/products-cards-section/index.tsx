import PaginatedProducts from "@/components/paginated-products";
import { ProductProps } from "@/components/product-card";

type ProductsList = {
  products: ProductProps[];
  productsPerPage?: number;
};

const ProductCardSection = ({
  products,
  productsPerPage = 6,
}: ProductsList) => {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ofertas da Semana
          </h2>
          <p className="font-inter text-body-md text-gray-200">
            Aproveite essas ofertas especiais por tempo limitado
          </p>
          <p className="font-inter text-body-sm text-gray-300 mt-2">
            {products.length} produtos disponíveis
          </p>
        </div>

        <PaginatedProducts
          products={products}
          productsPerPage={productsPerPage}
        />
      </div>
    </section>
  );
};

export default ProductCardSection;
