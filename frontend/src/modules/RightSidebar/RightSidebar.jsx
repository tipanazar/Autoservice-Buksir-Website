import { CarTuning } from "./SidebarElements/CarTuning";
import { OurFeatures } from "./SidebarElements/OurFeatures";

export const RightSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li>
        <CarTuning isSmallScreen={false} />
      </li>
      <li>
        <OurFeatures isSmallScreen={false} />
      </li>
    </ul>
  );
};
