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

  useEffect(() => {
    if (article.path !== pathname) {
      dispatch(getArticle(pathname));
      console.log("request");
    }
    //eslint-disable-next-line
  }, [pathname, article.path]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <ErrorScreen text={error} style={{ margin: "40px auto 0 auto" }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: article.text }}></div>
  );

  return (
    <>
      
    </>
  );
};

export default CarServicePage;
{
  /* <h1 style="display: none;">Розвал cходження Славутич</h1>
      <h2 class="articleMainTitle">Розвал-Cходження</h2>
      <p class="articleText">
        <b class="articleBoldText">
          Ми виконуємо регулювання кутів установки коліс на легкових автомобілях
          та мікроавтобусах висотою до 3м.
        </b>
      </p>
      <p class="articleText">
        Розвал-сходження - регулювання кутів установки коліс автомобіля. Саме
        від точності налаштувань залежать такі показники як: керованість, час
        зносу протектора шин, маневреність і стійкість автомобіля на дорозі. До
        речі, правильне регулювання коліс дозволяє
        <strong class="articleBoldText">&nbsp;зменшити витрату палива.</strong>
      </p>
      <img
        class="articleImage"
        src="https://res.cloudinary.com/dv2ewzim4/image/upload/v1671135867/Buksir%20Website/car-service/104_300x225_med9dh.jpg"
        alt="Развал-Сходження"
        width="200px"
      />
      <p class="articleText">
        Результатом неправильного розвала-сходження може бути те, що ваш
        автомобіль&nbsp;
        <strong class="articleBoldText">
          погано тримає дорогу (плаває)&nbsp;
        </strong>
        або
        <strong class="articleBoldText">
          &nbsp;кидає автомобіль убік.&nbsp;
        </strong>
        При <strong class="articleBoldText">гальмуванні</strong> автомобіль
        може&nbsp;
        <strong class="articleBoldText">також вести убік,&nbsp;</strong>
        якщо розвал-сходження погано відрегульований. Ну і звичайно причиною
        неправильного розвалу-сходження буде&nbsp;
        <strong class="articleBoldText">
          підвищений та нерівномірний знос гуми автомобіля.
        </strong>
      </p>
      <p>
        <strong class="articleBoldText">
          Тому розвал-сходження це не та процедура, яку можна відкласти і на
          якій варто економити.
        </strong>
      </p> */
}
