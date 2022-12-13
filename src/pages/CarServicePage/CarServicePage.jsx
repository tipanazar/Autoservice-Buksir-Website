import s from "./CarServicePage.module.scss";
import { testMarkup } from "./test";

const CarServicePage = () => {
  // const { pathname } = useLocation();
  // const { Component } = carService.find((item) => item.path === pathname);
  console.log(testMarkup);
  function createMarkup() {
    return { __html: testMarkup };
  }

  // return <div className={styles.wrapper}>{Component && <Component />}</div>;
  return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default CarServicePage;
