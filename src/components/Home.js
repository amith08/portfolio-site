import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Hello, World! I’m <span className="text-primary">Amith Hegde</span>
        </h1>
        <h2 className="text-2xl text-gray-600 mb-8">
        Aspiring Software Engineer | Full-Stack Developer</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
        "Hi, I'm Amith Hegde, a Computer Science graduate with expertise in software engineering, full-stack development, and innovative problem-solving. My passion lies in building robust applications and contributing to technology's endless possibilities."        </p>
        <div className="flex flex-col items-center gap-4">
  <div className="space-x-4">
    <Link
      to="/works"
      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
    >
      View My Work
    </Link>
    <Link
      to="/contact"
      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
    >
      Get in Touch
    </Link>
  </div>
  <Link
    to="/about"
    className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
  >
    More about me
  </Link>
</div>
    
      </div>
    </div>
  );
}

export default Home;