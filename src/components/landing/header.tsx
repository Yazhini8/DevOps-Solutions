import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90">
            <a href="#expert-qa">Ask an Expert</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <a href="/" className="mr-6 flex items-center space-x-2">
                    <Logo />
                  </a>
                </div>
                <nav className="flex flex-col space-y-4 text-lg">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <Button asChild className="mt-auto bg-accent hover:bg-accent/90">
                  <a href="#expert-qa">Ask an Expert</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
