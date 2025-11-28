const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">ABC</h3>
            <p className="font-body text-sm text-primary-foreground/80">
              Crafting timeless elegance since 1950
            </p>
          </div>
          
          <div>
            <h4 className="font-body font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Rings</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Necklaces</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Earrings</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Bracelets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-body font-semibold mb-4">Company</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Story</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-body font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="font-body text-sm text-center text-primary-foreground/60">
            © 2024 ABC Bijouterie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
