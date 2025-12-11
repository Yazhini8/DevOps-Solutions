import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Projects } from '@/components/landing/projects';
import { Testimonials } from '@/components/landing/testimonials';
import { Blog } from '@/components/landing/blog';
import { ExpertQa } from '@/components/landing/expert-qa';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <ExpertQa />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
