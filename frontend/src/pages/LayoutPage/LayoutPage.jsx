import { Outlet } from "react-router-dom";

import { Footer } from "../../shared/components/Footer/Footer";
import { Header } from "../../shared/components/Header/Header";
import { LeftSidebar } from "../../shared/components/LeftSidebar/LeftSidebar";
import { RightSidebar } from "../../shared/components/RightSidebar/RightSidebar";

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
