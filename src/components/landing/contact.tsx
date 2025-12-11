import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Let's Build Together</h2>
            <p className="text-lg text-foreground/80">
              Have a project in mind or just want to learn more about our services? We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">DevOps Solutions</h3>
              <p className="text-muted-foreground">123 Cloud Lane, Innovation City, 12345</p>
              <p className="text-muted-foreground">contact@devops.solutions</p>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" rows={5} />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
