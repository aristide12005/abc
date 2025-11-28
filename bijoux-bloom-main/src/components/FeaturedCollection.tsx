import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedCollection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Collection
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that showcase the finest in jewelry craftsmanship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
