import { Link } from "react-router-dom";

import { Image } from "../../../../shared/components/Image";
import checkEngineDash from "../../../../images/sidebars/checkEngineDash.jpg";
import injector from "../../../../images/sidebars/injector.jpg";
import wheelAlignment from "../../../../images/sidebars/wheelAlignment.jpg";

import styles from "./OurFeatures.module.scss";

export const OurFeatures = () => {
  return (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Наша Фішка</h4>
      <ul className="sidebarElementList">
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">
            Діллерська діагностика
            <Image
              className="sidebarElementImage"
              src={checkEngineDash}
              alt="Картинка"
            />
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">
            Діллерська діагностика
            <Image
              className="sidebarElementImage"
              src={injector}
              alt="Картинка"
            />
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">
            Діллерська діагностика
            <Image
              className="sidebarElementImage"
              src={wheelAlignment}
              alt="Картинка"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
