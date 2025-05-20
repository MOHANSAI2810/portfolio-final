import React from 'react';
import profilePic from '../assets/profile.jpg';

const Navbar = () => {
  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-transparent">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Profile Picture - smaller size */}
        <div className="flex items-center">
<img
  src={profilePic}
  alt="Profile"
  className="w-30 h-30 rounded-full border-2 border-gradient-to-br from-purple-500 to-pink-500"
/>

        </div>

        {/* Navigation Buttons */}
        <nav className="flex space-x-6 pr-2">
          {navItems.map((item) => (
<a
  key={item}
  href={`#${item}`}
  className="capitalize text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 text-2xl px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-95 hover:opacity-70 cursor-pointer"
>
  {item}
</a>

          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
