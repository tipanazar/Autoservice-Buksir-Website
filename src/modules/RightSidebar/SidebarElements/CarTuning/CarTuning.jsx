import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";

export const CarTuning = ({ modalSwitcher, isSmallScreen = false }) => {
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
    data: linksData.carTunning,
  };
  
  return isSmallScreen ? (
    <>
      <Button
        className={
          isListOpen ? "headerMenuOpenListBtn" : "headerMenuClosedListBtn"
        }
        ariaLabel="Відкрити список статей категорії тюнинг автомобілів"
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Icon
          className="headerMenuListBtnIcon"
          iconId="listArrow-icon"
          height={15}
          width={15}
        />
        Тюнинг автомобілів
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
      <h4 className="sidebarElementTitle">Тюнинг автомобілів</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

CarTuning.propTypes = {
  isSmallScreen: PropTypes.bool,
};
