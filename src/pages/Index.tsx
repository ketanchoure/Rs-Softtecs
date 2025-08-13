import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Placement from "@/components/Placement";
import HiringMarquee from "@/components/Hiring";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <Features />
      <Placement/>
      <HiringMarquee/>
      <GoogleReviews/>
      <Footer />
    </div>
  );
};

export default Index;