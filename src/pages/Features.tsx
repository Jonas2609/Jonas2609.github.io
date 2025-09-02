import { CheckCircle, Clock, TrendingUp, Database, BarChart, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const currentFeatures = [
    {
      icon: Database,
      title: "Seamless Data Import",
      description: "Connect your pharmacy software (Farmad, Officinall, Curalia) to import your data effortlessly.",
      status: "available"
    },
    {
      icon: TrendingUp,
      title: "Product Demand Forecast",
      description: "Get accurate demand predictions for individual products based on your historical data.",
      status: "available"
    }
  ];

  const upcomingFeatures = [
    {
      icon: BarChart,
      title: "Bulk Forecasting",
      description: "Forecast demand for your top X products or entire inventory at once.",
      status: "coming-soon"
    },
    {
      icon: FileText,
      title: "Export to Order Forms",
      description: "Automatically generate order forms based on your demand forecasts.",
      status: "planned"
    }
  ];

  const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
    <Card className="relative overflow-hidden shadow-card hover:shadow-glow transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              {feature.status === "available" && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Available
                </Badge>
              )}
              {feature.status === "coming-soon" && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Clock className="h-3 w-3 mr-1" />
                  Coming Soon
                </Badge>
              )}
              {feature.status === "planned" && (
                <Badge variant="outline">
                  Planned
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for <span className="text-primary">Smart Forecasting</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shelfie transforms your pharmacy data into actionable insights, helping you make smarter inventory decisions.
          </p>
        </div>

        {/* Current Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Available Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index + 2} />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            How Shelfie Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Connect Your Data</h3>
              <p className="text-muted-foreground">
                Link your pharmacy software to securely import your sales and inventory data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our algorithms analyze patterns in your data to predict future demand.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Smart Forecasts</h3>
              <p className="text-muted-foreground">
                Get accurate predictions to optimize your inventory and reduce stockouts.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;