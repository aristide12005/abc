import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
              ABC
            </h1>
          </NavLink>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink 
              to="/collections" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Collections
            </NavLink>
            <NavLink 
              to="/about" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
