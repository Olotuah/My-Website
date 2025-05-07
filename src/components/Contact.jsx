import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-lg">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">Contact</h3>
        <p className="text-center text-gray-600 mb-8">
          Interested in working together or have a question? Reach out to me and I’ll get back to you as soon as possible.
        </p>
        {/* Contact Form */}
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input type="text" required placeholder="Your name" 
                   className="w-full border border-gray-300 rounded px-3 py-2"/>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input type="email" required placeholder="Your email" 
                   className="w-full border border-gray-300 rounded px-3 py-2"/>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea rows="4" required placeholder="Your message" 
                      className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {/* Alternative contact methods */}
        <div className="mt-10 text-center text-gray-700">
          <p>You can also find me on:</p>
          <p className="mt-2">
            <a href="gbengaolotuah@gmail.com" className="text-blue-600 hover:underline">Email</a> &middot; 
            <a href="https://www.linkedin.com/in/olotuah-gbenga-a978ab12b/" className="text-blue-600 hover:underline ml-2">LinkedIn</a> &middot;
            <a href="https://fiverr.com/nelson_tuah" className="text-blue-600 hover:underline ml-2">Fiverr</a>
          </p>
        </div>
      </div>
    </section>
  );
}
