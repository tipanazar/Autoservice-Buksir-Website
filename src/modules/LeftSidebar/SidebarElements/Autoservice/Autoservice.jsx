import { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../../shared/components/Button";
import { Icon } from "../../../../shared/components/Icon/Icon";
import linksData from "../../../../shared/json/sidebarAndHeaderMenuLinks.json";
import { listMarkup } from "../../../../shared/hooks/sidebarAndHeaderMenuLinksMarkup";

export const Autoservice = ({ isSmallScreen }) => {
  // console.log(linksData.autoservice);
  const [isListOpen, setIsListOpen] = useState(false);
  const markupParams = {
    isSmallScreen,
    isListOpen,
    data: linksData.autoservice,
  };
  return isSmallScreen ? (
    <>
      <Button
        className="headerMenuOpenListBtn"
        ariaLabel="Відкрити список статей категорії автосервис"
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
        Автосервіс
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
      <h4 className="sidebarElementTitle">Автосервіс</h4>
      <ul className="sidebarElementList">{listMarkup({ ...markupParams })}</ul>
    </div>
  );
};

Autoservice.propTypes = {
  isSmallScreen: PropTypes.bool,
};
