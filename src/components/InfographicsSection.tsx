import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, TrendingUp, Zap, Droplets, Leaf, Globe, Users, ExternalLink } from "lucide-react";

const InfographicsSection = () => {
  const infographics = [
    {
      title: "Global CO₂ Emissions by Sector",
      description: "Real-time data on carbon dioxide emissions worldwide",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      stats: [
        { label: "Energy Production", value: "25%", color: "bg-red-500" },
        { label: "Agriculture & Land Use", value: "24%", color: "bg-green-500" },
        { label: "Industry", value: "21%", color: "bg-blue-500" },
        { label: "Transportation", value: "14%", color: "bg-yellow-500" },
        { label: "Buildings", value: "6%", color: "bg-purple-500" },
        { label: "Other Energy Uses", value: "10%", color: "bg-orange-500" },
      ],
      tags: ["Climate Change", "Emissions", "Real-time"],
      source: "https://www.iea.org/data-and-statistics",
      sourceName: "IEA - Global CO₂ Data",
    },
    {
      title: "Renewable Energy Growth",
      description: "Live tracking of clean energy expansion globally",
      icon: <Zap className="w-8 h-8 text-secondary" />,
      stats: [
        { label: "Solar Capacity Growth (2020-2023)", value: "+85%", color: "bg-yellow-400" },
        { label: "Wind Capacity Growth (2020-2023)", value: "+40%", color: "bg-blue-400" },
        { label: "Hydroelectric Share", value: "16%", color: "bg-cyan-400" },
        { label: "Total Renewable Share", value: "30%", color: "bg-green-400" },
      ],
      tags: ["Clean Energy", "Growth", "Live Data"],
      source: "https://www.irena.org/Data",
      sourceName: "IRENA - Renewable Energy Statistics",
    },
    {
      title: "Water Scarcity Crisis",
      description: "Current global water availability and consumption",
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      stats: [
        { label: "People Without Clean Water", value: "2.2B", color: "bg-red-400" },
        { label: "Agriculture Water Use", value: "70%", color: "bg-green-400" },
        { label: "Industrial Water Use", value: "20%", color: "bg-gray-400" },
        { label: "Domestic Water Use", value: "10%", color: "bg-blue-400" },
      ],
      tags: ["Water Crisis", "Scarcity", "Real-time"],
      source: "https://www.unwater.org/water-facts",
      sourceName: "UN Water - Global Statistics",
    },
    {
      title: "Deforestation Impact",
      description: "Real-time forest loss monitoring and consequences",
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      stats: [
        { label: "Annual Forest Loss", value: "10M ha", color: "bg-red-500" },
        { label: "Amazon Deforestation", value: "17%", color: "bg-orange-500" },
        { label: "Species at Risk", value: "1M+", color: "bg-yellow-500" },
        { label: "Carbon Storage Lost", value: "15%", color: "bg-gray-500" },
      ],
      tags: ["Deforestation", "Biodiversity", "Live Tracking"],
      source: "https://www.globalforestwatch.org/",
      sourceName: "Global Forest Watch",
    },
    {
      title: "Urban Population Growth",
      description: "Live data on city expansion and environmental impact",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      stats: [
        { label: "Current Urban Population", value: "56%", color: "bg-purple-400" },
        { label: "Projected 2050 Urban", value: "68%", color: "bg-indigo-400" },
        { label: "Megacities (10M+)", value: "33", color: "bg-pink-400" },
        { label: "Urban Energy Use", value: "78%", color: "bg-red-400" },
      ],
      tags: ["Urbanization", "Population", "Real-time"],
      source: "https://population.un.org/wup/",
      sourceName: "UN - World Urbanization Prospects",
    },
    {
      title: "Plastic Pollution Facts",
      description: "Current data on plastic waste and ocean pollution",
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      stats: [
        { label: "Annual Plastic Production", value: "380M tons", color: "bg-red-500" },
        { label: "Ocean Plastic Waste", value: "8M tons/year", color: "bg-blue-500" },
        { label: "Recycling Rate", value: "9%", color: "bg-green-500" },
        { label: "Microplastics in Water", value: "83%", color: "bg-orange-500" },
      ],
      tags: ["Plastic", "Ocean", "Live Data"],
      source: "https://www.unep.org/interactives/beat-plastic-pollution/",
      sourceName: "UNEP - Plastic Pollution Data",
    },
  ];

  return (
    <section id="infographics" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Environmental Infographics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visual data and statistics about our planet's environmental challenges and progress toward sustainability.
          </p>
        </div>

        {/* Infographics Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {infographics.map((infographic, index) => (
            <Card 
              key={index} 
              className="nature-hover group animate-scale-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {infographic.icon}
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-light transition-smooth">
                  {infographic.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {infographic.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Statistics */}
                  <div className="space-y-3">
                    {infographic.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                          <span className="text-sm text-foreground truncate">{stat.label}</span>
                        </div>
                        <div className="text-sm font-bold text-primary ml-2">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {infographic.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* View Real Data Button */}
                  <div className="pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full gap-2"
                      onClick={() => window.open(infographic.source, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Real-Time Data
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Source: {infographic.sourceName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-pulse">
          <Card className="max-w-2xl mx-auto bg-gradient-nature shadow-xl border-4 border-red-500/50 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-red-600 drop-shadow-lg">Take Action Today</h3>
              <p className="text-lg mb-6 text-gray-900 font-medium">
                These statistics show the urgency of environmental action. Every individual choice matters in creating a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More
                </Badge>
                <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Involved
                </Badge>
                <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Share Knowledge
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;