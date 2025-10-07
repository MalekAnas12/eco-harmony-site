import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ContentItem {
  title: string;
  description: string;
  content: string;
  tags?: string[];
  image?: string;
  links?: { label: string; url: string }[];
}

interface DetailedContentDialogProps {
  item: ContentItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DetailedContentDialog = ({ item, open, onOpenChange }: DetailedContentDialogProps) => {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          {/* Header Image */}
          {item.image && (
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                <p className="text-white/90 text-lg">{item.description}</p>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {!item.image && (
              <DialogHeader className="mb-6">
                <DialogTitle className="text-3xl font-bold text-primary">
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {item.description}
                </DialogDescription>
              </DialogHeader>
            )}

            {/* Detailed Content */}
            <div className="prose prose-lg max-w-none mb-6">
              <div className="text-foreground leading-relaxed whitespace-pre-line">
                {item.content}
              </div>
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Topics Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {item.links && item.links.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">Learn More</h3>
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="default"
                      size="default"
                      onClick={() => window.open(link.url, '_blank')}
                      className="gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedContentDialog;
