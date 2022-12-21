import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";
import { getTemplates } from "../../../../redux/articles/articlesSelectors";

export const CarService = ({ modalSwitcher, isSmallScreen }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [markup, setMarkup] = useState([]);
  const templates = useSelector(getTemplates);
  useEffect(() => {
    if (templates && templates["car-service"].length) {
      setMarkup(listMarkup({ ...markupParams }));
    }
    //eslint-disable-next-line
  }, [isListOpen, templates]);

  const markupParams = {
    isSmallScreen,
    isListOpen,
    modalSwitcher,
    data: templates && templates["car-service"],
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
      <ul className="sidebarElementList">{markup}</ul>
    </div>
  );
};

CarService.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};
