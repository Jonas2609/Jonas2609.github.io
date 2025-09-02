import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Built with Care",
      description: "Every feature is designed with Belgian pharmacists in mind, solving real problems with thoughtful solutions."
    },
    {
      icon: Target,
      title: "Data-Driven Decisions",
      description: "We believe in empowering pharmacists with accurate, actionable insights from their own data."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Shelfie grows with input from the pharmacy community, ensuring it meets your actual needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why We're Building <span className="text-primary">Shelfie</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping pharmacists work smarter with their data, 
            making demand forecasting easy and actionable.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Pharmacists in Belgium work with incredible dedication, but managing inventory 
                often feels like guesswork. We saw talented professionals spending hours trying 
                to predict what products they'd need, when they could be focusing on patient care.
              </p>
              <p>
                That's why we created Shelfie. We believe that every pharmacy has valuable data 
                that can unlock smarter decisions. Our mission is to transform that data into 
                clear, actionable forecasts that help you serve your community better.
              </p>
              <p>
                We're not just building software – we're building a tool that respects your 
                expertise and amplifies your insights.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Card className="p-8 shadow-card bg-gradient-primary text-white max-w-md">
              <CardContent className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-lg opacity-90">
                  To help Belgian pharmacists make smarter inventory decisions through 
                  powerful, easy-to-use demand forecasting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center shadow-card hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Who We Are</h2>
          <Card className="max-w-3xl mx-auto shadow-card">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're a small, dedicated team of developers and data scientists who believe 
                in the power of technology to solve real-world problems. We work closely with 
                pharmacists to understand their challenges and build solutions that truly matter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholder for team members */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">Team photos coming soon</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">Team bios coming soon</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">More info coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;