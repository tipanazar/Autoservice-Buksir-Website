import { useState } from "react";

import { Button } from "../../shared/components/Button";
import { Icon } from "../../shared/components/Icon";
import { Image } from "../../shared/components/Image";
import { Contacts } from "../../shared/components/Contacts";
import { FullscreenImg } from "../../shared/components/FullscreenImg/FullscreenImg";
import autoserviceInside1 from "../../images/homePage/autoserviceInside1.jpg";
import autoserviceInside2 from "../../images/homePage/autoserviceInside2.jpg";
import autoserviceOutside from "../../images/homePage/autoserviceOutside.jpg";

import homePageMarkup from "./homePageMarkup.json";

import s from "./HomePage.module.scss";

export const HomePage = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const markup = isEnglish ? homePageMarkup.en : homePageMarkup.uk;
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const closeModal = () => {
    setFullscreenSrc(null);
  };

  return (
    <div className={s.wrapper} lang={isEnglish ? "en" : "uk"}>
      <section className={s.firstSection}>
        <div className={s.titleWrapper}>
          <h1 style={{ display: "none" }}>
            Автосервіс автомагазин в м.Славутич
          </h1>
          <h2 className={s.mainTitle}>{markup.mainTitle}</h2>
          <Button
            className={s.languageBtn}
            onClick={() => setIsEnglish(!isEnglish)}
          >
            {isEnglish ? (
              <>
                <Icon className={s.icon} iconId="uaFlag-icon" />
                Змінити Мову
              </>
            ) : (
              <>
                <Icon className={s.icon} iconId="gbFlag-icon" />
                Change Language
              </>
            )}
          </Button>
        </div>
        <ul className={s.featuresList}>
          <li className={s.featuresListItem}>{markup.featuresList[0]}</li>
          <li className={s.featuresListItem}>{markup.featuresList[1]}</li>
          <li className={s.featuresListItem}>{markup.featuresList[2]}</li>
        </ul>
        <p className={s.secondaryTitle}>{markup.secondaryTitle}</p>
      </section>
      <section className={s.secondSection}>
        <h2 className={s.descriptionTitle}>{markup.descriptionTitle}</h2>
        <p>{markup.aboutBuksir[0]}</p>
        <ul className={s.imageWrapper}>
          <li className={s.imageWrapperItem}>
            <Image
              className={s.interiorImages}
              src={autoserviceInside2}
              width="250px"
              alt="Інтер'єр автосервісу"
              onClick={() => setFullscreenSrc(autoserviceInside2)}
            />
          </li>
          <li className={s.imageWrapperItem}>
            <Image
              className={s.interiorImages}
              src={autoserviceInside1}
              width="250px"
              alt="Інтер'єр автосервісу"
              onClick={() => setFullscreenSrc(autoserviceInside1)}
            />
          </li>
        </ul>
        <p>
          {markup.aboutBuksir[1]}
          <br />
          {markup.aboutBuksir[2]}
        </p>
      </section>
      <section className={s.thirdSection}>
        <b className={s.descriptionBoldText}>
          <span className={s.descriptionBoldTextAttention}>
            {markup.aboutParking[0]}
          </span>
          {markup.aboutParking[1]}
        </b>
        <br />
        <span className={s.parkingPrice}>{markup.aboutParking[2]}</span>
        <Image
          className={s.exteriorImg}
          src={autoserviceOutside}
          width="250px"
          alt="Екстер'єр автосервісу"
          onClick={() => setFullscreenSrc(autoserviceOutside)}
        />
        <p>{markup.location}</p>
      </section>
      <Contacts isBigDesign={false} isEnglish={isEnglish} />
      {fullscreenSrc && (
        <FullscreenImg src={fullscreenSrc} closeModal={closeModal} />
      )}
    </div>
  );
};
