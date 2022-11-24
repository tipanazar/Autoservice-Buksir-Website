import { CarTuning } from "../../shared/components/RightSidebarElements/CarTuning";
import { OurFeatures } from "../../shared/components/RightSidebarElements/OurFeatures";
import { News } from "../../shared/components/RightSidebarElements/News/News";

import s from "./RightSidebar.module.scss";

export const RightSidebar = () => {
  return (
    <ul className={s.wrapper}>
      {/* <li>
        <Autoservice />
      </li> */}
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
  );
};
