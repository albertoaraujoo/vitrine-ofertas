import Layout from "@/components/layout";
import CardsSection from "@/sections/cards-section";
import HeroSection from "@/sections/hero-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CardsSection />
    </Layout>
  );
}
