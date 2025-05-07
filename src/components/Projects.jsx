
import React from 'react';

import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      url: "https://github.com/henry/portfolio-website"
    },
    {
      name: "E-commerce Dashboard",
      description: "Admin dashboard for an e-commerce platform (React, Node.js, MongoDB).",
      url: "https://github.com/henry/ecommerce-dashboard"
    },
    {
      name: "Real-time Chat App",
      description: "Realtime chat application using Node.js, Socket.io, and React.",
      url: "https://github.com/henry/chat-app"
    },
    {
      name: "Weather Forecast App",
      description: "Weather app that consumes a public API (React front-end).",
      url: "https://github.com/henry/weather-app"
    },
    {
      name: "Task Manager API",
      description: "RESTful API for a task management app (Node.js, Express).",
      url: "https://github.com/henry/task-manager-api"
    },
    {
      name: "Blog Platform",
      description: "Simple blogging platform with user authentication (MERN stack).",
      url: "https://github.com/henry/blog-platform"
    },
    {
      name: "Social Media Feed",
      description: "Prototype social feed front-end built with React and Redux.",
      url: "https://github.com/henry/social-feed"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(proj => (
            <div key={proj.name} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="text-xl font-medium text-gray-800">{proj.name}</h4>
              <p className="text-gray-600 mb-4 text-sm">{proj.description}</p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
                <FaGithub className="mr-2" /> <span>GitHub</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
