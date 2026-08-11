export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-playfair text-5xl font-semibold tracking-tight">
          Contact
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I am interested in research opportunities in robotics, AI,
          cybersecurity, embedded computing, and related areas. For questions,
          collaboration, or PhD-related enquiries, feel free to get in touch.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 text-lg">
          <a
            href="mailto:f.valbuenao64@gmail.com"
            className="underline underline-offset-4 hover:opacity-70"
          >
            f.valbuenao64@gmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com/franyol"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/francisco-valbuena-ortega-90a56922b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
