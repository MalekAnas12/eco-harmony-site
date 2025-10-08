import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Globe, Heart, TreePine } from "lucide-react";
import heroImage from "@/assets/hero-environment.jpg";
import natureBg from "@/assets/nature-video-bg.jpg";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden group">
      {/* Animated Background with Parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${natureBg})` }}
        />
        {/* Fallback image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-down">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight hover-glow transition-all duration-500">
            Protect Our
            <span className="block text-white font-bold drop-shadow-lg animate-fade-in-up">
              Beautiful Planet
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
            Learn about environmental conservation, understand our ecosystems, and discover how you can make a difference for a sustainable future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-2">
            <Button 
              size="lg" 
              onClick={onExploreClick}
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-nature transition-all duration-300 ripple-effect hover-lift hover:shadow-glow transform hover:scale-105"
            >
              <Globe className="w-5 h-5 mr-2 animate-pulse-slow" />
              Explore Environmental Studies
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass text-white hover:bg-white/30 border-white/30 backdrop-blur-sm transition-all duration-300 hover-lift hover:border-white/50"
            >
              <Heart className="w-5 h-5 mr-2 animate-bounce-subtle" />
              Join the Movement
            </Button>
          </div>

          {/* Environmental Quote */}
          <Card className="glass border-white/20 p-6 max-w-2xl mx-auto animate-scale-in stagger-3 hover-shine hover:border-white/40 transition-all duration-500">
            <blockquote className="text-white/95 text-lg italic leading-relaxed">
              "The Earth does not belong to us; we belong to the Earth. All things are connected like the blood that unites one family."
            </blockquote>
            <cite className="block text-white/80 mt-3 text-sm">— Chief Seattle</cite>
          </Card>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 hidden lg:block animate-fade-in stagger-4">
          <div className="float-animation hover:scale-110 transition-transform duration-300 cursor-pointer">
            <TreePine className="w-12 h-12 text-white/30 hover:text-white/50 transition-colors" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block animate-fade-in stagger-5">
          <div className="float-animation hover:scale-110 transition-transform duration-300 cursor-pointer" style={{ animationDelay: "1s" }}>
            <Globe className="w-10 h-10 text-white/30 hover:text-white/50 transition-colors animate-rotate-slow" />
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