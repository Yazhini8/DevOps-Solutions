import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import data from "@/lib/placeholder-images.json";

export function Blog() {
  const { articles } = data;

  return (
    <section id="blog" className="py-12 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Insights & Articles</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Stay updated with the latest in DevOps and cloud technology.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={article.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{article.date} &bull; by {article.author}</p>
                <CardTitle className="font-headline text-xl mb-2 flex-grow">{article.title}</CardTitle>
                <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                <Button variant="link" className="p-0 h-auto justify-start">Read More &rarr;</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
