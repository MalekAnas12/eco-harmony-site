import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

interface ContentItem {
  title: string;
  description: string;
  content: ReactNode;
  tags?: string[];
  image?: string;
  links?: { label: string; url: string }[];
}

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: ContentItem[];
  className?: string;
}

const ContentSection = ({ id, title, subtitle, items, className = "" }: ContentSectionProps) => {
  return (
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
              className="nature-hover group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.image && (
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-light transition-smooth">
                    {item.title}
                  </CardTitle>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth group-hover:translate-x-1" />
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Content */}
                  <div className="text-sm text-foreground leading-relaxed">
                    {item.content}
                  </div>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="text-xs"
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
                          className="h-8 text-xs"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
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
    </section>
  );
};

export default ContentSection;