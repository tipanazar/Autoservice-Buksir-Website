import { CarTuning } from "./SidebarElements/CarTuning";
import { OurFeatures } from "./SidebarElements/OurFeatures";

export const RightSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li className="sidebarElementMainBlock">
        <CarTuning isSmallScreen={false} />
      </li>
      <li className="sidebarElementMainBlock">
        <OurFeatures isSmallScreen={false} />
      </li>
    </ul>
  );
};
