import { MainNavigation } from "../../../shared/components/MainNavigation/MainNavigation";
import { Autoservice } from "../../LeftSidebar/SidebarElements/Autoservice/Autoservice";
import { CarTuning } from "../../RightSidebar/SidebarElements/CarTuning/CarTuning";
import { OurFeatures } from "../../RightSidebar/SidebarElements/OurFeatures/OurFeatures";
import { Partners } from "../../LeftSidebar/SidebarElements/Partners/Partners";

import s from "./HeaderMenu.module.scss";

export const HeaderMenu = ({ modalSwitcher }) => {
  return (
    <div className={s.modalBodyBlock}>
      <MainNavigation
        modalSwitcher={modalSwitcher}
        listItemDisplayClass={s.listItemDisplayClass}
      >
        <Autoservice isSmallScreen={true} />
        <CarTuning isSmallScreen={true} />
        <OurFeatures isSmallScreen={true} />
        <Partners isSmallScreen={true} />
      </MainNavigation>
    </div>
  );
};
