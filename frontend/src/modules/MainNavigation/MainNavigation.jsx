import { NavLink } from "react-router-dom";
import s from "./MainNavigation.module.scss";

export const MainNavigation = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink className={s.link} to="/">Головна</NavLink>
      <NavLink className={s.link}>Новини</NavLink>
      <NavLink className={s.link}>Ціни</NavLink>
      <NavLink className={s.link}>Роботи</NavLink>
      <NavLink className={s.link}>Сертифікати</NavLink>
      <NavLink className={s.link}>Вакансіі</NavLink>
    </nav>
  );
};
