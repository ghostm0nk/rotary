import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const days = [];
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }
    setDaysInMonth(days);
  }, [currentDate]);

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(nextMonth);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={handlePreviousMonth}
        >
          Previous
        </button>
        <h2 className="text-lg font-bold text-gray-700">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={handleNextMonth}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className="text-center text-gray-600">
            {day}
          </div>
        ))}
        {daysInMonth.map((day, index) => (
          <div key={index} className="text-center text-gray-700">
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;