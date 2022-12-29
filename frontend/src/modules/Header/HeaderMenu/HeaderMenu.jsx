import { memo } from "react";

import { MainNavigation } from "../../../shared/components/MainNavigation/MainNavigation";
import { CarService } from "../../LeftSidebar/SidebarElements/CarService";
import { CarTuning } from "../../RightSidebar/SidebarElements/CarTuning/CarTuning";
import { OurFeatures } from "../../RightSidebar/SidebarElements/OurFeatures/OurFeatures";
import { Other } from "../../LeftSidebar/SidebarElements/Other/Other";

import s from "./HeaderMenu.module.scss";
import { Modal } from "../../../shared/components/Modal/Modal";

const modalRoot = document.querySelector("div#modalRoot");
const HeaderMenu = ({ modalSwitcher, isModalOpen }) => {
  modalRoot.style.zIndex = isModalOpen ? 2 : -1;
  return (
    <Modal modalWrapperClass={s.modalBodyBlock}>
      <MainNavigation
        modalSwitcher={modalSwitcher}
        listItemDisplayClass={s.listItemDisplayClass}
      >
        <CarService modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <CarTuning modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <OurFeatures modalSwitcher={modalSwitcher} isSmallScreen={true} />
        <Other modalSwitcher={modalSwitcher} isSmallScreen={true} />
      </MainNavigation>
    </Modal>
  );
};

export default memo(HeaderMenu);
