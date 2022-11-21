import { useState } from "react";

import { Button } from "../../shared/components/Button";
import { Icon } from "../../shared/components/Icon";
import { Image } from "../../shared/components/Image";
import autoserviceInside1 from "../../images/autoserviceInside1.jpg";
import autoserviceInside2 from "../../images/autoserviceInside2.jpg";
import autoserviceOutside from "../../images/autoserviceOutside.jpg";

import s from "./Home.module.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  const [language, setLanguage] = useState(false);
  // console.log(isEngVersion)
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <h1 className={s.mainTitle}>
          Автосервіс у м.Славутич - автомобіль скаже Вам "ДЯКУЮ"!
        </h1>
        <Button
          className={s.languageBtn}
          onClick={() => setLanguage(!language)}
        >
          {language ? (
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
        <li className={s.featuresListItem}>
          Професійний ремонт автомобіля: швидко, якісно, надійно.
        </li>
        <li className={s.featuresListItem}>
          Магазин автозапчастин у наявності 7000 тис. найменувань.
        </li>
        <li className={s.featuresListItem}>
          Запчастини на іномарки на замовлення, доставляємо за 4-24 години.
        </li>
      </ul>
      <h4 className={s.secondaryTitle}>Наші ціни Вам посміхаються!</h4>
      <div className={s.description}>
        <h3 className={s.descriptionBoldText}>Автосервіс – наша робота.</h3>
        <p>
          Буксир є сервісом з ремонту автомобілів. Ми допоможемо Вам вирішити
          практично будь-яку проблему, пов'язану з ремонтом Вашого автомобіля -
          двигуна, ходової частини, електроустаткування, все це можемо робити
          ми.
        </p>
        <div className={s.imageWrapper}>
          <Image
            className={s.interiorImages}
            src={autoserviceInside2}
            alt="Інтер'єр автосервісу"
          />
          <Image
            className={s.interiorImages}
            src={autoserviceInside1}
            alt="Інтер'єр автосервісу"
          />
        </div>
        <p>
          Займаючись ремонтом автомобілів більше сімнадцяти років, ми
          нагромадили величезний досвід, тому довіряючи свій автомобіль нам, Ви
          можете бути впевнені, що ремонт буде виконаний якісно. Крім того,
          "Буксир" оснащений сучасним обладнанням, що дозволяє діагностувати та
          ремонтувати складні несправності в автомобілі.
          <br />
          Кваліфікація наших працівників – це привід для заздрості наших
          конкурентів. Ми виробляємо сервісне обслуговування та ремонт
          вітчизняних, європейських, американських та азіатських автомобілів.
        </p>
      </div>
      <p className={s.description}>
        <b className={s.descriptionBoldText}>
          <span className={s.descriptionBoldTextAttention}>УВАГА!</span> Можна
          залишити на ремонт свій автомобіль з вечора, він буде розміщений у
          боксі чи дворі автосервісу!
        </b>
        <br />
        <span className={s.parkingPrice}>Вартість стоянки - БЕЗКОШТОВНО!</span>
        <Image
          className={s.exteriorImg}
          src={autoserviceOutside}
          width="250px"
          alt="Екстер'єр автосервісу"
        />
        Наш автосервіс розташований в районі речового ринку, навпроти
        Єреванського. кварталу. Орієнтир - магазин запчастин "ЛАДА-ТАВРІЯ-ЛАНОС"
        заїзд з лівої боку від магазину. Ми завжди раді виконати ремонт та
        сервіс будь-якого автомобіля, запропонувати Вам вигідні ціни та якісний
        авторемонт. Подивіться наш прайс-лист на авторемонт, оцініть якість
        авторемонту.
      </p>
      <div className={s.phoneLinksBlock}>
        <p className={s.phoneLinksBlockTitle}>Звертайтесь за телефоном:</p>
        <ul className={s.phoneLinksList}>
          <li>
            <span className={s.phoneLinksOperator}>
              Міський:&nbsp;&nbsp;
              <a className={s.phoneLinks} href="tel:0457923933">
                (04579) 2-39-33;
              </a>
            </span>
          </li>
          <li>
            <span className={s.phoneLinksOperator}>
              Vodafone:&nbsp;&nbsp;
              <a className={s.phoneLinks} href="tel:+380507808164">
                +380507808164;
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
