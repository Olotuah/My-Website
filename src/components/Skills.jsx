import React from 'react';

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    // Add more skills as needed:
    // { name: "Git", icon: <FaGithub className="text-gray-800" /> },
    // { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">Skills</h3>
        <div className="flex flex-wrap justify-center gap-8 text-5xl">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col items-center">
              {skill.icon}
              <span className="text-sm text-gray-700 mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
