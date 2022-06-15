import React from "react";
import { Card } from "./Card";

import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

interface Props {}
export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}
export const Days = () => {
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "28 авг.",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
    {
      day: "tomorow",
      day_info: "28 авг.",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
    {
      day: "wewe",
      day_info: "28 авг.",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
    {
      day: "ffff",
      day_info: "28 авг.",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
    {
      day: "vvvvv",
      day_info: "28 авг.",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
    {
      day: "jjujju",
      day_info: "28 авг.",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
    {
      day: "iiiioo",
      day_info: "28 авг.",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облочно",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};
