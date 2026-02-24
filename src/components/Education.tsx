import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Panimalar Engineering College",
    year: "2023 – 2027",
    score: "CGPA: 8.63",
  },
  {
    degree: "Class XII (Higher Secondary)",
    institution: "Higher Secondary School",
    year: "2023",
    score: "91.1%",
  },
  {
    degree: "Class X (SSLC)",
    institution: "Secondary School",
    year: "2021",
    score: "100%",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Education</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
        </div>

        <div className="space-y-6">
          {educationData.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 md:p-8 card-shadow hover-lift flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-foreground">{item.degree}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  <span className="text-xs font-semibold text-foreground bg-secondary px-3 py-1 rounded-full">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
