import ProjectCard from "./projectCard";

export default function Project() {
  return (
    <section className="min-h-screen text-white">
      <div className="flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg">
          Here are some of the projects I have worked on. You can find more on
          my GitHub.
        </p>
      </div>
      <div className="flex items-center justify-center p-8">
        {[...Array(3)].map((_, index) => (
          <ProjectCard key={index} />
        ))}
      </div>
    </section>
  );
}
