import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Set the date for IT's Day 2025 (April 15, 2025)
  const eventDate = new Date('April 15, 2025 08:30:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        // Event has passed
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto -mt-20 relative z-10">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">
        Event Countdown
      </h3>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-100 rounded-lg py-4 px-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                {item.value < 10 ? `0${item.value}` : item.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-500">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;