import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Image } from "../../../../shared/components/Image";
import checkEngineDash from "../../../../images/sidebars/checkEngineDash.jpg";
import injector from "../../../../images/sidebars/injector.jpg";
import wheelAlignment from "../../../../images/sidebars/wheelAlignment.jpg";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const OurFeatures = ({ isSmallScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const markupParams = {
    isSmallScreen,
    isListOpen,
    isImageNeeds: true,
    data: linksData.ourFeatures,
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
        className="headerMenuOpenListBtn"
        ariaLabel="Відкрити список статей категорії наша фішка"
        style={{ color: isListOpen ? "#00009fde" : "initial" }}
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Icon
          className="headerMenuOpenListBtnIcon"
          iconId="listArrow-icon"
          height={10}
          width={10}
          style={
            isListOpen
              ? { fill: "#00009fde", transform: "rotate(-180deg)" }
              : { color: "initial", fill: "initial" }
          }
        />
        Наша Фішка
        <Icon
          className="headerMenuOpenListBtnIcon"
          iconId="listArrow-icon"
          height={10}
          width={10}
          style={
            isListOpen
              ? { fill: "#00009fde", transform: "rotate(180deg)" }
              : { color: "initial", fill: "initial" }
          }
        />
      </Button>
      <ul className="headerMenuList">{listMarkup({ ...markupParams })}</ul>
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
