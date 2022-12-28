import { CarService } from "./SidebarElements/CarService";
import { Other } from "./SidebarElements/Other";

export const LeftSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li className="sidebarElementMainBlock">
        <CarService isSmallScreen={false} />
      </li>
      <li className="sidebarElementMainBlock">
        <Other isSmallScreen={false} />
      </li>
    </ul>
  );
};
