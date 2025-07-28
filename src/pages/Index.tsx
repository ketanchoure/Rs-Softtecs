import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Placement from "@/components/Placement";
import HiringMarquee from "@/components/Hiring";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <Features />
      <Placement/>
      <HiringMarquee/>
      <Footer />
    </div>
  );
};

export default Index;
