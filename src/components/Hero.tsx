import profileImage from "@/assets/swetha-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center px-6 md:px-12 lg:px-20 pt-20 pb-10 md:pt-24 md:pb-14">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left */}
        <div className="order-2 lg:order-1 space-y-5">
          <p className="text-primary font-semibold text-lg md:text-xl tracking-widest uppercase opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Swetha S
          </h1>
          <p className="font-heading text-base md:text-lg text-muted-foreground font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Aspiring Software Developer · Web & App Developer
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg text-sm md:text-base opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Passionate about building scalable, user-centric applications using Java, Python, and modern web technologies. Focused on AI-powered systems and socially impactful digital solutions.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity duration-200 text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-2.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors duration-200 text-sm"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-2.5 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Resume
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-3xl bg-primary/10 rotate-6" />
            <img
              src={profileImage}
              alt="Swetha S - Software Developer"
              className="relative w-full h-full object-cover object-top rounded-3xl card-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
