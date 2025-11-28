import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductById, getRelatedProducts } from "@/data/products";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id, 3) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-4xl font-bold mb-4 text-foreground">Product Not Found</h1>
          <Button onClick={() => navigate("/collections")} className="font-body">
            Browse Collections
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${product.title} has been added to your shopping cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <button
              onClick={() => navigate(-1)}
              className="font-body text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              ← Back
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="animate-fade-in">
                <div className="sticky top-24">
                  <div className="aspect-square overflow-hidden rounded-sm bg-card shadow-luxury">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="space-y-6">
                  <div>
                    <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-2">
                      {product.category}
                    </p>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                      {product.title}
                    </h1>
                    <p className="font-display text-3xl font-bold text-accent">
                      {product.price}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <Card className="p-6 bg-secondary/30 border-border">
                    <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                      Specifications
                    </h3>
                    <div className="space-y-3 font-body text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material:</span>
                        <span className="text-foreground font-medium">{product.material}</span>
                      </div>
                      {product.gemstone && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Gemstone:</span>
                          <span className="text-foreground font-medium">{product.gemstone}</span>
                        </div>
                      )}
                      {product.weight && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="text-foreground font-medium">{product.weight}</span>
                        </div>
                      )}
                      {product.dimensions && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span className="text-foreground font-medium">{product.dimensions}</span>
                        </div>
                      )}
                    </div>
                  </Card>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      onClick={handleAddToCart}
                      className="w-full font-body font-medium bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:shadow-hover transition-all"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full font-body font-medium border-border hover:bg-secondary/50 transition-all"
                    >
                      Add to Wishlist
                    </Button>
                  </div>

                  <Card className="p-6 bg-card border-border">
                    <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                      Product Details
                    </h3>
                    <ul className="space-y-2 font-body text-sm text-muted-foreground">
                      {product.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 bg-secondary/30 border-border">
                    <div className="space-y-4 font-body text-sm">
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-foreground">Free Shipping</p>
                          <p className="text-muted-foreground">On all orders over $500</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-foreground">30-Day Returns</p>
                          <p className="text-muted-foreground">Hassle-free returns within 30 days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-xl">✓</span>
                        <div>
                          <p className="font-semibold text-foreground">Lifetime Warranty</p>
                          <p className="text-muted-foreground">Against manufacturing defects</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {relatedProducts.length > 0 && (
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="text-center mb-12">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    You May Also Like
                  </h2>
                  <p className="font-body text-lg text-muted-foreground">
                    Discover more from our collection
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard key={relatedProduct.id} {...relatedProduct} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
