import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white relative">
      <nav className="container mx-auto flex justify-between pt-5 pb-5 items-center px-4">
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>

        <img src={Logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-8">
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
              Technologies
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-pink-600 transition-colors cursor-pointer">
            Sign In
          </button>
          <button className="text-white text-sm font-semibold bg-[#D91B7E] px-5 py-2 rounded-full hover:bg-[#b81568] transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>

      <hr className="border-t border-gray-200" />

      {/* Mobile Dropdown - OVERLAY */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 px-4 pb-4 shadow-lg">
          <ul className="flex flex-col gap-3 pt-3">
            <li>
              <a href="#" className="block text-gray-700 font-medium hover:text-pink-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 font-medium hover:text-pink-600 transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 font-medium hover:text-pink-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 font-medium hover:text-pink-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 font-medium hover:text-pink-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
