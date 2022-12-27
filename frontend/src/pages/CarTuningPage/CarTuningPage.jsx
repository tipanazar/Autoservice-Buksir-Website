import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getArticle } from "../../redux/articles/articlesOperations";
import { getGlobalArticlesState } from "../../redux/articles/articlesSelectors";
import { ErrorScreen } from "../../shared/components/ErrorScreen/ErrorScreen";
import { Loader } from "../../shared/components/Loader";

const CarTuningPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { error, isLoading, article } = useSelector(getGlobalArticlesState);
  useEffect(() => {
    if (article.path !== pathname || (article.path === pathname && error)) {
      dispatch(getArticle(pathname));
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
};

export default CarTuningPage;
