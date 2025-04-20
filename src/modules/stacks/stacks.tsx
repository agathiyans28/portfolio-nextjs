export default function Stacks() {
  return (
    <section className="min-h-screen text-white">
      <div className="flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold">Stacks</h1>
        <p className="mt-4 text-lg">
          Here are some of the projects I have worked on. You can find more on
          my GitHub.
        </p>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Project cards will go here */}
        </div>
      </div>
    </section>
  );
}
