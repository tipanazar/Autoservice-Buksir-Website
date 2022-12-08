import { Image } from "../../shared/components/Image";
import {
  first_certificate,
  certificate_2009,
  certificate_2011,
  certificate_2012,
  certificate_2013,
  gratitude,
} from "../../images/certificates";

import s from "./Certificates.module.scss";
import { FullscreenImg } from "../../shared/components/FullscreenImg/FullscreenImg";
import { useState } from "react";

export const Certificates = () => {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const closeModal = () => {
    setFullscreenSrc(null);
  };

  return (
    <>
      <h5 className={s.title}>Сертифікати автосервису</h5>
      <ul className={s.list}>
        <li className={s.listItem}>
          <Image
            className={s.listItemImage}
            src={gratitude}
            alt="Подяка"
            width="150px"
            onClick={() => setFullscreenSrc(gratitude)}
          />
          <p className={s.listItemText}>
            Подяка від мера міста В. П. Удовиченко. За найкращий автомагазин.
            2009р. м.Славутич.
          </p>
        </li>
        <li className={s.listItem}>
          <Image
            className={s.listItemImage}
            src={first_certificate}
            alt="Сертификат"
            width="150px"
            onClick={() => setFullscreenSrc(first_certificate)}
          />
          <p className={s.listItemText}>
            Сертифікат про проходження навчання та підтвердження практики на
            першому зльоті діагностів України у 2008р. м.Київ.
          </p>
        </li>
        <li className={s.listItem}>
          <Image
            className={s.listItemImage}
            src={certificate_2009}
            alt="Сертификат"
            width="150px"
            onClick={() => setFullscreenSrc(certificate_2009)}
          />
          <p className={s.listItemText}>
            Сертифікат про проходження навчання та підтвердження практики на
            другому зльоті діагностів України у 2009р. м.Київ.
          </p>
        </li>
        <li className={s.listItem}>
          <Image
            className={s.listItemImage}
            src={certificate_2011}
            alt="Сертификат"
            width="150px"
            onClick={() => setFullscreenSrc(certificate_2011)}
          />
          <p className={s.listItemText}>
            Сертифікат про проходження навчання та підтвердження практики на
            третьому зльоті дизелистів України у 2011р. м.Київ.
          </p>
        </li>
        <li className={s.listItem}>
          <Image
            className={s.listItemImage}
            src={certificate_2012}
            alt="Сертификат"
            width="150px"
            onClick={() => setFullscreenSrc(certificate_2012)}
          />
          <p className={s.listItemText}>
            Сертифікат про проходження навчання та підтвердження практики на
            зльоті діагностів України у 2012р. м.Київ.
          </p>
        </li>
        <li className={s.listItem}>
          <Image
            className={s.listItemImage}
            src={certificate_2013}
            alt="Сертификат"
            width="150px"
            onClick={() => setFullscreenSrc(certificate_2013)}
          />
          <p className={s.listItemText}>
            Сертифікат про проходження навчання та підтвердження практики на
            шостому зльоті діагностів України у 2013р. м.Київ.
          </p>
        </li>
      </ul>
      {fullscreenSrc && (
        <FullscreenImg src={fullscreenSrc} closeModal={closeModal} />
      )}
    </>
  );
};
