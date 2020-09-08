import React, { useState } from "react";

import "./styles.css";

const HoursList = ({ onSelectHour }) => {
  const [hours, setHours] = useState([
    { value: "09:00", selected: false },
    { value: "10:00", selected: false },
    { value: "11:00", selected: false },
    { value: "14:00", selected: false },
    { value: "15:00", selected: false },
    { value: "16:00", selected: false },
    { value: "17:00", selected: false },
  ]);

  function handleClick(hour) {
    setHours(
      hours.map((h) => {
        return { ...h, selected: h === hour ? true : false };
      })
    );

    onSelectHour(hour.value);
  }

  return (
    <div className="hour-list">
      {hours.map((hour, index) => (
        <div
          onClick={() => handleClick(hour)}
          key={index}
          className={`hour-item${hour.selected ? " active" : ""}`}
        >
          {hour.value}
        </div>
      ))}
    </div>
  );
};

export default HoursList;
