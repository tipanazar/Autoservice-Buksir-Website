import { Link } from "react-router-dom";
import s from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Контакти</h4>
      <div  className="sidebarElementList">
        <Link to="https://goo.gl/maps/D7JUbuXKeXXrqcPR7">
          м.Славутич, Привокзальна 11, район речового ринку навпроти
          Єреванського. маг. "Лада-Таврія-Ланос"
        </Link>
        <p className={s.conactsPhoneNumbers}>
          <span>Телефон автосервісу/автомагазину</span>
          <Link to="tel:+380457923933">+38 04579 2-39-33</Link>
          <Link to="tel:+380507808164">+38 050 78 08 164</Link>
        </p>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.7189463534132!2d30.75606148149588!3d51.51679956658092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b95ae90c6ec2456!2z0KHQotCeICLQkdGD0LrRgdC40YAi!5e1!3m2!1sru!2spt!4v1668785674249!5m2!1sru!2spt"
          // width="200px"
          // height="200px"
          width="100%"
          height="100%"
          // style={{ border: 0, width: 100, height: 100 }}
          // allowfullscreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
