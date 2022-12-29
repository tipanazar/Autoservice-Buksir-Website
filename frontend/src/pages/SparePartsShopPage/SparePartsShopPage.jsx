import { useState } from "react";
import { Link } from "react-router-dom";

import { Image } from "../../shared/components/Image";
import { FullscreenImg } from "../../shared/components/FullscreenImg/FullscreenImg";
import autoserviceOutside from "../../images/homePage/autoserviceOutside.jpg";

import s from "./SparePartsShopPage.module.scss";

const SparePartsShopPage = () => {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const closeModal = () => {
    setFullscreenSrc(null);
  };
  return (
    <>
      <h1 className={s.title}>
        Магазин автозапчастин "ЛАДА-ТАВРИЯ-ЛАНОС" у м.Славутич
      </h1>
      <p className={s.text}>
        У нашому автосервісі Ви завжди знайдете необхідні запчастини та
        аксесуари. Якщо Ви доручаєте нам на ремонт свій автомобіль, можете не
        думати, де придбати ту чи іншу запчастину. Понад 7000 тис. найменувань
        завжди є у наявності в магазині автосервісу.
      </p>
      <p className={s.text}>
        Займаючись ремонтом автомобілів ось уже багато років ми маємо
        налагоджені контакти з постачальниками запчастин в Україні та за
        кордоном. Можемо доставити їх у найкоротші терміни.
      </p>
      <p className={s.text}>
        При ремонті Вашого автомобіля, будь-яка заміна запчастини та її вартість
        буде погоджено з Вами. Тому все, що Вам потрібно зробити, це приїхати на
        ремонт у наш автосервіс та довірити виконання робіт професіоналів.
      </p>
      <Link className={s.contactsLink} to="/contacts">
        Контакти австосервісу/автомагазину
      </Link>
      <Image
        className={s.image}
        src={autoserviceOutside}
        width="90%"
        alt="Екстер'эр"
        onClick={() => setFullscreenSrc(autoserviceOutside)}
      />
      {fullscreenSrc && (
        <FullscreenImg src={fullscreenSrc} closeModal={closeModal} />
      )}
    </>
  );
};

export default SparePartsShopPage;
