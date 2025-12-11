import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import data from "@/lib/placeholder-images.json";

export function Projects() {
  const { projects } = data;

  return (
    <section id="projects" className="py-12 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            A glimpse into the successful solutions we've delivered for our clients.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
