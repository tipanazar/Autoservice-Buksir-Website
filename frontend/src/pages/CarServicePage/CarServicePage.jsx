import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getArticle } from "../../redux/articles/articlesOperations";
import { getGlobalArticlesState } from "../../redux/articles/articlesSelectors";
import { ErrorScreen } from "../../shared/components/ErrorScreen/ErrorScreen";
import { Loader } from "../../shared/components/Loader";

// import s from "./CarServicePage.module.scss";

const CarServicePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { error, isLoading, article } = useSelector(getGlobalArticlesState);
  // console.log(markupStyles)
  //? useEffect(() => {
  //   if (article.path !== pathname) {
  //     dispatch(getArticle(pathname));
  //     console.log("request 1");
  //   } else if (article.path === pathname && error) {
  //     dispatch(getArticle(pathname));
  //     console.log("request 2");
  //   }
  //   //eslint-disable-next-line
  // }, []);

  // console.log(article)

  // useEffect(() => {
  //   if (article.path !== pathname) {
  //     dispatch(getArticle(pathname));
  //     console.log("request");
  //   }
  //   //eslint-disable-next-line
  // }, []); //? добавить путь?!?!

  // return isLoading ? (
  //   <Loader />
  // ) : error ? (
  //   <ErrorScreen text={error} style={{ margin: "40px auto 0 auto" }} />
  // ) : (
  //   <div dangerouslySetInnerHTML={{ __html: article.text }}></div>
  // );

  return (
    <>
      <h1 className="articleMainTitle">Ремонт ходової</h1>
      <p className="articleText">
        <b className="articleBoldText">Ходова частина </b>будь-якого автомобіля
        є складною сукупністю механізмів, яка забезпечує зв'язок автомобіля з
        дорожнім покриттям. Від стану ходової частини залежить рівень комфорту
        при пересуванні та, що найважливіше, безпека водія та пасажирів.
      </p>
      <p className="articleText">
        Ми проводимо весь перелік робіт, пов'язаний з діагностикою та ремонтом
        ходової частини автомобіля.
      </p>
      <ul className="articleImageList">
        <li className="articleImageListItem">
          <img
            className="articleListItemImage"
            src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1671129986/Buksir%20Website/car-service/138_hodovaya_a3eg0x.jpg"
            alt="Ходова частина авто"
          />
        </li>
        <li className="articleImageListItem">
          <img
            className="articleListItemImage"
            src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1671129986/Buksir%20Website/car-service/140_2_tw6tyf.jpg"
            alt="Ходова частина авто"
          />
        </li>
      </ul>
      <p className="articleSecondaryTitle">
        Щоб не допустити критичний знос вузлів, ми радимо звернути увагу на:
      </p>
      <ul
        className="articleTextList"
        style={{ listStyle: "circle", paddingLeft: 17 }}
      >
        <li className="articleTextListItem">
          <b className="articleBoldText">Сторонні </b>стуки під час руху по
          нерівній дорозі.
        </li>
        <li className="articleTextListItem">
          <b className="articleBoldText">Вібрація </b>під час руху.
        </li>
        <li className="articleTextListItem">
          <b className="articleBoldText">Поява </b>люфта при кермуванні.
        </li>
        <li className="articleTextListItem">
          <b className="articleBoldText">Погане </b>керування під час руху на
          високих швидкостях.
        </li>
        <li className="articleTextListItem">
          <b className="articleBoldText">Великий </b>крен кузова при виконанні
          маневру повороту.
        </li>
      </ul>
      <p className="articleText">
        Ми спеціалізуємося на ремонті ходової частини автомобілів, включаючи
        зварювальні роботи та роботи з відновлення елементів підвіски.
        <br />
        Також ми використовуємо спеціалізовані інструменти, що дозволяють
        дотримуватись необхідної технології та високої якості робіт при ремонті
        ходової частини. Досвід наших майстрів дозволяє заощаджувати Ваші гроші
        за рахунок оптимізації слюсарного ремонту.
      </p>
    </>
  );
};

export default CarServicePage;
