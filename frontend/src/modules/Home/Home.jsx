import { useState } from "react";

import { Button } from "../../shared/components/Button";
import { Icon } from "../../shared/components/Icon";
import { Image } from "../../shared/components/Image";
import autoserviceInside1 from "../../images/autoserviceInside1.jpg";
import autoserviceInside2 from "../../images/autoserviceInside2.jpg";
import autoserviceOutside from "../../images/autoserviceOutside.jpg";

import s from "./Home.module.scss";

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
          - Професійний ремонт автомобіля: швидко, якісно, надійно.
        </li>
        <li className={s.featuresListItem}>
          - Магазин автозапчастин у наявності 7000 тис. найменувань.
        </li>
        <li className={s.featuresListItem}>
          - Запчастини на іномарки на замовлення, доставляємо за 4-24 години.
        </li>
      </ul>
      <h3 className={s.secondaryTitle}>Наші ціни Вам посміхаються!</h3>
      <p className={s.description}>
        <b className={s.descriptionBoldText}>Автосервіс – наша робота.</b>
        Буксир є сервісом з ремонту автомобілів. Ми допоможемо Вам вирішити
        практично будь-яку проблему, пов'язану з ремонтом Вашого автомобіля -
        двигуна, ходової частини, електроустаткування, все це можемо робити ми.
        <Image
          className={s.interiorImages}
          src={autoserviceInside1}
          alt="Інтер'єр автосервісу"
        />
        <Image
          className={s.interiorImages}
          src={autoserviceInside2}
          alt="Інтер'єр автосервісу"
        />
        Займаючись ремонтом автомобілів ось уже більше дев'яти років, ми
        нагромадили величезний досвід, тому довіряючи свій автомобіль нам, Ви
        можете бути впевнені, що ремонт буде виконаний якісно. Крім того,
        "Буксир" оснащений сучасним обладнанням, що дозволяє діагностувати та
        ремонтувати складні несправності в автомобілі. Кваліфікація наших
        працівників – це привід для заздрості наших конкурентів. Ми виробляємо
        сервісне обслуговування та ремонт вітчизняних, європейських,
        американських та азіатських автомобілів.
      </p>
      <p className={s.description}>
        <b className={s.descriptionBoldText}>
          УВАГА! Можна залишити на ремонт свій автомобіль з вечора, він буде
          розміщений у боксі чи дворі автосервісу!
        </b>
        Вартість стоянки БЕЗКОШТОВНО!
        <Image
          className={s.exteriorImg}
          src={autoserviceOutside}
          alt="Екстер'єр автосервісу"
        />
        Наш автосервис расположен в районе вещевого рынка, напротив Ереванского
        квартала. Ориентир - магазин запчастей "ЛАДА-ТАВРИЯ-ЛАНОС" заезд с левой
        стороны от магазина. Мы всегда рады выполнить ремонт и сервис любого
        автомобиля, предложить Вам выгодные цены и качественный авторемонт.
        Посмотрите наш прайс лист на авторемонт, оцените качество авторемонта.
        Обращайтесь по телефону (04579) 2-39-33, +380507808164
      </p>
    </div>
  );
};
