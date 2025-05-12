import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, role, company, image, socials }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-blue-600 mb-2">{role}</p>
        <p className="text-gray-600 mb-4">{company}</p>
        
        <div className="flex space-x-4">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
              <Twitter size={20} />
            </a>
          )}
          {socials.website && (
            <a href={socials.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-colors">
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: "Emma Chen",
      role: "Web Development Expert",
      company: "TechForward Inc.",
      image: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=800",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Office Productivity Specialist",
      company: "ProductivityPro",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      socials: {
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    {
      name: "Sarah Williams",
      role: "UX/UI Designer",
      company: "DesignMaster Studios",
      image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=800",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Alex Rivera",
      role: "Full-Stack Developer",
      company: "CodeCraft",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com"
      }
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-bold tracking-wider">Industry Experts</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Meet Our Speakers
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Learn from top professionals in the tech industry who will share their knowledge and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;