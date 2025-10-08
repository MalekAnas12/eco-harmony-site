import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "introduction", label: "Environmental Studies" },
    { id: "pollution", label: "Pollution & Impacts" },
    { id: "ecology", label: "Ecology & Ecosystems" },
    { id: "biodiversity", label: "Biodiversity" },
    { id: "resources", label: "Natural Resources" },
    { id: "human-impact", label: "Human & Environment" },
    { id: "infographics", label: "Infographics" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark backdrop-blur-md border-b border-border shadow-nature transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-in-left group cursor-pointer">
            <div className="w-8 h-8 rounded-full gradient-forest flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
              <Leaf className="w-5 h-5 text-primary-foreground animate-pulse-slow" />
            </div>
            <span className="font-bold text-xl text-primary transition-all duration-300 group-hover:text-primary-light">EcoAware</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 animate-fade-in">
            {navItems.map((item, index) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(item.id)}
                className="transition-all duration-300 hover:scale-105 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up glass">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`justify-start transition-all duration-300 hover-lift animate-fade-in-up stagger-${Math.min(index + 1, 6)}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;