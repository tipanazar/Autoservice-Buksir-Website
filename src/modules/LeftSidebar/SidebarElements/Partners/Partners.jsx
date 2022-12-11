import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import towSchema from "../../../../images/sidebars/towSchema.jpg";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const Partners = ({ isSmallScreen = false }) => {
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
        className={
          isListOpen ? "headerMenuOpenListBtn" : "headerMenuClosedListBtn"
        }
        ariaLabel="Відкрити список статей категорії партнери"
        onClick={() => setIsListOpen(!isListOpen)}
      >
        <Icon
          className="headerMenuListBtnIcon"
          iconId="listArrow-icon"
          height={15}
          width={15}
        />
        Партнери
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
