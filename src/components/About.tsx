const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-primary font-medium text-sm tracking-widest uppercase">About Me</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Passionate About Code & Impact
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a final-year Computer Science student at Panimalar Engineering College with a deep passion for software development and innovation. I thrive on building solutions that merge technology with real-world impact.
          </p>
          <p>
            My interests span AI-based systems, socially impactful applications, and creating clean, user-centric interfaces. I believe technology should solve meaningful problems — from road safety to food sustainability.
          </p>
          <p>
            I'm committed to continuous learning and growing as a versatile full-stack developer who delivers polished, thoughtful software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
