import awareDriveImg from "@/assets/project-aware-drive.jpg";
import foodSharingImg from "@/assets/project-food-sharing.jpg";

const projects = [
  {
    title: "Aware Drive",
    subtitle: "AI-Based Driver Drowsiness Detection System",
    description:
      "An AI-powered real-time driver monitoring system that detects drowsiness using computer vision and facial landmark analysis. Tracks eye movement and blink patterns through a live camera feed and triggers instant voice alerts to prevent accidents.",
    tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
    image: awareDriveImg,
  },
  {
    title: "Zero-Waste Food Sharing App",
    subtitle: "Surplus Food Sharing Platform",
    description:
      "A socially impactful surplus food sharing platform that connects food donors such as restaurants, households, and event organizers with NGOs or individuals in need. Reduces food wastage and promotes sustainability through efficient digital coordination.",
    tags: ["Java", "Web Technologies", "MySQL", "App Development"],
    image: foodSharingImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover-lift group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading font-bold text-xl text-foreground">{project.title}</h3>
                <p className="text-primary text-sm font-medium mt-1">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
