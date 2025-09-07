import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Globe, Heart, TreePine } from "lucide-react";
import heroImage from "@/assets/hero-environment.jpg";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protect Our
            <span className="block gradient-forest bg-clip-text text-transparent">
              Beautiful Planet
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn about environmental conservation, understand our ecosystems, and discover how you can make a difference for a sustainable future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={onExploreClick}
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-nature transition-bounce ripple-effect"
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore Environmental Studies
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-smooth"
            >
              <Heart className="w-5 h-5 mr-2" />
              Join the Movement
            </Button>
          </div>

          {/* Environmental Quote */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 max-w-2xl mx-auto">
            <blockquote className="text-white/95 text-lg italic leading-relaxed">
              "The Earth does not belong to us; we belong to the Earth. All things are connected like the blood that unites one family."
            </blockquote>
            <cite className="block text-white/80 mt-3 text-sm">— Chief Seattle</cite>
          </Card>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <div className="float-animation">
            <TreePine className="w-12 h-12 text-white/30" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block">
          <div className="float-animation" style={{ animationDelay: "1s" }}>
            <Globe className="w-10 h-10 text-white/30" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;