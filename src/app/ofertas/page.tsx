import Layout from "@/components/layout";
import BannerSection from "@/sections/banner-section";
import CallToActionSection from "@/sections/call-to-action-section";
import ProductCardSection from "@/sections/products-cards-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VitrineX - Ofertas",
  description: "Aproveite essas ofertas especiais por tempo limitado",
};

const OffersPage = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return (
    <Layout>
      <BannerSection />
      <ProductCardSection products={products} productsPerPage={6} />
      <CallToActionSection />
    </Layout>
  );
};

export default OffersPage;
