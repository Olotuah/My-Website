import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Custom Web Application",
      description: "Development of modern single-page applications with React (frontend) and Node.js (backend).",
      link: "https://www.fiverr.com/henry/profile"  // placeholder link
    },
    {
      title: "Responsive Front-End Design",
      description: "Implementing responsive designs with Tailwind CSS, ensuring pixel-perfect conversions from Figma/PSD.",
      link: "https://www.fiverr.com/henry/profile"
    },
    {
      title: "Website Performance Optimization",
      description: "Improving load times and SEO by optimizing React apps and Node.js APIs.",
      link: "https://www.fiverr.com/henry/profile"
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Services
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-medium text-gray-800 mb-2">{svc.title}</h4>
              <p className="text-gray-600 mb-4">{svc.description}</p>
              <a href={svc.link} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline font-semibold">
                View on Fiverr &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

