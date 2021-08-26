import React from 'react';

const DateX = (props) => {
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className="DateX">
      <h4 className="month">{month}</h4>
      <h6 className="year">{year}</h6>
      <h1 className="day">{day}</h1>
    </div>
  );
}

export default DateX;