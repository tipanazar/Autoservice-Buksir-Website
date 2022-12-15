import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import towSchema from "../../../../images/sidebars/towSchema.jpg";
import { partners } from "../../../../shared/json/sidebarAndHeaderMenuLinks";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const Other = ({ modalSwitcher, isSmallScreen = false }) => {
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
    data: partners,
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
        Інше
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
      <h4 className="sidebarElementTitle">Інше</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

Other.propTypes = {
  isSmallScreen: PropTypes.bool,
};
