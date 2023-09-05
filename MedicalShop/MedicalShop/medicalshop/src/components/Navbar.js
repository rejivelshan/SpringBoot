import React from 'react';
import { Link } from 'react-router-dom';
import img from './med.png';

export default function NavBar() {
  return (
    <header className="bg-purple-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <nav className="flex items-center space-x-8 text-3xl font-medium text-white" aria-label="main">
          <a className="flex items-center" href="#" id="film">
            <img className="w-24 h-24 mr-2" src={img} alt="Logo" />
            <span className="font-poppins text-xl md:text-3xl">Online Medical Shop</span>
          </a>
          <ul className="flex space-x-8">
            <li>
              <Link to="/home" className="hover:opacity-90">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:opacity-90">
                About
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:opacity-90">
                Product
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
