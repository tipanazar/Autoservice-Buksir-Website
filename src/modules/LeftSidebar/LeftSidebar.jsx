import { CarService } from "./SidebarElements/CarService";
import { Partners } from "./SidebarElements/Partners/Partners";

export const LeftSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li>
        <CarService />
      </li>
      <li>
        <Partners />
      </li>
    </ul>
  );
};
