import React from 'react';
import { Calendar, Award, Code, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
              IT's Day <span className="text-teal-300">2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Ignite your tech journey with workshops, certifications, and competitions.
            </p>
            <p className="mb-8 text-lg opacity-80">
              Join us for a day of innovation, learning, and networking with industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="btn-primary bg-white text-blue-700 hover:bg-blue-50 transition-colors py-3 px-8 rounded-full font-bold text-center"
              >
                Register Now
              </a>
              <a
                href="#events"
                className="btn-secondary border-2 border-white py-3 px-8 rounded-full font-bold text-center hover:bg-white/10 transition-colors"
              >
                Explore Events
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { icon: <Calendar size={28} />, title: 'Workshops', desc: 'Hands-on learning experiences' },
              { icon: <Award size={28} />, title: 'Certifications', desc: 'Industry-recognized credentials' },
              { icon: <Code size={28} />, title: 'Competitions', desc: 'Test your skills against peers' },
              { icon: <Users size={28} />, title: 'Networking', desc: 'Connect with tech professionals' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col items-start"
              >
                <div className="bg-white/20 p-3 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#events" className="text-white/70 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;