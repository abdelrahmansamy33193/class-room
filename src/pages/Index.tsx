import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-living-room.jpg";
import diningImage from "@/assets/dining-collection.jpg";
import bedroomImage from "@/assets/bedroom-collection.jpg";
import officeImage from "@/assets/office-collection.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productTable from "@/assets/product-table.jpg";

const Index = () => {
  const collections = [
    {
      title: "Modern Collection",
      image: diningImage,
      description: "Contemporary designs for modern living",
    },
    {
      title: "Luxury Bedroom",
      image: bedroomImage,
      description: "Elegant comfort for peaceful nights",
    },
    {
      title: "Office Furniture",
      image: officeImage,
      description: "Professional workspace solutions",
    },
  ];

  const featuredProducts = [
    {
      name: "Premium Sofa",
      price: "$2,499",
      rating: 5,
      image: productSofa,
    },
    {
      name: "Classic Coffee Table",
      price: "$899",
      rating: 5,
      image: productTable,
    },
  ];

  const qualities = [
    {
      title: "Premium Quality",
      description: "Handcrafted with finest materials",
    },
    {
      title: "Modern Design",
      description: "Contemporary aesthetics that last",
    },
    {
      title: "Lasting Comfort",
      description: "Built for everyday luxury",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/70 to-luxury-dark/40" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6">
            Where Modern Luxury
            <br />
            Meets Comfort
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Designed for modern living. Crafted with precision.
          </p>
          <Link to="/collections">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of premium furniture designed to elevate your space
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/80">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most loved pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-accent">{product.price}</p>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Qualities */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {qualities.map((quality, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-luxury-dark text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Furniture That Elevates Your Home
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, style, and craftsmanship
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
