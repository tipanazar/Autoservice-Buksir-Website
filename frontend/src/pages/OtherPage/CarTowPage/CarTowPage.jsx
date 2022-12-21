import s from "./CarTowPage.module.scss";

const CarTowPage = () => {
  // console.log("render")
  return (
    <div className={s.wrapper}>
      <h1 style={{ display: "none" }}>Буксирування автомобіля Славутич</h1>
      <h2 className="articleMainTitle">Буксирування Автомобіля</h2>
      <p className="articleText">
        Клієнтам автосервісу надається послуга буксирування автомобіля по
        Славутичу та околицях міста.
      </p>
      <img
        className="articleImage"
        src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1671657442/Buksir%20Website/other/hyundai_grand_starex_royale_1_td9lmw.jpg"
        alt="Hyundai Grand Starex"
        width="200px"
      />
    </div>
  );
};

export default CarTowPage;
