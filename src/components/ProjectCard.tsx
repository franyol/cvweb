type ProjectCardProps = {
  title: string;
  description: string;
  content: React.ReactNode;
  image: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

export function ProjectCard({
  title,
  description,
  content,
  image,
  imageAlt = "",
  imagePosition = "right",
}: ProjectCardProps) {
  const imageElement = (
    <div
      className={`order-2 h-[350px] w-full md:h-full md:w-1/2 ${imagePosition === "left" ? "md:order-1" : "md:order-2"
        }`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="h-full w-full object-cover"
      />
    </div>
  );

  const textElement = (
    <div
      className={`order-1 flex h-full w-full flex-col overflow-y-auto px-8 py-12 md:w-1/2 md:px-12 lg:px-16 ${imagePosition === "left" ? "md:order-2" : "md:order-1"
        }`}
    >
      <div className="m-auto w-full max-w-xl text-center">
        <h3 className="font-playfair text-4xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-5 font-sans text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 font-sans text-base leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <article className="flex w-full flex-col md:h-[600px] md:flex-row">
      {textElement}
      {imageElement}
    </article>
  );
}
