import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ExternalLink } from "lucide-react";
import DetailedContentDialog from "./DetailedContentDialog";

interface ContentItem {
  title: string;
  description: string;
  content: string;
  tags?: string[];
  image?: string;
  links?: { label: string; url: string }[];
}

interface ExpandedContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: ContentItem[];
  className?: string;
}

const ExpandedContentSection = ({ id, title, subtitle, items, className = "" }: ExpandedContentSectionProps) => {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = (item: ContentItem) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  return (
    <>
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card 
              key={index} 
              className="hover-lift hover-shine hover-glow group cursor-pointer animate-scale-in h-full transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(item)}
            >
              {item.image && (
                <div className="relative overflow-hidden rounded-t-lg h-48 group/image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-light transition-all duration-300 group-hover:translate-x-1">
                    {item.title}
                  </CardTitle>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-2" />
                </div>
                <CardDescription className="text-base leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Content */}
                  <div className="text-sm text-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground/90">
                    {item.content}
                  </div>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="text-xs hover-lift transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  {item.links && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs hover-lift transition-all duration-300"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1 animate-pulse-slow" />
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <DetailedContentDialog 
        item={selectedItem}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
    </>
  );
};

export default ExpandedContentSection;