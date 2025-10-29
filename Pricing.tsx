import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$7.99",
      period: "/month",
      description: "Perfect for casual viewers",
      features: [
        "HD streaming quality",
        "Watch on 1 device",
        "Access to library",
        "Weekly downloads",
        "Ad-supported",
      ],
    },
    {
      name: "Pro",
      price: "$12.99",
      period: "/month",
      description: "Best value for families",
      popular: true,
      features: [
        "4K Ultra HD quality",
        "Watch on 4 devices",
        "Full library access",
        "Unlimited downloads",
        "Ad-free experience",
        "Priority support",
      ],
    },
    {
      name: "Ultimate",
      price: "$19.99",
      period: "/month",
      description: "Premium experience",
      features: [
        "8K streaming quality",
        "Watch on 6 devices",
        "Exclusive early access",
        "Unlimited everything",
        "VIP support",
        "Bonus content library",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-32 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Plans That Fit Your Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your entertainment journey. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 ${
                plan.popular 
                  ? 'border-primary shadow-2xl shadow-primary/30 scale-105 glow-box' 
                  : 'border-border'
              } hover:border-primary/50 transition-all duration-500 bg-card/80 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full shadow-lg">
                    <Star className="h-4 w-4 text-primary-foreground fill-current" />
                    <span className="text-primary-foreground text-sm font-bold">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground/90 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "gradient" : "outline"}
                className="w-full font-semibold"
                size="lg"
              >
                {plan.popular ? "Get Started" : "Choose Plan"}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 7-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;
