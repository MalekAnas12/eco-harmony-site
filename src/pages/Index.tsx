import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExpandedContentSection from "@/components/ExpandedContentSection";
import InfographicsSection from "@/components/InfographicsSection";
import { environmentalSections } from "@/data/environmentalContent";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (section !== "home") {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleExploreClick = () => {
    setActiveSection("introduction");
    const element = document.getElementById("introduction");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      {/* Hero Section */}
      <HeroSection onExploreClick={handleExploreClick} />
      
      {/* Content Sections */}
      <ExpandedContentSection
        {...environmentalSections.introduction}
        className="bg-background"
      />
      
      <ExpandedContentSection
        {...environmentalSections.pollution}
        className="bg-muted/30"
      />
      
      <ExpandedContentSection
        {...environmentalSections.ecology}
        className="bg-background"
      />
      
      <ExpandedContentSection
        {...environmentalSections.biodiversity}
        className="bg-muted/30"
      />
      
      <ExpandedContentSection
        {...environmentalSections.resources}
        className="bg-background"
      />
      
      <ExpandedContentSection
        {...environmentalSections.humanImpact}
        className="bg-muted/30"
      />
      
      {/* Infographics Section */}
      <InfographicsSection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">EcoAware</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Dedicated to environmental education and sustainable living. 
                Together, we can protect our planet for future generations.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Learn</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Environmental Studies</li>
                <li>Pollution Prevention</li>
                <li>Conservation Methods</li>
                <li>Sustainable Living</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Research Papers</li>
                <li>Data & Statistics</li>
                <li>Action Guides</li>
                <li>News & Updates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Join Our Community</li>
                <li>Volunteer Programs</li>
                <li>Educational Workshops</li>
                <li>Partner Organizations</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2024 EcoAware. Built with passion for our planet's future.
            </p>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
