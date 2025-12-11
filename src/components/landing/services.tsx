import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cloud, Server, ShieldCheck, GitBranchPlus, Rocket, Repeat } from "lucide-react";

const services = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Cloud Infrastructure",
    description: "Design, build, and manage scalable and resilient cloud infrastructure on AWS, Azure, and GCP.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "CI/CD & Automation",
    description: "Automate your build, test, and deployment processes to increase velocity and reduce errors.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Cloud Security",
    description: "Implement robust security measures and ensure compliance with industry standards like SOC 2, ISO 27001, and HIPAA.",
  },
  {
    icon: <GitBranchPlus className="h-8 w-8 text-primary" />,
    title: "DevOps Strategy",
    description: "Adopt modern DevOps practices to improve collaboration, efficiency, and software quality.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Kubernetes & Containers",
    description: "Leverage containerization and orchestration to build portable, scalable, and efficient applications.",
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: "Cloud Migration",
    description: "Seamlessly migrate your applications and infrastructure to the cloud with minimal disruption.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            We provide a wide range of services to help you build and operate modern, scalable, and secure systems.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 bg-background transition-transform transform hover:-translate-y-2">
              <CardHeader>
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
