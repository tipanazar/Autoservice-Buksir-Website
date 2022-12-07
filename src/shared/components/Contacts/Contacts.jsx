import PropTypes from "prop-types";

import s from "./Contacts.module.scss";

import contactsMarkup from "./contactsMarkup.json";
export const Contacts = ({ isBigDesign, isEnglish }) => {
  const markup = isEnglish ? contactsMarkup.en : contactsMarkup.uk;
  return (
    <>
      <h3
        className={
          isBigDesign ? s.phoneLinksBlockTitleBig : s.phoneLinksBlockTitleSmall
        }
      >
        {markup.title}
      </h3>
      <ul className={isBigDesign ? s.phoneListBig : s.phoneListSmall}>
        <li className={isBigDesign ? s.phoneListItemBig : s.phoneListItemSmall}>
          {markup.operator[0]}
          <a className={s.phoneListItemLink} href="tel:+380457923933">
            +38 04579 2-39-33
          </a>
        </li>
        <li className={isBigDesign ? s.phoneListItemBig : s.phoneListItemSmall}>
          {markup.operator[1]}
          <a className={s.phoneListItemLink} href="tel:+380507808164">
            +38 050 78 08 164
          </a>
        </li>
      </ul>
      <a
        className={isBigDesign ? s.mapLinkBig : s.mapLinkSmall}
        href="https://goo.gl/maps/D7JUbuXKeXXrqcPR7"
      >
        {markup.address}
      </a>
      <iframe
        className={s.map}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.7287605662157!2d30.757934357570164!3d51.515835801160975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b95ae90c6ec2456!2z0KHQotCeICLQkdGD0LrRgdC40YAi!5e1!3m2!1sru!2spt!4v1669233724567!5m2!1sru!2spt"
        height="85%"
        width="85%"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

Contacts.propTypes = {
  isBigDesign: PropTypes.bool.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};
