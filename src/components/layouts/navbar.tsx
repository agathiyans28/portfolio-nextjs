export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white absolute top-0 left-0 w-full">
      <div className="text-lg font-bold">AS</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Experience
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
