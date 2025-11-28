import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard = ({ id, image, title, price, description }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-sm bg-card shadow-luxury hover:shadow-hover transition-all duration-500 mb-4">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <p className="font-body text-lg font-semibold text-accent">
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
