import { Link } from "react-router-dom";

import styles from "./CarTuning.module.scss";

export const CarTuning = () => {
  return (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Тюнинг автомобілів</h4>
      <ul className="sidebarElementList">
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">Подсветка днища</Link>
        </li>
      </ul>
    </div>
  );
};
