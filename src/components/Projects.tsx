import awareDriveImg from "@/assets/project-aware-drive.jpg";
import foodSharingImg from "@/assets/project-food-sharing.jpg";
import pillDispenserImg from "@/assets/project-pill-dispenser.jpg";
import emotionRecognitionImg from "@/assets/project-emotion-recognition.jpg";

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
  {
    title: "Automated Pill Dispenser",
    subtitle: "AI-Based Smart Healthcare Device",
    description:
      "An AI-based smart healthcare device that automatically dispenses medicines at scheduled times with alerts. Uses microcontrollers, sensors, and AI to monitor usage patterns, ensure accurate dosage, and improve medication adherence for elderly patients.",
    tags: ["AI/ML", "IoT", "Healthcare"],
    image: pillDispenserImg,
  },
  {
    title: "Emotion Recognition and Analysis",
    subtitle: "AI-Powered Emotion Detection System",
    description:
      "A technology that enables computers to detect and interpret human emotions from facial expressions, voice tone, text, or body language. Uses machine learning and deep learning techniques to analyze patterns and classify emotions such as happiness, sadness, anger, fear, or surprise. Widely used in customer service, healthcare, education, and human-computer interaction.",
    tags: ["AI/ML", "Deep Learning", "Computer Vision", "NLP"],
    image: emotionRecognitionImg,
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
              <div className="aspect-video overflow-hidden bg-secondary flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-muted-foreground text-4xl font-heading font-bold opacity-30">
                    {project.title.charAt(0)}
                  </div>
                )}
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
