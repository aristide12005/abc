import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";

const Collections = () => {
  const filterProducts = (category: string) => {
    if (category === "all") return products;
    return products.filter(product => product.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
                Our Collections
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our curated selection of fine jewelry, each piece crafted with exceptional attention to detail
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full md:w-auto grid grid-cols-3 md:flex md:gap-4 mb-12 bg-secondary/50 p-2 rounded-sm">
                <TabsTrigger value="all" className="font-body data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  All
                </TabsTrigger>
                <TabsTrigger value="rings" className="font-body data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Rings
                </TabsTrigger>
                <TabsTrigger value="necklaces" className="font-body data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Necklaces
                </TabsTrigger>
                <TabsTrigger value="earrings" className="font-body data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Earrings
                </TabsTrigger>
                <TabsTrigger value="bracelets" className="font-body data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Bracelets
                </TabsTrigger>
                <TabsTrigger value="brooches" className="font-body data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                  Brooches
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filterProducts("all").map((product, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="rings" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filterProducts("rings").map((product, index) => (
                    <div key={index} className="animate-fade-in">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="necklaces" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filterProducts("necklaces").map((product, index) => (
                    <div key={index} className="animate-fade-in">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="earrings" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filterProducts("earrings").map((product, index) => (
                    <div key={index} className="animate-fade-in">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bracelets" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filterProducts("bracelets").map((product, index) => (
                    <div key={index} className="animate-fade-in">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="brooches" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {filterProducts("brooches").map((product, index) => (
                    <div key={index} className="animate-fade-in">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
