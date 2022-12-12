import { useLocation } from "react-router";

import styles from "./CarServicePage.module.scss";
import { carService } from "../../shared/json/sidebarAndHeaderMenuLinks";

const CarServicePage = () => {
  const { pathname } = useLocation();
  const { Component } = carService.find((item) => item.path === pathname);
  // console.log("render");

  return <div className={styles.wrapper}>{Component && <Component />}</div>;
};

export default CarServicePage;
