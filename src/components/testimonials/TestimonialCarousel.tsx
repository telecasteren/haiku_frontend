import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/lib/mockups/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const TestimonialCarousel = () => {
  return (
    <div className="flex gap-4">
      <Carousel>
        <CarouselContent>

          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
