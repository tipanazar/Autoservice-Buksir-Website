import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../../shared/components/Button";
import { Link } from "react-router-dom";

import s from "./HeaderMenu.module.scss";
import { Icon } from "../../../shared/components/Icon/Icon";
import { MainNavigation } from "../../../shared/components/MainNavigation/MainNavigation";

const testArr = [
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
  "Магазин запчастей",
];

const navLinkClassName = ({ isActive }) =>
  isActive ? s.activeLink : s.inactiveLink;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export const HeaderMenu = ({ modalSwitcher }) => {
  const [choosedListId, setChoosedListId] = useState(null);

  const choosedListIdHandler = (id) => {
    choosedListId === id ? setChoosedListId(null) : setChoosedListId(id);
  };

  const listMarkup = testArr.map((item, idx) => {
    return (
      <li
        className={s.listItem}
        key={idx}
        style={
          choosedListId === 0
            ? {
                opacity: 1,
                visibility: "visible",
                marginBottom: 8,
              }
            : {
                opacity: 0,
                visibility: "hidden",
                marginBottom: 0,
              }
        }
      >
        <Link
          className={s.listItemLink}
          style={
            choosedListId === 0
              ? {
                  lineHeight: 1,
                  padding: "5px 0",
                }
              : {
                  lineHeight: 0,
                  padding: 0,
                }
          }
        >
          {item}
        </Link>
      </li>
    );
  });

  return (
    <div className={s.modalBodyBlock}>
      <MainNavigation
        className={s.mainNavigationBlock}
        modalSwitcher={modalSwitcher}
        listItemDisplayClass={s.listItemDisplayClass}
      >
        <Button
          className={s.listButton}
          ariaLabel="Відкрити список статей категорії автосервис"
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
          ariaLabel="Відкрити список статей категорії автосервис"
          onClick={() => choosedListIdHandler(0)}
        >
          Автосервіс
        </Button>
      </MainNavigation>
    </div>
  );
};
