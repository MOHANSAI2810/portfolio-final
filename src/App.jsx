import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      {/* Add top padding to avoid content hiding behind navbar */}
      <main className="pt-20">
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Home Section</h1>
        </section>
        <section id="about" className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <h1 className="text-4xl font-bold">About Section</h1>
        </section>
        <section id="projects" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Projects Section</h1>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
          <h1 className="text-4xl font-bold">Contact Section</h1>
        </section>
      </main>
    </div>
  );
};

export default App;
