import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./MainNavigation.module.scss";

export const MainNavigation = ({ className }) => {
  return (
    <div className={className}>
      <nav className={s.wrapper}>
        <NavLink className={s.link} to="/">
          Головна
        </NavLink>
        <NavLink className={s.link}>Контакти</NavLink>
        <NavLink className={s.link}>Ціни</NavLink>
        <NavLink className={s.link}>Роботи</NavLink>
        <NavLink className={s.link}>Сертифікати</NavLink>
        <NavLink className={s.link}>Вакансіі</NavLink>
      </nav>
    </div>
  );
};

MainNavigation.propTypes = {
  className: PropTypes.string.isRequired,
};
