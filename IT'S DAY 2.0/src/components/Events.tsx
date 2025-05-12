import React from 'react';
import { Laptop, Award, Globe, BookOpen, Lightbulb, Users } from 'lucide-react';

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const EventCard: React.FC<EventCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className={`${color} p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      icon: <Laptop size={28} />,
      title: "Web Development Workshop",
      description: "Learn modern web technologies and build a responsive website from scratch.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Award size={28} />,
      title: "Office Certification",
      description: "Get certified in Microsoft Office suite and boost your productivity skills.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Globe size={28} />,
      title: "Website Building Competition",
      description: "Showcase your creativity and technical skills in our web design challenge.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <BookOpen size={28} />,
      title: "Tech Talks",
      description: "Insightful presentations from industry experts on emerging technologies.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Innovation Lab",
      description: "Experiment with new technologies and turn your ideas into prototypes.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users size={28} />,
      title: "Networking Session",
      description: "Connect with peers, mentors, and potential employers in the tech industry.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-bold tracking-wider">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Exciting Events & Activities
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Join our diverse range of workshops, competitions, and networking opportunities designed to enhance your technical skills and expand your professional network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;