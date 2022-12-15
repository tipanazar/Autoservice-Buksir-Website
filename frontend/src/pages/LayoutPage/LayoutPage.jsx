import { Outlet } from "react-router-dom";

import { Footer } from "../../modules/Footer/Footer";
import { Header } from "../../modules/Header/Header";
import { LeftSidebar } from "../../modules/LeftSidebar/LeftSidebar";
import { MainNavigation } from "../../shared/components/MainNavigation/MainNavigation";
import { RightSidebar } from "../../modules/RightSidebar/RightSidebar";

import s from "./LayoutPage.module.scss";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <main className={s.container}>
        <LeftSidebar sidebarWrapperClass={s.sidebarWrapperClass} />
        <div className={s.centerContainer}>
          <MainNavigation
            className={s.mainNavigationBlock}
            linksDisplayClass=""
            listItemDisplayClass=""
          />
          <article id="articleWrapper" style={{ position: "relative", height: "100%" }}>
            <Outlet />
          </article>
        </div>
        <RightSidebar sidebarWrapperClass={s.sidebarWrapperClass} />
      </main>
      <Footer />
    </>
  );
};
