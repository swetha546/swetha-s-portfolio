import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
        </div>

        <div className="bg-background rounded-2xl p-6 md:p-10 card-shadow hover-lift">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Website Development Intern
              </h3>
              <p className="text-primary font-medium text-sm mt-1">
                Eisystems Services
              </p>
              <p className="text-muted-foreground text-sm mt-1">May 2025 – June 2025</p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Worked on responsive web development using HTML, CSS, and Bootstrap
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Designed clean UI layouts for cross-device compatibility
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Improved user experience with well-structured, accessible designs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
