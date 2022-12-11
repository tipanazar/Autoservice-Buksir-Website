import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";

export const Autoservice = ({ modalSwitcher, isSmallScreen = false }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   location.pathname.split("/")[1] === "car-service" && setIsListOpen(true);
  // }, [location.pathname]);
  const markupParams = {
    isSmallScreen,
    isListOpen,
    modalSwitcher,
    data: linksData.autoservice,
  };
  return isSmallScreen ? (
    <>
      <Button
        className={
          isListOpen ? "headerMenuOpenListBtn" : "headerMenuClosedListBtn"
        }
        ariaLabel="Відкрити список статей категорії автосервис"
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Icon
          className="headerMenuListBtnIcon"
          iconId="listArrow-icon"
          height={15}
          width={15}
        />
        Автосервіс
        <Icon
          className="headerMenuListBtnIcon"
          iconId="listArrow-icon"
          height={15}
          width={15}
        />
      </Button>
      <ul className="headerMenuList">{listMarkup({ ...markupParams })}</ul>
    </>
  ) : (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Автосервіс</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

Autoservice.propTypes = {
  isSmallScreen: PropTypes.bool,
};
