import { memo } from "react";

import { MainNavigation } from "../../../shared/components/MainNavigation/MainNavigation";
import  CarService  from "../../LeftSidebar/SidebarElements/CarService/CarService";
import { CarTuning } from "../../RightSidebar/SidebarElements/CarTuning/CarTuning";
import { OurFeatures } from "../../RightSidebar/SidebarElements/OurFeatures/OurFeatures";
import { Other } from "../../LeftSidebar/SidebarElements/Other/Other";

import s from "./HeaderMenu.module.scss";

const HeaderMenu = ({ modalSwitcher, isModalOpen }) => {
    console.log("menu");
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
        <CarService modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <CarTuning modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <OurFeatures modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <Other modalSwitcher={modalSwitcher} isSmallScreen={true} />
      </MainNavigation>
    </div>
  );
};

export default memo(HeaderMenu);
