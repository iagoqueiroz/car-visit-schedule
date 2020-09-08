import React, { useState, useEffect } from "react";

import moment from "../../utils/moment";

import "./styles.css";

const DaysList = ({ onSelectDate }) => {
  const [days_list, setDaysList] = useState([]);

  useEffect(() => {
    const start = moment();
    const end = moment().add(6, "days");
    const range = moment().range(start, end);

    const days = Array.from(range.by("days"));

    setDaysList(
      days.map((day) => ({
        week_day: day.format("ddd").toUpperCase(),
        day_number: day.format("DD"),
        date: day.format("YYYY-MM-DD"),
        selected: false,
      }))
    );
  }, []);

  function handleClick(day) {
    setDaysList(
      days_list.map((d) => {
        return { ...d, selected: d === day ? true : false };
      })
    );

    onSelectDate(day.date);
  }

  return (
    <div className="days-list">
      {days_list.map((day, index) => (
        <div
          key={index}
          onClick={() => handleClick(day)}
          className={`day-group${day.selected ? " active" : ""}`}
        >
          <div className="week_day">{day.week_day}</div>
          <div className="day_number">{day.day_number}</div>
        </div>
      ))}
    </div>
  );
};

export default DaysList;
