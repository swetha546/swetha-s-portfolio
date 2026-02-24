const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-sm font-semibold text-foreground">
          Swetha<span className="text-primary">.</span>S
        </p>
        <p className="text-muted-foreground text-xs">
          © 2025 Swetha S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
