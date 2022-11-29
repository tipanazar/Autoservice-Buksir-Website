import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../shared/components/Button";
import { Link } from "react-router-dom";

import s from "./HeaderMenu.module.scss";
import { Icon } from "../../../shared/components/Icon/Icon";

const testArr = [
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
];

const linksArr = [
  { name: "Головна", path: "/" },
  { name: "Контакти", path: "contacts" },
  { name: "Вакансіі", path: "vacancies" },
  { name: "Сертифікати", path: "certificates" },
];

const navLinkClassName = ({ isActive }) =>
  isActive ? s.activeLink : s.inactiveLink;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const HeaderMenu = ({ modalSwitcher }) => {
  const [choosedListId, setChoosedListId] = useState(null);

  const choosedListIdHandler = (id) => {
    choosedListId === id ? setChoosedListId(null) : setChoosedListId(id);
  };

  const linksMarkup = linksArr.map((item) => {
    return (
      <NavLink
        className={navLinkClassName}
        to={item.path}
        onClick={() => modalSwitcher()}
      >
        {item.name}
      </NavLink>
    );
  });

  const listMarkup = testArr.map((item, idx) => {
    return (
      <li
        className={s.listItem}
        key={idx}
        style={
          choosedListId === 0
            ? { opacity: 1, lineHeight: 1, visibility: "visible" }
            : { opacity: 0, lineHeight: 0, visibility: "hidden" }
        }
      >
        <Link className={s.listItemLink}>{item}</Link>
      </li>
    );
  });

  return (
    <div className={s.modalBodyBlock}>
      <nav className={s.mainNavigationBlock}>
        {linksMarkup}
        <Button
          className={s.listButton}
          style={{ color: choosedListId === 0 ? "#00009fde" : "initial" }}
          onClick={() => choosedListIdHandler(0)}
        >
          <Icon
            className={s.listButtonIcon}
            iconId="listArrow-icon"
            height={10}
            width={10}
            style={
              choosedListId === 0
                ? { fill: "#00009fde", transform: "rotate(-180deg)" }
                : { color: "initial", fill: "initial" }
            }
          />
          Автосервіс
          <Icon
            className={s.listButtonIcon}
            iconId="listArrow-icon"
            height={10}
            width={10}
            style={
              choosedListId === 0
                ? { fill: "#00009fde", transform: "rotate(180deg)" }
                : { color: "initial", fill: "initial" }
            }
          />
        </Button>
        <ul className={s.list}>{listMarkup}</ul>
        {/* <ul className={s.list}>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>sfasfasfasf</Link>
          </li>
        </ul> */}
        <Button
          className={s.listButton}
          onClick={() => choosedListIdHandler(0)}
        >
          Автосервіс
        </Button>
      </nav>
    </div>
  );
};
