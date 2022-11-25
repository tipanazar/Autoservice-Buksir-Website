import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./MainNavigation.module.scss";

const navLinkClassName = ({ isActive }) =>
  isActive ? s.activeLink : s.inactiveLink;

export const MainNavigation = ({ className }) => {
  return (
    <div className={className}>
      <nav className={s.wrapper}>
        <NavLink className={navLinkClassName} to="/">
          Головна
        </NavLink>
        <NavLink className={navLinkClassName} to="contacts">
          Контакти
        </NavLink>
        {/* <NavLink className={navLinkClassName} to="prices">
          Ціни
        </NavLink>
        <NavLink className={navLinkClassName} to="work-examples">
          Роботи
        </NavLink> */}
        <NavLink className={navLinkClassName} to="vacancies">
          Вакансіі
        </NavLink>
        <NavLink className={navLinkClassName} to="certificates">
          Сертифікати
        </NavLink>
      </nav>
    </div>
  );
};

MainNavigation.propTypes = {
  className: PropTypes.string.isRequired,
};
