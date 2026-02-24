import { Monitor, Layout, Smartphone, Terminal } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, performant websites with modern frameworks and clean architecture.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Crafting pixel-perfect, accessible interfaces with strong attention to UI/UX detail.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Developing mobile applications with intuitive user experiences and smooth performance.",
  },
  {
    icon: Terminal,
    title: "Software Development",
    description: "Building robust software solutions with Java and Python for diverse problem domains.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What I Do
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 card-shadow hover-lift group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
