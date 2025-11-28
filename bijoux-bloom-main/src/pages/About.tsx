import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Our Story
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                For over seven decades, ABC Bijouterie has been crafting exceptional jewelry that celebrates life's most precious moments
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <Card className="p-8 md:p-12 bg-card shadow-luxury border-border">
                  <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                    Heritage & Craftsmanship
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                    Since 1950, ABC Bijouterie has been synonymous with excellence in fine jewelry. Founded by master craftsman Alexandre Bernard Chen, our atelier has passed down generations of expertise, combining traditional techniques with contemporary design sensibilities.
                  </p>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Each piece that leaves our workshop is a testament to our commitment to quality, bearing the mark of skilled artisans who have dedicated their lives to the art of jewelry making.
                  </p>
                </Card>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Card className="p-8 md:p-12 bg-card shadow-luxury border-border">
                  <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                    Ethical Sourcing
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                    We believe that true luxury comes with responsibility. Every diamond and gemstone in our collection is ethically sourced and certified, ensuring that your jewelry represents not just beauty, but also integrity.
                  </p>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Our commitment to sustainable practices extends throughout our supply chain, from responsibly mined precious metals to eco-conscious packaging.
                  </p>
                </Card>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Card className="p-8 md:p-12 bg-card shadow-luxury border-border">
                  <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
                    Timeless Design
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                    Our design philosophy celebrates both heritage and innovation. While we draw inspiration from classical jewelry traditions, each collection reflects a modern aesthetic that transcends fleeting trends.
                  </p>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Whether you choose a piece from our signature collections or commission a bespoke creation, you're investing in jewelry that will be cherished for generations to come.
                  </p>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <Card className="p-6 text-center bg-secondary/50 border-border">
                  <div className="font-display text-4xl font-bold text-accent mb-2">75+</div>
                  <p className="font-body text-sm text-muted-foreground">Years of Excellence</p>
                </Card>
                <Card className="p-6 text-center bg-secondary/50 border-border">
                  <div className="font-display text-4xl font-bold text-accent mb-2">50k+</div>
                  <p className="font-body text-sm text-muted-foreground">Pieces Created</p>
                </Card>
                <Card className="p-6 text-center bg-secondary/50 border-border">
                  <div className="font-display text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="font-body text-sm text-muted-foreground">Ethically Sourced</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
