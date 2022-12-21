import { CarService } from "./SidebarElements/CarService";
import { Other } from "./SidebarElements/Other";

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
