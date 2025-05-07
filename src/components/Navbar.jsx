import React from 'react';

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo/Name */}
        <a href="#home" className="text-2xl font-bold">Henry</a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-800 hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200">
          {navLinks.map(link => (
            <li key={link.name} className="px-4 py-2">
              <a 
                href={link.href} 
                className="block text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}  // close menu on click
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
