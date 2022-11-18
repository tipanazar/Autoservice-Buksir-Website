import { Autoservice } from "../../shared/components/LeftSidebarElements/Autoservice";
import { Contacts } from "../../shared/components/LeftSidebarElements/Contacts";
import { Partners } from "../../shared/components/LeftSidebarElements/Partners";

import s from "./LeftSidebar.module.scss";

export const LeftSidebar = () => {
  return (
    <div className={s.wrapper}>
      <ul>
        <li>
          <Autoservice />
        </li>
        {/* <li>
          <Contacts />
        </li> */}
        <li>
          <Partners />
        </li>
      </ul>
    </div>
  );
};
