import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { Button } from "../../../shared/components/Button";
import { Link } from "react-router-dom";

import s from "./HeaderMenu.module.scss";
import { useState } from "react";
import { Icon } from "../../../shared/components/Icon/Icon";
import { HeaderMarkup } from "../HeaderMarkup/HeaderMarkup";

const modalRoot = document.querySelector("div#modalRoot");

const navLinkClassName = ({ isActive }) =>
  isActive ? s.activeLink : s.inactiveLink;

export const HeaderMenu = ({ modalSwitcher }) => {
  const [choosedListId, setChoosedListId] = useState(null);
  // console.log('render')

  const choosedListIdHandler = (id) => {
    choosedListId === id ? setChoosedListId(null) : setChoosedListId(id);
  };

  return createPortal(
    <div className={s.modalBodyBlock}>
      {/* <Button className={s.toggleMenuButton} onClick={modalSwitcher}>
        <Icon
          className={s.toggleMenuButtonIcon}
          iconId="closeModal-icon"
          fill="#555555"
        />
      </Button> */}
      <div className={s.headerWrapper}>
        <HeaderMarkup modalSwitcher={modalSwitcher} />
        <Button className={s.toggleMenuButton} onClick={modalSwitcher}>
          <Icon
            className={s.toggleMenuButtonIcon}
            iconId="closeModal-icon"
            fill="#555555"
          />
        </Button>
      </div>
      <nav className={s.mainNavigationBlock}>
        <NavLink
          className={navLinkClassName}
          to="/"
          onClick={() => modalSwitcher()}
        >
          Головна
        </NavLink>
        <NavLink
          className={navLinkClassName}
          to="contacts"
          onClick={() => modalSwitcher()}
        >
          Контакти
        </NavLink>
        <NavLink
          className={navLinkClassName}
          to="vacancies"
          onClick={() => modalSwitcher()}
        >
          Вакансіі
        </NavLink>
        <NavLink
          className={navLinkClassName}
          to="certificates"
          onClick={() => modalSwitcher()}
        >
          Сертифікати
        </NavLink>
        <Button onClick={() => choosedListIdHandler(0)}>Автосервіс</Button>
        <ul
          className={s.list}
          style={
            choosedListId === 0
              ? { height: "fit-content", visibility: "visible" }
              : // ? { height: 500, visibility: "visible" }
                { height: 0, visibility: "hidden" }
          }
        >
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
          <li className={s.listItem}>
            <Link className={s.listItemLink}>Магазин запчастей</Link>
          </li>
        </ul>
      </nav>
    </div>,
    modalRoot
  );
};

// <h4 className={s.sidebarElementTitle}>Автосервіс</h4>
// <ul className={s.sidebarElementList}>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>
//       Магазин запчастей
//     </Link>
//   </li>
// </ul>
// <h4 className={s.sidebarElementTitle}>Тюнинг автомобілів</h4>
// <ul className={s.sidebarElementList}>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
//   <li className={s.sidebarElementListItem}>
//     <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
//   </li>
// </ul>
