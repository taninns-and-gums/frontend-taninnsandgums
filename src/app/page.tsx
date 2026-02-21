// src/app/page.tsx
import { IndustriesSection } from "@/components/IndustriesSection";
import ProductCarousel from "@/components/ProductCarousel";
import { ProductionProcess } from "@/components/ProductionProcess";
import { QualityAndCertifications } from "@/components/QualityAndCertifications";
import { StatsSection } from "@/components/StatsSection";
import { TrustSection } from "@/components/TrustSection";
import { ValueProposition } from "@/components/ValueProposition";

export default function Home() {
  return (
    <>
      <ProductCarousel />
      <ValueProposition />
      {/* <TrustSection /> 
      <ProductionProcess />  */}
      <StatsSection />
      <IndustriesSection />
      <QualityAndCertifications />
    </>
  );
}
