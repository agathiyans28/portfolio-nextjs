export default function Contact() {
  return (
    <section className="text-white">
      <div className="flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 text-lg">
          If you would like to get in touch, feel free to reach out via email or
          connect with me on LinkedIn.
        </p>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-gray-600">Email:</p>
        </div>
      </div>
    </section>
  );
}
