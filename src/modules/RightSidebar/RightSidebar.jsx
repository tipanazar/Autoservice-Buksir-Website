import { CarTuning } from "./SidebarElements/CarTuning";
import { OurFeatures } from "./SidebarElements/OurFeatures";
import { News } from "./SidebarElements/News";

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
