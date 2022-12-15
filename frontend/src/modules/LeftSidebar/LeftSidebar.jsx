import { CarService } from "./SidebarElements/CarService";
import { Other } from "./SidebarElements/Other/Other";

export const LeftSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li>
        <CarService />
      </li>
      <li>
        <Other />
      </li>
    </ul>
  );
};
