import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

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

        {/* Interactive Accordion Content */}
        <Accordion type="multiple" className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg bg-card shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-4 w-full">
                  {item.image && (
                    <div className="relative overflow-hidden rounded-lg w-16 h-16 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  {/* Detailed Content */}
                  <div className="text-foreground leading-relaxed bg-muted/30 p-4 rounded-lg">
                    {item.content}
                  </div>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-muted-foreground mr-2">Topics:</span>
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
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-muted-foreground">Learn More:</span>
                      <div className="flex flex-wrap gap-2">
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
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExpandedContentSection;