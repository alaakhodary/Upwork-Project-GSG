import React from "react";

import send from "../../assests/message.PNG";

import { Status, StatusOfTime, Time } from "./style";

const TimeStatus = () => {
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[today.getDay()];
  const monthOfYear = monthsOfYear[today.getMonth()];
  const dateOfMonth = today.getDate();
  const hours = today.getHours();
  const timeOfDay = hours >= 12 ? "Good Evening" : "Good Morning";
  const name = localStorage.getItem("name");

  function getOrginalSuff(date) {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = date < 30 ? date % 20 : date % 30;
    const suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
    return suffix;
  }

  return (
    <StatusOfTime>
      <div>
        <Time>
          {dayOfWeek},{monthOfYear} {dateOfMonth}
          {getOrginalSuff(dateOfMonth)}
        </Time>
        <Status>
          {timeOfDay},{name}
        </Status>
      </div>
      <img src={send} alt="sends" />
    </StatusOfTime>
  );
};

export default TimeStatus;
