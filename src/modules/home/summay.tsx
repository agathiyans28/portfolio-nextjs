export default function Summary() {
  return (
    <section className="flex items-center justify-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold  mb-4">Hello,</h1>
        <h1 className="text-4xl sm:text-5xl font-bold  mb-4">
          I&apos;m <span className="text-blue-600">Agathiyan</span> 👋
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
          Full Stack Developer | Building Scalable, Performant & Modern Web Apps
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          I&apos;m a Full Stack Developer with 2.7+ years of experience building
          scalable, high-performance web apps using React, Next.js, Node.js, and
          PostgreSQL. I bridge frontend and backend seamlessly to deliver smooth
          user experiences and efficient systems.
        </p>
        <p>
          Looking to take your web app from idea to scalable product? I can help
          you get there.
        </p>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">My Skills:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Full Stack Applications with React, Next.js, and Node.js</li>
            <li>Scalable APIs using Express.js & GraphQL</li>
            <li>PostgreSQL for robust data modeling and queries</li>
            <li>Cross-platform mobile apps with React Native</li>
            <li>Authentication, Authorization, and secure app architecture</li>
            <li>Real-time features using WebSockets</li>
            <li>Optimized frontend performance with SSR and SSG</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
