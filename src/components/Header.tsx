import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BarChart2, MessageSquare, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <BookOpen className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Sentence Counter
            </h1>
          </Link>
          <nav className="mt-6 md:mt-0">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200">
                  <BarChart2 className="w-5 h-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200">
                  <Heart className="w-5 h-5" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200">
                  <MessageSquare className="w-5 h-5" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;