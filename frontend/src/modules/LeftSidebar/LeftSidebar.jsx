// import { OurFeatures } from "./SidebarElements/OurFeatures";
import { Autoservice } from "./SidebarElements/Autoservice";
import { Partners } from "./SidebarElements/Partners";

import s from "./LeftSidebar.module.scss";

export const LeftSidebar = () => {
  return (
    <ul className={s.wrapper}>
      <li>
        <Autoservice />
      </li>
      <li>{/* <OurFeatures /> */}</li>
      <li>
        <Partners />
      </li>
    </ul>
  );
};
