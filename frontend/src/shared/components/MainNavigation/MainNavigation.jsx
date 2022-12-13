import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./MainNavigation.module.scss";

export const MainNavigation = ({
  className,
  modalSwitcher,
  listItemDisplayClass,
  children,
}) => {
  const navLinkClassName = ({ isActive }) =>
    isActive ? s.activeLink : s.inactiveLink;
  return (
    <nav className={className}>
      <ul className={s.linksList}>
        <li className={`${s.linksListItem} ${listItemDisplayClass}`}>
          <NavLink
            className={navLinkClassName}
            to="/"
            onClick={() => modalSwitcher && modalSwitcher()}
          >
            Головна
          </NavLink>
        </li>
        <li className={`${s.linksListItem} ${listItemDisplayClass}`}>
          <NavLink
            className={navLinkClassName}
            to="spare-parts-shop"
            onClick={() => modalSwitcher && modalSwitcher()}
          >
            Магазин Запчастин
          </NavLink>
        </li>
        <li className={`${s.linksListItem} ${listItemDisplayClass}`}>
          <NavLink
            className={navLinkClassName}
            to="contacts"
            onClick={() => modalSwitcher && modalSwitcher()}
          >
            Контакти
          </NavLink>
        </li>
        <li className={`${s.linksListItem} ${listItemDisplayClass}`}>
          <NavLink
            className={navLinkClassName}
            to="certificates"
            onClick={() => modalSwitcher && modalSwitcher()}
          >
            Сертифікати
          </NavLink>
        </li>
      </ul>

      {children}
    </nav>
  );
};

MainNavigation.propTypes = {
  className: PropTypes.string,
  listItemDisplayClass: PropTypes.string.isRequired,
  modalSwitcher: PropTypes.func,
};
