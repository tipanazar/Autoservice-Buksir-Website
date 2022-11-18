import { Link } from "react-router-dom";

import { Image } from "../../Image/Image";
import checkEngineDash from "../../../../images/checkEngineDash.jpg";
import injector from "../../../../images/injector.jpg";
import wheelAlignment from "../../../../images/wheelAlignment.jpg";

import styles from "./OurFeatures.module.scss";

export const OurFeatures = () => {
  return (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Наша Фішка</h4>
      <ul className="sidebarElementList">
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">
            Діллерська діагностика
            <Image className="sidebarElementImage" src={checkEngineDash} />
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">
            Діллерська діагностика
            <Image className="sidebarElementImage" src={injector} />
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link className="sidebarElementListItemLink">
            Діллерська діагностика
            <Image className="sidebarElementImage" src={wheelAlignment} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
