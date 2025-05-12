import React, { useState } from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Registration: React.FC = () => {
  // Replace with your actual Google Form URL
  const googleFormUrl = "https://forms.google.com/your-registration-form";
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="uppercase font-bold tracking-wider">Limited Spots Available</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Register for IT's Day 2025
            </h2>
            <p className="mb-8 text-white/80 max-w-lg">
              Secure your spot at the most anticipated tech event of the year. Registration is free but limited. Fill out the form to join us for a day of learning and innovation.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Access to all workshops and tech talks",
                "Opportunity to participate in the website building competition",
                "Office certification exam vouchers (limited availability)",
                "Networking with industry professionals",
                "Lunch and refreshments provided"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-teal-300 mt-1 mr-2 flex-shrink-0" size={20} />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 transition-all py-3 px-8 rounded-full font-bold text-lg group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Register Now
              <ExternalLink 
                size={20} 
                className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
              />
            </a>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Registration Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Event Date</h4>
                  <p className="text-white/80">April 15, 2025 | 8:30 AM - 5:30 PM</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Location</h4>
                  <p className="text-white/80">Tech Innovation Center</p>
                  <p className="text-white/80">123 Digital Avenue</p>
                  <p className="text-white/80">San Francisco, CA 94105</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Registration Deadline</h4>
                  <p className="text-white/80">April 1, 2025 (or until spots are filled)</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Contact</h4>
                  <p className="text-white/80">events@itsday.com</p>
                  <p className="text-white/80">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;