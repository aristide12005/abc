import { Button } from "./ui/button";
import heroImage from "@/assets/jewelry-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Luxury jewelry collection" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-2xl animate-fade-in">
          <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            Timeless
            <br />
            <span className="text-accent">Elegance</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Discover our curated collection of exquisite fine jewelry, where each piece tells a story of craftsmanship and luxury.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="font-body font-medium bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-luxury hover:shadow-hover transition-all"
            >
              Explore Collection
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-body font-medium border-border hover:bg-secondary/50 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
