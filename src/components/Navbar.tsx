import { useState } from 'react';

import Logo from '../assets/logo-text.png';

import { Menu } from 'lucide-react';




const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav className="container mx-auto flex justify-between pt-5 pb-5 items-center px-4">
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>

        <img src={Logo} alt="logo" />

        <ul className="hidden md:flex justify-center gap-10 ">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex justify-center items-center gap-6">
          <p>Sign In</p>
          <button className="text-white text-[14px] bg-[#D91B7E]  px-4 py-2 rounded-3xl">
            Sign Up
          </button>
        </div>
      </nav>
      <hr className="border-t border-gray-200" />

      {isMenuOpen && (
        <div className=" md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 ">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
