import React from 'react';
export default function About() {
  // Example stats that could be highlighted (you can customize or remove)
  const highlights = [
    { label: "Projects Completed", value: 11 },
    { label: "Years of Experience", value: 4 },
    { label: "Clients Served", value: 7 },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="md:w-1/2 md:pr-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h3>
          <p className="text-gray-600 mb-6">
            Hello! I'm <strong>Nelson</strong>, a passionate full-stack web developer with a focus on front-end technologies. 
            I specialize in building rich, interactive UIs with <strong>React</strong> and <strong>Tailwind CSS</strong>, 
            and I have solid experience with <strong>Node.js</strong> on the backend. Over the years, I’ve transformed ideas into 
            responsive, user-friendly web applications. I love crafting clean and maintainable code, and I'm continuously learning new 
            technologies to refine my skills.
          </p>
          <p className="text-gray-600">
            I thrive on solving complex problems and turning visions into reality on the web. When I'm not coding, 
            I'm likely exploring the latest tech trends or refining my craft on platforms like Fiverr.
          </p>
        </div>

        {/* Optional highlights or image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Stats highlights */}
          <div className="flex justify-center md:justify-start space-x-8">
            {highlights.map(item => (
              <div key={item.label} className="text-center">
                <div className="text-4xl text-blue-600 font-bold">{item.value}+</div>
                <div className="text-gray-600 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
          {/* If a profile image is available:
          <img src="/assets/profile.jpg" alt="Henry profile" className="rounded-full w-40 h-40 object-cover mx-auto md:mx-0" />
          */}
        </div>
      </div>
    </section>
  );
}