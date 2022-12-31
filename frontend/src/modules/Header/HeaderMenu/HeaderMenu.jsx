import { memo, useEffect } from "react";
import { createPortal } from "react-dom";

import { MainNavigation } from "../../../shared/components/MainNavigation/MainNavigation";
import { CarService } from "../../LeftSidebar/SidebarElements/CarService";
import { CarTuning } from "../../RightSidebar/SidebarElements/CarTuning/CarTuning";
import { OurFeatures } from "../../RightSidebar/SidebarElements/OurFeatures/OurFeatures";
import { Other } from "../../LeftSidebar/SidebarElements/Other/Other";
import {
  getBodyElement,
  getHeaderModalRoot,
} from "../../../shared/hooks/getDomElement";

import s from "./HeaderMenu.module.scss";
import { useSelector } from "react-redux";
import { getGlobalArticlesState } from "../../../redux/articles/articlesSelectors";
import { Loader } from "../../../shared/components/Loader";
import { ErrorScreen } from "../../../shared/components/ErrorScreen/ErrorScreen";

const headerModalRoot = getHeaderModalRoot();
const body = getBodyElement();
const HeaderMenu = ({ modalSwitcher, isModalOpen }) => {
  const { templatesError, isTemplatesLoading } = useSelector(getGlobalArticlesState);
  useEffect(() => {
    if (isModalOpen) {
      body.style.overflow = "hidden";
      headerModalRoot.style.zIndex = 2;
      headerModalRoot.style.opacity = 1;
    } else if (!isModalOpen) {
      body.style.overflow = "auto";
      headerModalRoot.style.zIndex = -1;
      headerModalRoot.style.opacity = 0;
    }
    // eslint-disable-next-line
  }, [isModalOpen]);

  return createPortal(
    <div className={s.modalBodyBlock}>
      <MainNavigation
        modalSwitcher={modalSwitcher}
        listItemDisplayClass={s.listItemDisplayClass}
      >
        {isTemplatesLoading ? (
          <div style={{ position: "relative", height: "300px" }}>
            <Loader bottom={0} />
          </div>
        ) : templatesError ? (
          <ErrorScreen
            text={`Помилка завантаження статей: ${templatesError}`}
          />
        ) : (
          <>
            <CarService modalSwitcher={modalSwitcher} isSmallScreen={true} />
            <CarTuning modalSwitcher={modalSwitcher} isSmallScreen={true} />
            <OurFeatures modalSwitcher={modalSwitcher} isSmallScreen={true} />
            <Other modalSwitcher={modalSwitcher} isSmallScreen={true} />
          </>
        )}
      </MainNavigation>
    </div>,
    headerModalRoot
  );
};

export default memo(HeaderMenu);
