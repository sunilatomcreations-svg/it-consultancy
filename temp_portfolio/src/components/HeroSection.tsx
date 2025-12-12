import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium">Trusted by 500+ Companies Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transform Your Business with{" "}
            <span className="gradient-text">Innovative IT</span> Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We deliver cutting-edge technology solutions that drive growth, enhance security, and streamline operations for enterprises of all sizes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-cta text-accent-foreground font-semibold px-8 rounded-full hover:opacity-90 transition-all hover:scale-105 group">
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8 rounded-full border-2 hover:bg-secondary">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "500+", label: "Clients Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Awards Won" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
