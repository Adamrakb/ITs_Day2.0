import React from 'react';
import { Code, Terminal, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code size={24} className="text-blue-400" />
              <Terminal size={20} className="ml-1 text-blue-400" />
              <span className="ml-2 text-xl font-bold">IT's Day <span className="text-purple-400">2025</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              A premier tech event focused on innovation, learning, and networking. Join us for workshops, certifications, and competitions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "https://facebook.com" },
                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                { icon: <Instagram size={20} />, href: "https://instagram.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Events", href: "#events" },
                { name: "Schedule", href: "#schedule" },
                { name: "Speakers", href: "#speakers" },
                { name: "Register", href: "#register" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Tech Innovation Center<br />
                  123 Digital Avenue<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-2 flex-shrink-0" />
                <a href="mailto:events@itsday.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  events@itsday.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news about IT's Day 2025 and future events.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors w-full py-2 rounded font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 IT's Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;