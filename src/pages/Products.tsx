import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import productSofa from "@/assets/product-sofa.jpg";
import productTable from "@/assets/product-table.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sofas", "Tables", "Chairs", "Beds", "Storage"];

  const products = [
    {
      id: 1,
      name: "Premium Velvet Sofa",
      category: "Sofas",
      price: "$2,499",
      rating: 5,
      image: productSofa,
      description: "Luxurious cream velvet upholstery with gold legs",
    },
    {
      id: 2,
      name: "Classic Coffee Table",
      category: "Tables",
      price: "$899",
      rating: 5,
      image: productTable,
      description: "Handcrafted dark wood with elegant design",
    },
    {
      id: 3,
      name: "Modern Sectional",
      category: "Sofas",
      price: "$3,299",
      rating: 5,
      image: productSofa,
      description: "Spacious L-shaped design for modern living",
    },
    {
      id: 4,
      name: "Dining Table Set",
      category: "Tables",
      price: "$1,899",
      rating: 5,
      image: productTable,
      description: "Premium wood dining table with 6 chairs",
    },
    {
      id: 5,
      name: "Luxury Armchair",
      category: "Chairs",
      price: "$799",
      rating: 5,
      image: productSofa,
      description: "Ergonomic design with premium fabric",
    },
    {
      id: 6,
      name: "Console Table",
      category: "Tables",
      price: "$649",
      rating: 5,
      image: productTable,
      description: "Elegant entryway piece with storage",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover furniture that combines exceptional craftsmanship with timeless design
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({product.rating}.0)
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-accent">
                        {product.price}
                      </p>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
