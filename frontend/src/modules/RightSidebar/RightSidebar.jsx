import { CarTuning } from "../../shared/components/RightSidebarElements/CarTuning";
import { News } from "../../shared/components/RightSidebarElements/News/News";
import { OurFeatures } from "../../shared/components/RightSidebarElements/OurFeatures/OurFeatures";

import s from "./RightSidebar.module.scss";

export const RightSidebar = () => {
  return (
    <div className={s.wrapper}>
      <p>LEFT SIDEBAR</p>
      <ul className={s.articlesList}>
        <li>
          <CarTuning />
        </li>
        <li>
          <News />
        </li>
        <li>
          <OurFeatures />
        </li>
      </ul>
    </div>
  );
};