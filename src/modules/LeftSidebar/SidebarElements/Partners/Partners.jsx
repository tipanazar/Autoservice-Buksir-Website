import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Image } from "../../../../shared/components/Image";
import towSchema from "../../../../images/sidebars/towSchema.jpg";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const Partners = ({ isSmallScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const markupParams = {
    isSmallScreen,
    isListOpen,
    isImageNeeds: true,
    data: linksData.partners,
    imageParams: [
      null,
      null,
      {
        src: towSchema,
        alt: "Схема буксирування",
        width: "140px",
      },
    ],
  };

  return isSmallScreen ? (
    <>
      <Button
        className="headerMenuOpenListBtn"
        ariaLabel="Відкрити список статей категорії партнери"
        style={{ color: isListOpen ? "#00009fde" : "initial" }}
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Icon
          className="headerMenuOpenListBtnIconc"
          iconId="listArrow-icon"
          height={10}
          width={10}
          style={
            isListOpen
              ? { fill: "#00009fde", transform: "rotate(-180deg)" }
              : { color: "initial", fill: "initial" }
          }
        />
        Партнери
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
      </Button>
      <ul className="headerMenuList">{listMarkup({ ...markupParams })}</ul>
    </>
  ) : (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Партнери</h4>
      <div>
        <ul className="sidebarElementList">
          {listMarkup({ ...markupParams })}
        </ul>
      </div>
    </div>
  );
};

Partners.propTypes = {
  isSmallScreen: PropTypes.bool,
};
