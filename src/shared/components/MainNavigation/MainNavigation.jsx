import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./MainNavigation.module.scss";

export const MainNavigation = ({
  className,
  modalSwitcher,
  linksDisplayClass,
  children,
}) => {
  const navLinkClassName = ({ isActive }) =>
    isActive
      ? `${s.activeLink} ${linksDisplayClass}`
      : `${s.inactiveLink} ${linksDisplayClass}`;
  return (
    <nav className={className}>
      <NavLink
        className={navLinkClassName}
        to="/"
        onClick={() => modalSwitcher && modalSwitcher()}
      >
        Головна
      </NavLink>
      <NavLink
        className={navLinkClassName}
        to="spare-parts-shop"
        onClick={() => modalSwitcher && modalSwitcher()}
      >
        Магазин Запчастин
      </NavLink>
      <NavLink
        className={navLinkClassName}
        to="contacts"
        onClick={() => modalSwitcher && modalSwitcher()}
      >
        Контакти
      </NavLink>
      <NavLink
        className={navLinkClassName}
        to="certificates"
        onClick={() => modalSwitcher && modalSwitcher()}
      >
        Сертифікати
      </NavLink>
      {children}
    </nav>
  );
};

MainNavigation.propTypes = {
  className: PropTypes.string.isRequired,
  linksDisplayClass: PropTypes.string.isRequired,
  modalSwitcher: PropTypes.func,
};
