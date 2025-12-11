import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 sm:py-32 md:py-40">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline. Automate. Elevate.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            SR Tech Solutions provides expert DevOps and Cloud Computing services to accelerate your innovation and optimize your infrastructure.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
