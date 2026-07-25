export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}

        <div className="text-2xl font-extrabold tracking-tight">
          LA
        </div>

        {/* Menu */}

        <div className="hidden gap-8 text-gray-700 md:flex">

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

        {/* Button */}

        <button className="rounded-xl bg-black px-5 py-2 text-white transition hover:bg-gray-800">
          Download CV
        </button>

      </div>
    </nav>
  );
}