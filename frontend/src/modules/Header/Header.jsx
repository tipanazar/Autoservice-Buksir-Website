import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../shared/components/Button/Button";
import { Image } from "../../shared/components/Image/Image";
import { Icon } from "../../shared/components/Icon/Icon";
import HeaderMenu from "../../modules/Header/HeaderMenu/HeaderMenu";
import headerLogo from "../../images/header/headerLogo.webp";
import headerMufflerGif from "../../images/header/headerMuffler.gif";
import headerMuffler from "../../images/header/headerMuffler.webp";

import s from "./Header.module.scss";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carMufflerToggler, setCarMufflerToggler] = useState(false);

  const modalSwitcher = useCallback(() => {
    if (isModalOpen) {
      setIsModalOpen(false);
      return;
    }

    if (!isModalOpen) {
      document.documentElement.scrollTop = 0;
      setIsModalOpen(true);
      return;
    }
  }, [isModalOpen]);

  return (
    <>
      <header className={s.wrapper}>
        <Link
          className={s.headerLogoLink}
          to="/"
          onClick={() => isModalOpen && modalSwitcher()}
        >
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
          ariaLabel={isModalOpen ? "Закрити меню" : "Відкрити меню"}
          onClick={modalSwitcher}
        >
          <Icon
            className={s.toggleMenuButtonIcon}
            iconId={isModalOpen ? "closeModal-icon" : "openModal-icon"}
            fill="#555555"
          />
        </Button>
      </header>
      <HeaderMenu modalSwitcher={modalSwitcher} isModalOpen={isModalOpen} />
    </>
  );
};
