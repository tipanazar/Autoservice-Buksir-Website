import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../shared/components/Button/Button";
import { Image } from "../../shared/components/Image/Image";
import { Icon } from "../../shared/components/Icon/Icon";
import { HeaderMenu } from "../../modules/Header/HeaderMenu";


import s from "./Header.module.scss";
import { HeaderMarkup } from "./HeaderMarkup/HeaderMarkup";

const body = document.querySelector("body");
const modalRoot = document.querySelector("div#modalRoot");

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalSwitcher = () => {
    if (isModalOpen) {
      modalRoot.style.visibility = "hidden";
      body.style.overflow = "auto"
      setIsModalOpen(false);
      return;
    }
    
    if (!isModalOpen) {
      modalRoot.style.visibility = "visible";
      body.style.overflow = "hidden"
      document.documentElement.scrollTop = 0
      setIsModalOpen(true);
      return;
    }
  };

  return (
    <div className={s.wrapper}>
      <HeaderMarkup/>
      <Button className={s.toggleMenuButton} onClick={modalSwitcher}>
        <Icon
          className={s.toggleMenuButtonIcon}
          iconId="openModal-icon"
          fill="#555555"
        />
      </Button>
      {isModalOpen && <HeaderMenu modalSwitcher={modalSwitcher} />}
    </div>
  );
};
