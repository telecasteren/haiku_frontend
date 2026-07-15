import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Testimonial } from "@/lib/mockups/testimonials";  // will move to API later

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card>
      <CardContent>
        <CardDescription>
          <p>{testimonial.quote}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <p>
          - {testimonial.name}, {testimonial.title}
        </p>
      </CardFooter>
    </Card>
  );
};
