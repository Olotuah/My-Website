import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Nelson. All rights reserved.</p>
      <p className="mt-1">
        Built with <a href="https://react.dev/" className="text-blue-400 hover:underline">React</a> &amp;{" "}
        <a href="https://tailwindcss.com/" className="text-blue-400 hover:underline">Tailwind CSS</a>.
      </p>
    </footer>
  );
}
