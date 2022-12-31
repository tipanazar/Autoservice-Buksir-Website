import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getArticle } from "../../redux/articles/articlesOperations";
import { getGlobalArticlesState } from "../../redux/articles/articlesSelectors";
import { ErrorScreen } from "../../shared/components/ErrorScreen/ErrorScreen";
import { Loader } from "../../shared/components/Loader";

const OurFeaturesPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { articleError, isArticleLoading, article } = useSelector(getGlobalArticlesState);
  useEffect(() => {
    if (article.path !== pathname || (article.path === pathname && articleError)) {
      dispatch(getArticle(pathname));
    }
    //eslint-disable-next-line
  }, [pathname, article.path]);

  return isArticleLoading ? (
    <Loader />
  ) : articleError ? (
    <ErrorScreen text={articleError} style={{ margin: "40px auto 0 auto" }} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: article.text }}></div>
  );
};

export default OurFeaturesPage;
