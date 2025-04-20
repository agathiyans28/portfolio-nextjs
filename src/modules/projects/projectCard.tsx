export default function ProjectCard() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Project Title</h2>
        <p className="mt-2 text-gray-600">Project description goes here.</p>
        <div className="flex items-center justify-between w-full mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            View Project
          </a>
          <span className="text-gray-500">Date</span>
        </div>
      </div>
    </div>
  );
}
