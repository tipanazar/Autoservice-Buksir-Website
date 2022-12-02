import { Link } from "react-router-dom";

import { Image } from "../../../../shared/components/Image";
import towSchema from "../../../../images/towSchema.jpg";

import s from "./Partners.module.scss";

export const Partners = () => {
  return (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Партнери</h4>
      <div>
        <ul className="sidebarElementList">
          <li className="sidebarElementListItem">
            <Link className="sidebarElementListItemLink">
              Кафе "Вогні Баку"
            </Link>
          </li>
          <li className="sidebarElementListItem">
            <Link className="sidebarElementListItemLink">
              Авіамодельний гурток
            </Link>
          </li>
          <li className="sidebarElementListItem">
            <Link className="sidebarElementListItemLink">
              Буксирування автомобіля
              <Image
                className="sidebarElementImage"
                src={towSchema}
                alt="Схема буксирування автомобіля"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
