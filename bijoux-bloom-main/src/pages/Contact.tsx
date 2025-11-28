import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Visit our boutique or reach out to us directly
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <Card className="p-8 md:p-10 bg-card shadow-luxury border-border">
                  <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                        Full Name
                      </Label>
                      <Input 
                        id="name"
                        placeholder="Your name"
                        className="font-body bg-background border-border focus:ring-accent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                        Email Address
                      </Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="font-body bg-background border-border focus:ring-accent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body text-sm font-medium text-foreground">
                        Phone Number
                      </Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="font-body bg-background border-border focus:ring-accent"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body text-sm font-medium text-foreground">
                        Message
                      </Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="font-body bg-background border-border focus:ring-accent resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full font-body font-medium bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:shadow-hover transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Card className="p-8 bg-card shadow-luxury border-border">
                  <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                    Visit Our Boutique
                  </h3>
                  <div className="space-y-3 font-body text-muted-foreground">
                    <p className="leading-relaxed">
                      <span className="font-semibold text-foreground">Address:</span><br />
                      123 Luxury Avenue<br />
                      Fifth Floor, Suite 500<br />
                      New York, NY 10001
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Hours:</span><br />
                      Monday - Friday: 10:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-card shadow-luxury border-border">
                  <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                    Contact Information
                  </h3>
                  <div className="space-y-3 font-body text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Phone:</span><br />
                      <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Email:</span><br />
                      <a href="mailto:contact@abcbijouterie.com" className="hover:text-accent transition-colors">
                        contact@abcbijouterie.com
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Customer Service:</span><br />
                      <a href="mailto:service@abcbijouterie.com" className="hover:text-accent transition-colors">
                        service@abcbijouterie.com
                      </a>
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-card shadow-luxury border-border">
                  <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                    Book an Appointment
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    Schedule a private consultation with our jewelry specialists to explore our collections or discuss custom designs.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full font-body font-medium border-border hover:bg-secondary/50 transition-all"
                  >
                    Schedule Consultation
                  </Button>
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

export default Contact;
