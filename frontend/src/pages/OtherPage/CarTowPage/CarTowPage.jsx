import { Contacts } from "../../../shared/components/Contacts";

import s from "./CarTowPage.module.scss";

const CarTowPage = () => {
  console.log("render")
  return (
    <div className={s.wrapper}>
      <h1 style={{ display: "none" }}>Буксирування автомобіля Славутич</h1>
      <h2 className="articleMainTitle">Буксирування Автомобіля</h2>
      <p className="articleText" style={{marginBottom: 30, fontSize: 18}}>
        Клієнтам автосервісу надається послуга буксирування автомобіля по
        Славутичу та околицях міста.
      </p>
      <Contacts isBigDesign={false} isEnglish={false} />
    </div>
  );
};

export default CarTowPage;
