import React from "react";
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";
import s from "./ThisDayInfo.module.scss";

interface Props {}
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}
export const ThisDayInfo = () => {
  const items = [
    { icon_id: "temp", name: "Температура", value: "20° - ощущается как 17°" },
    { icon_id: "pressure", name: "Давление", value: "765 мм ртутного столба" },
    { icon_id: "precipitation", name: "Осадки", value: "Без осадков" },
    { icon_id: "wind", name: "Ветер", value: "3м/с" },
  ];
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="cloud" />
    </div>
  );
};
