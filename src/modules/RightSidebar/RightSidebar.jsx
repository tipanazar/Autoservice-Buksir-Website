import { CarTuning } from "./SidebarElements/CarTuning";
import { OurFeatures } from "./SidebarElements/OurFeatures/OurFeatures";
import { News } from "./SidebarElements/News";

export const RightSidebar = ({sidebarWrapperClass}) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li>
        <CarTuning />
      </li>
      {/* <li>
        <News />
      </li> */}
      <li>
        <OurFeatures />
      </li>
    </ul>
  );
};
