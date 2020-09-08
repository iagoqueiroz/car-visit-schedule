import React, { useState, useEffect } from "react";

import "./styles.css";

const HoursList = ({ onSelectHour, disableds = [] }) => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const hourArr = [
      { value: "09:00", selected: false, disabled: false },
      { value: "10:00", selected: false, disabled: false },
      { value: "11:00", selected: false, disabled: false },
      { value: "14:00", selected: false, disabled: false },
      { value: "15:00", selected: false, disabled: false },
      { value: "16:00", selected: false, disabled: false },
      { value: "17:00", selected: false, disabled: false },
    ];

    setHours([
      ...hourArr.map((hour) => ({
        ...hour,
        disabled: disableds.includes(hour.value),
      })),
    ]);
  }, [disableds]);

  function handleClick(hour) {
    if (hour.disabled) return;

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
          className={`hour-item${hour.selected ? " active" : ""}${
            hour.disabled ? " disabled" : ""
          }`}
        >
          {hour.value}
        </div>
      ))}
    </div>
  );
};

export default HoursList;
