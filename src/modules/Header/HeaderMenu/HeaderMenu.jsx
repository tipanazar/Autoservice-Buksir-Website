import { memo } from "react";
import { MainNavigation } from "../../../shared/components/MainNavigation/MainNavigation";
import { Autoservice } from "../../LeftSidebar/SidebarElements/Autoservice/Autoservice";
import { CarTuning } from "../../RightSidebar/SidebarElements/CarTuning/CarTuning";
import { OurFeatures } from "../../RightSidebar/SidebarElements/OurFeatures/OurFeatures";
import { Partners } from "../../LeftSidebar/SidebarElements/Partners/Partners";

import s from "./HeaderMenu.module.scss";

const HeaderMenu = ({ modalSwitcher, isModalOpen }) => {
  // console.log("render");
  return (
    <div
      className={s.modalBodyBlock}
      style={
        isModalOpen ? { zIndex: 1, opacity: 1 } : { zIndex: -1, opacity: 0 }
      }
    >
      <MainNavigation
        modalSwitcher={modalSwitcher}
        listItemDisplayClass={s.listItemDisplayClass}
      >
        <Autoservice modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <CarTuning modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <OurFeatures modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <Partners modalSwitcher={modalSwitcher} isSmallScreen={true} />
      </MainNavigation>
    </div>
  );
};

export default memo(HeaderMenu);
