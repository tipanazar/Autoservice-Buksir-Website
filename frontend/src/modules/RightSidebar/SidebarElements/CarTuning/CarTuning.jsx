import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";
import { getTemplates } from "../../../../redux/articles/articlesSelectors";

export const CarTuning = ({ modalSwitcher, isSmallScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [markup, setMarkup] = useState([]);
  const templates = useSelector(getTemplates);
  
  useEffect(() => {
    if (templates && templates["car-tuning"].length) {
      setMarkup(listMarkup({ ...markupParams }));
    }
    //eslint-disable-next-line
  }, [isListOpen, templates]);

  const markupParams = {
    isSmallScreen,
    isListOpen,
    modalSwitcher,
    data: templates && templates["car-tuning"],
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
      <ul className="sidebarElementList">{markup}</ul>
    </div>
  );
};

CarTuning.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
