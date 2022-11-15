import { Outlet } from "react-router-dom";

import { Footer } from "../../modules/Footer/Footer";
import { Header } from "../../modules/Header/Header";
import { LeftSidebar } from "../../modules/LeftSidebar/LeftSidebar";
import { RightSidebar } from "../../modules/RightSidebar/RightSidebar";

import styles from "./LayoutPage.module.scss";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
      <Footer />
    </>
  );
};
