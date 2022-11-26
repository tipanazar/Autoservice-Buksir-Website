import { useState } from "react";
import { Link } from "react-router-dom";

import { Image } from "../../../shared/components/Image";
import { Button } from "../../../shared/components/Button";
import { Icon } from "../../../shared/components/Icon/Icon";
import headerLogo from "../../../images/headerLogo.png";
// import headerMufflerGif from "../../images/headerMuffler.gif";
// import headerMuffler from "../../images/headerMuffler.jpg";
import headerMufflerGif from "../../../images/headerMuffler2.gif";
import headerMuffler from "../../../images/headerMuffler2.jpg";

import s from "./HeaderMarkup.module.scss";

export const HeaderMarkup = () => {
  const [carMufflerToggler, setCarMufflerToggler] = useState(false);
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
    </div>
  );
};
