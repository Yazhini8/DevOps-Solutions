import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import data from "@/lib/placeholder-images.json";

export function Testimonials() {
  const { testimonials } = data;

  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            We're proud to have built strong relationships with our clients.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="h-full bg-background">
                    <CardContent className="flex flex-col items-center text-center p-6 h-full">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                        data-ai-hint={testimonial.imageHint}
                      />
                      <blockquote className="flex-grow text-lg italic text-foreground/80">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer className="mt-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
