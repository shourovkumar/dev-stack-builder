import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    if (link === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link === 'Technologies') {
      document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setActiveLink('Home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-50 bg-white relative">
      <nav className="container mx-auto flex justify-between pt-5 pb-5 items-center px-4">
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>

        {/* ✅ Logo এখন clickable */}
        <img
          src={Logo}
          alt="logo"
          onClick={handleLogoClick}
          className="cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleLinkClick(link)}
                className={`transition-colors cursor-pointer ${
                  activeLink === link
                    ? 'text-pink-600 font-semibold border-b-2 border-pink-600 pb-1'
                    : 'text-gray-700 font-medium hover:text-pink-600'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 px-4 pb-4 shadow-lg">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className={`block w-full text-left transition-colors cursor-pointer ${
                    activeLink === link
                      ? 'text-pink-600 font-semibold'
                      : 'text-gray-700 font-medium hover:text-pink-600'
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
