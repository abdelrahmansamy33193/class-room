import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import diningImage from "@/assets/furniture-display-1.jpg";
import bedroomImage from "@/assets/furniture-display-2.jpg";
import officeImage from "@/assets/furniture-display-3.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Modern Collection",
      description: "Contemporary pieces that define modern living. Clean lines, functional design, and timeless elegance.",
      image: diningImage,
      items: "24 Items",
    },
    {
      title: "Classic Collection",
      description: "Timeless furniture with traditional craftsmanship. Heritage designs that never go out of style.",
      image: bedroomImage,
      items: "18 Items",
    },
    {
      title: "Luxury Seating",
      description: "Premium sofas and chairs designed for ultimate comfort and sophisticated aesthetics.",
      image: officeImage,
      items: "32 Items",
    },
    {
      title: "Living Room Sets",
      description: "Complete living room solutions that bring harmony and style to your space.",
      image: diningImage,
      items: "16 Items",
    },
    {
      title: "Office Furniture",
      description: "Professional workspace essentials that combine productivity with premium design.",
      image: officeImage,
      items: "28 Items",
    },
    {
      title: "Bedroom Essentials",
      description: "Create your perfect sanctuary with our curated bedroom furniture collection.",
      image: bedroomImage,
      items: "22 Items",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Collections
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore our carefully curated collections, each designed to bring elegance and functionality to every space in your home
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {collection.items}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {collection.description}
                  </p>
                  <Button className="w-full group/btn bg-primary hover:bg-primary/90">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-luxury-dark text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Our design team can create custom pieces tailored to your unique vision
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
