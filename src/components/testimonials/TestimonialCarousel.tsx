import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialCarousel = () => {
  return (
    <>
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mt-6 mx-auto">
        <CarouselContent className="items-stretch">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 md:-left-4 border-brand-300 bg-background/95 text-brand-900 shadow-md hover:bg-brand-50" />
        <CarouselNext className="right-2 md:-right-4 border-brand-300 bg-background/95 text-brand-900 shadow-md hover:bg-brand-50" />
      </Carousel>
    </>
  );
};
