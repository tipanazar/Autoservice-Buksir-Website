import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const CarTuning = ({ isSmallScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const markupParams = {
    isSmallScreen,
    isListOpen,
    data: linksData.carTunning,
  };
  return isSmallScreen ? (
    <>
      <Button
        className="headerMenuOpenListBtn"
        ariaLabel="Відкрити список статей категорії тюнинг автомобілів"
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
        Тюнинг автомобілів
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
      <h4 className="sidebarElementTitle">Тюнинг автомобілів</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

CarTuning.propTypes = {
  isSmallScreen: PropTypes.bool,
};
