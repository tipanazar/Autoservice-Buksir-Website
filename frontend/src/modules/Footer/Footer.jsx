import { Link } from "react-router-dom";

import { Image } from "../../shared/components/Image";

import headerLogo from "../../images/header/headerLogo.webp";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.websiteInfoBlock}>
        <p className={s.copyrightInfo}>
          &#169;&nbsp;2012&nbsp;-&nbsp;{new Date().getFullYear()}
          &nbsp; &#34;Буксир&#34;&nbsp;-&nbsp;Автосервис,&nbsp;автомагазин
          в&nbsp;м.Славутич.
        </p>
        <p>Сайт використовується виключно для інформації&nbsp;- як візитка.</p>
      </div>
      <Link className={s.logoLink} to="/">
        <Image
          className={s.footerLogo}
          src={headerLogo}
          alt="Лого сайту"
          width="100px"
        />
      </Link>
    </footer>
  );
};
