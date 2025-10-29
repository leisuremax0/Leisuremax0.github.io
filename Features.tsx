import { Card } from "@/components/ui/card";
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import feature3 from "@/assets/feature-3.jpg";
import { Monitor, Download, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Multi-Device Streaming",
      description: "Watch seamlessly across all your devices. Start on your phone, continue on your TV.",
      image: feature1,
    },
    {
      icon: Download,
      title: "Offline Downloads",
      description: "Download your favorites and watch anywhere, even without internet connection.",
      image: feature2,
    },
    {
      icon: Users,
      title: "Family Profiles",
      description: "Create up to 6 personalized profiles with individual recommendations.",
      image: feature3,
    },
  ];

  return (
    <section id="features" className="py-32 px-4 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Features That Matter</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Built for Modern Viewers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience entertainment with cutting-edge features designed for your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
