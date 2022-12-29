import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";
import { getTemplates } from "../../../../redux/articles/articlesSelectors";

export const OurFeatures = ({ modalSwitcher, isSmallScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [markup, setMarkup] = useState([]);
  const templates = useSelector(getTemplates);

  useEffect(() => {
    if (templates && templates["our-features"].length) {
      setMarkup(listMarkup({ ...markupParams }));
    }
    //eslint-disable-next-line
  }, [isListOpen, templates]);

  const markupParams = {
    isSmallScreen,
    isListOpen,
    isImageNeeds: true,
    modalSwitcher,
    data: templates && templates["our-features"],
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
    <>
      <h4 className="sidebarElementTitle">Наша Фішка</h4>
      <ul className="sidebarElementList">{markup}</ul>
    </>
  );
};

OurFeatures.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
