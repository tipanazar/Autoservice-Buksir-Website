import { useState } from "react";

import { Button } from "../../shared/components/Button";
import { Icon } from "../../shared/components/Icon";
import { Image } from "../../shared/components/Image";
import { Contacts } from "../../shared/components/Contacts";
import autoserviceInside1 from "../../images/homePage/autoserviceInside1.jpg";
import autoserviceInside2 from "../../images/homePage/autoserviceInside2.jpg";
import autoserviceOutside from "../../images/homePage/autoserviceOutside.jpg";

import homeMarkup from "./homeMarkup.json";

import s from "./Home.module.scss";

export const Home = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  // console.log(isEngVersion)
  const markup = isEnglish ? homeMarkup.en : homeMarkup.uk;
  return (
    <div className={s.description}>
      <div className={s.firstPart}>
        <div className={s.titleWrapper}>
          <h1 className={s.mainTitle}>{markup.mainTitle}</h1>
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
        <h4 className={s.secondaryTitle}>{markup.secondaryTitle}</h4>
        <h3 className={s.descriptionTitle}>{markup.descriptionTitle}</h3>
        <p>{markup.aboutBuksir[0]}</p>
        <div className={s.imageWrapper}>
          <Image
            className={s.interiorImages}
            src={autoserviceInside2}
            width="250px"
            alt="Інтер'єр автосервісу"
          />
          <Image
            className={s.interiorImages}
            src={autoserviceInside1}
            width="250px"
            alt="Інтер'єр автосервісу"
          />
        </div>
        <p>
          {markup.aboutBuksir[1]}
          <br />
          {markup.aboutBuksir[2]}
        </p>
      </div>
      <div className={s.secondPart}>
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
        />
        <p>{markup.location}</p>
      </div>
      <div className={s.thirdPart}>
        <Contacts isBigDesign={false} isEnglish={isEnglish} />
      </div>
    </div>
  );
};
