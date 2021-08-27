import React from 'react';

const DateX = (props) => {
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="DateX">
      <p className="month">{month}</p>
      <p className="year">{year}</p>
      <p className="day">{day}</p>
    </div>
  );
}

export default DateX;