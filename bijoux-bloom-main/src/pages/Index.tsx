import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
