import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: "123 Design Street, Furniture District, City 12345",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@classroom.com",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: "Mon-Sat: 9:00 AM - 7:00 PM",
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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions about our furniture? We'd love to hear from you. Visit our showroom or reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your furniture needs..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-6">Find Us</h2>
              <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold">Class Room Showroom</h3>
                <p className="text-muted-foreground">
                  Visit our flagship showroom to experience our furniture collections firsthand. Our design consultants are available to help you find the perfect pieces for your space.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>123 Design Street, Furniture District, City 12345</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer delivery?</h3>
              <p className="text-muted-foreground">
                Yes! We offer white-glove delivery service to your home, including assembly and placement.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">What is your return policy?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day return policy for all purchases. Items must be in original condition.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Do you offer custom designs?</h3>
              <p className="text-muted-foreground">
                Absolutely! Our design team can create custom pieces tailored to your specifications.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
