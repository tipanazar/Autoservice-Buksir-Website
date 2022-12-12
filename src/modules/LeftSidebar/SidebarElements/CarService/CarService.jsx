import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks";

export const CarService = ({ modalSwitcher, isSmallScreen = false }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [markup, setMarkup] = useState([]);
  useEffect(() => {
    if (isSmallScreen) {
      setMarkup(listMarkup({ ...markupParams }));
    }
    //eslint-disable-next-line
  }, [isListOpen]);

  const markupParams = {
    isSmallScreen,
    isListOpen,
    modalSwitcher,
    data: linksData.carService,
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
      <ul className="headerMenuList">{markup}</ul>
    </>
  ) : (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Автосервіс</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

CarService.propTypes = {
  isSmallScreen: PropTypes.bool,
};
