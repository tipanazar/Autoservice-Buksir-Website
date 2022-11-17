import { Outlet } from "react-router-dom";

import { Footer } from "../../modules/Footer/Footer";
import { Header } from "../../modules/Header/Header";
import { LeftSidebar } from "../../modules/LeftSidebar/LeftSidebar";
import { RightSidebar } from "../../modules/RightSidebar/RightSidebar";

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <div className="mainContentWrapper">
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
      <Footer />
    </>
  );
};
