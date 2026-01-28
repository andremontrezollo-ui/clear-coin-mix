import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TransparencySection } from "@/components/home/TransparencySection";
import { TrustIndicators } from "@/components/home/TrustIndicators";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TransparencySection />
      <TrustIndicators />
    </Layout>
  );
};

export default Index;
