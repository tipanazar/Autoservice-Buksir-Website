import { memo } from "react";

import CarService from "./SidebarElements/CarService/CarService";
import { Other } from "./SidebarElements/Other/Other";

export const LeftSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li>
        <CarService isSmallScreen={false} />
      </li>
      <li>
        <Other isSmallScreen={false} />
      </li>
    </ul>
  );
};

export default memo(LeftSidebar);
