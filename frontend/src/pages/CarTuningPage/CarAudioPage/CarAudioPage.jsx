import { Link } from "react-router-dom";

const CarAudioPage = () => {
  return (
    <>
      <h1 style={{ display: "none" }}>Автозвук Славутич</h1>
      <h2 className="articleMainTitle">Автомобільна акустика</h2>
      <p className="articleText">
        Не завжди стандартна автомагнітола задовольняє нашим вимогам. Та й
        акустика буває залишає бажати кращого: хрипи, ліміт гучності, нехватка
        певних частот - не можуть не дратувати.
      </p>
      <p className="articleSecondaryTitle">
        Основні компоненти автомобільної акустики:
      </p>
      <ul className="articleTextList">
        <li className="articleTextListItem">Головні пристрої;</li>
        <li className="articleTextListItem">Підсилювачі;</li>
        <li className="articleTextListItem">Сабвуфери;</li>
        <li className="articleTextListItem">Динаміки;</li>
      </ul>
      <img
        className="articleImage"
        src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1672159059/Buksir%20Website/car-tuning/avtozvuk2.jpg"
        alt="Автозвук"
        width="200px"
      />
      <p className="articleText">
        Також важливо щоб акустика була правильно підібрана і встановлена.
        Тільки тоді ваша довга автомобільна подорож перетвориться на приємну
        прогулянку, а перебування в пробці стане менш стомлюючим і більш
        музичним.
      </p>
      <img
        className="articleImage"
        src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1672159059/Buksir%20Website/car-tuning/avtozvuk1.jpg"
        alt="Автозвук"
        width="200px"
      />
      <p className="articleText">
        <b className="articleBoldText">
          Також для комфортного прослуховування вашої улюбленої музики
          важлива&nbsp;
        </b>
        <Link className="articleLink" to="/car-tuning/shymoizolyaciya">
          якісна&nbsp;шумоізоляція&nbsp;авто!
        </Link>
      </p>
    </>
  );
};

export default CarAudioPage;
