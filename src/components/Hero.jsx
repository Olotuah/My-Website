import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Nelson 
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
          Full-Stack Developer & React Specialist
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
          I build fast, responsive web applications using modern front-end frameworks 
          and Node.js backends. Bringing ideas to life with clean and efficient code.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
            Hire Me
          </a>
          <a href="/resume.pdf" download className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
