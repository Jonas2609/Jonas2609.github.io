import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BarChart3, Clock, TrendingUp, Zap, Shield, Users } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Index = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate demand forecasting and reduce manual inventory planning by hours each week."
    },
    {
      icon: TrendingUp,
      title: "Avoid Stockouts",
      description: "Get accurate predictions to ensure you never run out of essential medications."
    },
    {
      icon: BarChart3,
      title: "Smarter Planning",
      description: "Make data-driven decisions based on your pharmacy's actual sales patterns."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your pharmacy data stays secure with enterprise-grade encryption."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get forecasts in seconds, not hours of manual calculation."
    },
    {
      icon: Users,
      title: "Built for Pharmacists",
      description: "Designed specifically for Belgian pharmacy workflows and software."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Shelfie
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              Your pharmacy's demand forecast, at a glance.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Import your data easily, get forecasts for products, and soon forecast for all or top X products. 
              Make smarter inventory decisions with AI-powered insights from your own pharmacy data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/alpha-access">
                <Button variant="hero-outline" size="lg" className="min-w-[200px]">
                  Request Alpha Access
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="hero-outline" size="lg" className="min-w-[200px]">
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Your Data Come to Life
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of what Shelfie's dashboard could look like for your pharmacy.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-glow animate-slide-up" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-0">
                <img 
                  src={dashboardMockup} 
                  alt="Shelfie dashboard showing demand forecasts and analytics" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Shelfie?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform the way you manage pharmacy inventory with intelligent forecasting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                className="text-center shadow-card hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features, Simple Interface
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make smarter inventory decisions, built specifically for Belgian pharmacies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="shadow-card hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/features">
              <Button variant="default" size="lg">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our alpha program and be among the first pharmacists to experience 
            the power of AI-driven demand forecasting.
          </p>
          <Link to="/alpha-access">
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-3">
              Request Alpha Access
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;