import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getArticle } from "../../redux/articles/articlesOperations";
import { getGlobalArticlesState } from "../../redux/articles/articlesSelectors";
import { ErrorScreen } from "../../shared/components/ErrorScreen/ErrorScreen";
import { Loader } from "../../shared/components/Loader";

import s from "./CarServicePage.module.scss";
import { testMarkup } from "./test";

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

  useEffect(() => {
    if (article.path !== pathname) {
      dispatch(getArticle(pathname));
      console.log("request");
    }
    //eslint-disable-next-line
  }, []);

  // console.log(article.path);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <ErrorScreen text={error} style={{ margin: "40px auto 0 auto" }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: article.text, }}></div>
  );

  // return (
  //   <>
  //      <h1 className="articleMainTitle">Ремонт двигуна автомобіля</h1>
  //     <p className="articleText">
  //       <b className="articleBoldText">Ремонт двигуна автомобіля&nbsp;– </b>
  //       складна технологічна операція, що вимагає професійної підготовки. Наші
  //       фахівці здійснюють ремонт двигунів у суворій відповідності до технологій
  //       виробників, з використанням каталогів двигунів, за якими вибудовується
  //       алгоритм дій, що забезпечують високу якість авторемонту.
  //     </p>
  //     <ul className="articleImageList">
  //       <li className="articleImageListItem">
  //         <img
  //           className="listItemImage"
  //           src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1671059545/Buksir%20Website/car-service/101_300x225_qsqydp.jpg"
  //           alt="Ремонт двигуна"
  //           width="200px"
  //         />
  //       </li>
  //       <li className="articleImageListItem">
  //         <img
  //           className="listItemImage"
  //           src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1671059545/Buksir%20Website/car-service/102_300x225_xzanmt.jpg"
  //           alt="Ремонт двигуна"
  //           width="200px"
  //         />
  //       </li>
  //     </ul>
  //     <p className="articleSecondaryTitle">
  //       "Буксир" пропонує такі види ремонту автомобіля як:
  //     </p>
  //     <ul className="articleTextList">
  //       <li className="articleTextListItem articleText">
  //         <b className="articleBoldText">Поточний ремонт двигуна&nbsp;– </b>
  //         усунення дрібних несправностей у двигуні автомобіля, пов'язаних з його
  //         постійною експлуатацією.
  //       </li>
  //       <li className="articleTextListItem articleText">
  //         <b className="articleBoldText">Середній ремонт двигуна&nbsp;– </b>
  //         це заміна або відновлення деяких зношених деталей двигуна автомобіля,
  //         для якого потрібне його часткове розбирання.
  //       </li>
  //       <li className="articleTextListItem articleText">
  //         <b className="articleBoldText">Капітальний ремонт двигуна&nbsp;– </b>
  //         процес повного відновлення експлуатаційних характеристик двигуна
  //         автомобіля. Це включає в себе діагностику двигуна, демонтаж, повне
  //         розбирання силового агрегату, дефектування, заміну всіх зношених
  //         деталей двигуна, вузлів, агрегатів та добірку необхідних
  //         комплектуючих. Після складання та встановлення, фахівці автосервісу
  //         регулюють двигун та проводять точне налаштування всіх параметрів.
  //       </li>
  //     </ul>
  //     <p style="marginTop: 25; textAlign: center;">
  //       <strong className="articleBoldText">
  //         Своєчасне усунення несправності підвищить термін експлуатації вашого
  //         автомобіля.
  //       </strong>
  //     </p>
  //   </>
  // );
};

export default CarServicePage;
