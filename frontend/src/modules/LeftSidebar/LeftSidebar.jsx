import { OurFeatures } from "../../shared/components/RightSidebarElements/OurFeatures/OurFeatures";
import { Autoservice } from "../../shared/components/LeftSidebarElements/Autoservice";
import { Partners } from "../../shared/components/LeftSidebarElements/Partners";

import s from "./LeftSidebar.module.scss";

export const LeftSidebar = () => {
  return (
      <ul className={s.wrapper}>
        <li>
        <Autoservice />
        </li>
        <li>
        {/* <OurFeatures /> */}
        </li>
        <li>
          <Partners />
        </li>
      </ul>
  );
};
