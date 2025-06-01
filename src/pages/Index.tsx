import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevelopmentStatus from "@/components/DevelopmentStatus";
import FAQ from "@/components/FAQ";
import SubscribeSection from "@/components/SubscribeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DevelopmentStatus />
      <FAQ />
      <SubscribeSection />
    </div>
  );
};

export default Index;
