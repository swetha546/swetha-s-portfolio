import { Code, Globe, Database, Wrench, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "Python"],
    icon: Code,
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
  },
  {
    title: "Database",
    skills: ["MySQL"],
    icon: Database,
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "MS Excel"],
    icon: Wrench,
  },
  {
    title: "Other",
    skills: ["App Development", "UI-Focused Frontend"],
    icon: Smartphone,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 card-shadow hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
