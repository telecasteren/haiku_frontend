import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Testimonial } from "@/lib/data/testimonials"; // will move to API later
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="border border-brand-200/70">
      <CardContent className="pt-1">
        <CardDescription className="space-y-4 text-base leading-relaxed text-foreground">
          <Quote className="h-4 w-4 text-brand-600" aria-hidden="true" />
          <p className="text-balance">“{testimonial.quote}”</p>
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto items-start border-t border-brand-100/90 pt-4">
        <div className="space-y-0.5">
          <p className="font-heading text-sm font-semibold text-brand-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
};
