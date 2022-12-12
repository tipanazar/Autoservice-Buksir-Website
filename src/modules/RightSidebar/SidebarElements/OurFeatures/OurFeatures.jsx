import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import checkEngineDash from "../../../../images/sidebars/checkEngineDash.jpg";
import injector from "../../../../images/sidebars/injector.jpg";
import wheelAlignment from "../../../../images/sidebars/wheelAlignment.jpg";
import { ourFeatures } from "../../../../shared/json/sidebarAndHeaderMenuLinks";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const OurFeatures = ({ modalSwitcher, isSmallScreen = false }) => {
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
    isImageNeeds: true,
    modalSwitcher,
    data: ourFeatures,
    imageParams: [
      {
        src: checkEngineDash,
        alt: "Діагностика",
        width: "140px",
      },
      {
        src: injector,
        alt: "Промивання форсунок",
        width: "140px",
      },
      {
        src: wheelAlignment,
        alt: "Схема",
        width: "140px",
      },
    ],
  };

  return isSmallScreen ? (
    <>
      <Button
        className={
          isListOpen ? "headerMenuOpenListBtn" : "headerMenuClosedListBtn"
        }
        ariaLabel="Відкрити список статей категорії наша фішка"
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Icon
          className="headerMenuListBtnIcon"
          iconId="listArrow-icon"
          height={15}
          width={15}
        />
        Наша Фішка
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
      <h4 className="sidebarElementTitle">Наша Фішка</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

OurFeatures.propTypes = {
  isSmallScreen: PropTypes.bool,
};
