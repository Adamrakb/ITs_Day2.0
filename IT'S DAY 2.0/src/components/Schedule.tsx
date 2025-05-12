import React from 'react';
import { Clock } from 'lucide-react';

interface ScheduleItemProps {
  time: string;
  title: string;
  location: string;
  description: string;
  isActive?: boolean;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  time,
  title,
  location,
  description,
  isActive = false,
}) => {
  return (
    <div className={`relative pl-8 pb-10 ${isActive ? '' : 'opacity-75'}`}>
      {/* Timeline dot */}
      <div className={`absolute left-0 w-4 h-4 rounded-full mt-1.5 
        ${isActive ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-gray-300'}`}></div>
      
      {/* Timeline line */}
      <div className="absolute left-2 top-5 bottom-0 w-[1px] bg-gray-200"></div>
      
      <div className="mb-1 flex items-center text-sm text-gray-500">
        <Clock size={14} className="mr-1" />
        <span>{time}</span>
        <span className="mx-2">•</span>
        <span className="font-medium">{location}</span>
      </div>
      
      <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
        {title}
      </h3>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-bold tracking-wider">Mark Your Calendar</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-800">
            Event Schedule
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            A full day of learning, networking, and innovation. Plan your day and make the most of IT's Day 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Morning Sessions</h3>
              
              <ScheduleItem 
                time="8:30 AM - 9:30 AM" 
                title="Registration & Breakfast" 
                location="Main Lobby" 
                description="Check-in, collect your event materials, and enjoy a light breakfast while networking."
                isActive={true} 
              />
              
              <ScheduleItem 
                time="9:30 AM - 10:00 AM" 
                title="Opening Ceremony" 
                location="Auditorium" 
                description="Welcome address and overview of the day's activities by event organizers."
              />
              
              <ScheduleItem 
                time="10:00 AM - 12:00 PM" 
                title="Morning Workshops" 
                location="Workshop Rooms" 
                description="Choose from Web Development, Office Productivity, or Cybersecurity workshops."
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Afternoon Sessions</h3>
              
              <ScheduleItem 
                time="12:00 PM - 1:00 PM" 
                title="Lunch Break" 
                location="Dining Hall" 
                description="Enjoy lunch with fellow attendees and speakers. Vegetarian options available."
                isActive={true}
              />
              
              <ScheduleItem 
                time="1:00 PM - 3:00 PM" 
                title="Website Building Competition" 
                location="Competition Zone" 
                description="Showcase your skills in our timed website development challenge with great prizes."
              />
              
              <ScheduleItem 
                time="3:00 PM - 4:30 PM" 
                title="Office Certification Exams" 
                location="Certification Center" 
                description="Take official exams to get certified in various Microsoft Office applications."
              />
              
              <ScheduleItem 
                time="4:30 PM - 5:30 PM" 
                title="Closing & Awards Ceremony" 
                location="Auditorium" 
                description="Recognition of competition winners and certification achievers."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;