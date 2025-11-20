import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/showroom-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest materials and employ master craftsmen to create furniture that stands the test of time.",
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Our design team stays ahead of trends, creating pieces that are both contemporary and timeless.",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We're committed to providing exceptional service at every step.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our designers and craftsmen bring decades of combined experience to every project.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "50+", label: "Design Awards" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About Class Room
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where craftsmanship meets contemporary design. For over 15 years, we've been creating furniture that transforms houses into homes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2009, Class Room began with a simple vision: to create furniture that seamlessly blends modern aesthetics with timeless comfort. What started as a small workshop has grown into a renowned name in premium furniture design.
              </p>
              <p>
                Our journey has been guided by an unwavering commitment to quality and innovation. Every piece we create tells a story of meticulous craftsmanship, sustainable practices, and a deep understanding of what makes a space truly feel like home.
              </p>
              <p>
                Today, Class Room serves thousands of satisfied customers worldwide, each one enjoying furniture that's not just beautiful to look at, but built to last generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
            Why Choose Class Room?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-luxury-dark text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-serif font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To create furniture that doesn't just fill a space, but enhances the way you live. We believe that great design should be accessible, sustainable, and built to last a lifetime.
            </p>
            <blockquote className="text-2xl font-serif italic text-accent">
              "Furniture that elevates your home, designed for modern living."
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
