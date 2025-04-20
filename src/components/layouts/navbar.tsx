export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 backdrop-blur-xs bg-white opacity-35 text-black sticky top-3 left-0 right-0">
      <div className="text-lg font-bold relative">A.</div>
      <ul className="flex space-x-4 relative">
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
