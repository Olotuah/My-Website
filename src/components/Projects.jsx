
import React from 'react';

import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      url: "https://my-website-qu95.vercel.app/"
    },
    {
      name: "Daily Sales Book",
      description: "The Daily Sales Book is a user-friendly web app designed to help small business owners, freelancers, or anyone managing personal finances easily track their sales and expenses. (React, Node.js, TailwinsCSS).",
      url: "https://daily-sales-book.vercel.app/"
    },
    {
      name: "User List App",
      description: "The User List App is a responsive React-based web application designed to fetch and display a list of users from the JSONPlaceholder API. The app allows users to view basic details of each user and navigate to a detailed profile page for more information. Node.js and React.",
      url: "https://olotuah.github.io/User-List-App/"
    },
    {
      name: "Face Recognition Brain – React App with Clarifai API",
      description: "This is a React-based face recognition application that leverages the Clarifai AI API to detect and analyze human faces in images.",
      url: "https://face-recognition-brain-gamma.vercel.app/"
    },
    {
      name: "Real Estate Data Website",
      description: "This is a modern real estate data website built with React.js, designed to display property listings, pricing trends, and neighborhood analytics in a dynamic and user-friendly interface. (Node.js, React.Js, TailwindCSS).",
      url: "https://project-klooft-xi84.vercel.app/"
    },
    {
      name: "Web Testing States for NFT App",
      description: "Displays NFTs owned by the connected wallet using on-chain metadata.",
      url: "https://olotuah.github.io/React-Project/"
    },
    {
      name: "Background Generator App",
      description: "A clean and interactive background generator application built using React.js, allowing users to create, customize, and copy CSS gradient backgrounds in real time.",
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
