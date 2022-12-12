import { Autoservice } from "./SidebarElements/Autoservice";
import { Partners } from "./SidebarElements/Partners/Partners";

export const LeftSidebar = ({ sidebarWrapperClass }) => {
  return (
    <ul className={sidebarWrapperClass}>
      <li>
        <Autoservice />
      </li>
      <li>
        <Partners />
      </li>
    </ul>
  );
};
