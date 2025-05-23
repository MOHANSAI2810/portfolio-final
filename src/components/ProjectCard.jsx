import React from "react";

const ProjectCard = () => {
  return (
    <div className="max-w-sm bg-zinc-900 text-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src="/project1.jpg" // Replace with your image
          alt="Project Screenshot"
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-pink-400">Smart Clinic Dashboard</h2>
        <p className="text-gray-300 text-sm">
          A data-driven dashboard for managing patient records and visualizing clinical analytics.
        </p>

        {/* Tech Stack */}
        <div className="text-sm text-gray-400 flex flex-wrap gap-2">
          <span className="bg-zinc-800 px-2 py-1 rounded-full">React</span>
          <span className="bg-zinc-800 px-2 py-1 rounded-full">Tailwind</span>
          <span className="bg-zinc-800 px-2 py-1 rounded-full">Flask</span>
          <span className="bg-zinc-800 px-2 py-1 rounded-full">MySQL</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href="https://your-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded text-sm transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
