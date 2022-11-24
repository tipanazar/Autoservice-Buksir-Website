import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../shared/components/Button/Button";
import { Image } from "../../shared/components/Image/Image";
import { Icon } from "../../shared/components/Icon/Icon";
import { HeaderMenu } from "../../modules/Header/HeaderMenu";
import headerLogo from "../../images/headerLogo.png";

// import headerMufflerGif from "../../images/headerMuffler.gif";
// import headerMuffler from "../../images/headerMuffler.jpg";
import headerMufflerGif from "../../images/headerMuffler2.gif";
import headerMuffler from "../../images/headerMuffler2.jpg";

import s from "./Header.module.scss";

const modalRoot = document.querySelector("div#modalRoot");

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carMufflerToggler, setCarMufflerToggler] = useState(false);
  const funcRef = useRef();

  const modalSwitcher = () => {
    if (isModalOpen) {
      modalRoot.style.zIndex = -1;
      setIsModalOpen(false);
      return;
    }

    if (!isModalOpen) {
      modalRoot.style.zIndex = 2;
      setIsModalOpen(true);
      return;
    }
  };

  return (
    <div className={s.wrapper}>
      <Link className={s.headerLogoLink} to="/">
        <Image
          className={s.headerLogo}
          src={headerLogo}
          alt="Header Logo"
          height="55px"
        />
      </Link>
      <div className={s.gifBlock}>
        <div className={s.gifWrapper}>
          <Image
            className={s.gif}
            src={carMufflerToggler ? headerMufflerGif : headerMuffler}
            alt="Car Muffler Image"
          />
        </div>
        <Button
          className={s.playGifBtn}
          onClick={() => setCarMufflerToggler(!carMufflerToggler)}
        >
          <p>Ремонтуємо все що на колесах!</p>
          <Icon
            className={s.playGifIcon}
            iconId="headerGifButton-icon"
            width={30}
            height={30}
            fill="#ffc66d"
          />
        </Button>
      </div>
      <Button
        className={s.toggleMenuButton}
        onClick={
          isModalOpen ? () => funcRef.current("closeModal") : modalSwitcher
        }
      >
        <Icon
          className={s.toggleMenuButtonIcon}
          iconId={isModalOpen ? "closeModal-icon" : "openModal-icon"}
          fill="#555555"
        />
      </Button>
      {isModalOpen && (
        <HeaderMenu funcRef={funcRef} modalSwitcher={modalSwitcher} />
      )}
    </div>
  );
};
