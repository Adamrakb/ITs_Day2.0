import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href="#register"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-6 flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Register Now
        <ExternalLink size={18} className="ml-2" />
      </a>
    </div>
  );
};

export default FloatingCTA;