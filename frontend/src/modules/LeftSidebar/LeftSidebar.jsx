import { useSelector } from "react-redux";
import { getGlobalArticlesState } from "../../redux/articles/articlesSelectors";
import { Loader } from "../../shared/components/Loader";
import { CarService } from "./SidebarElements/CarService";
import { Other } from "./SidebarElements/Other";

export const LeftSidebar = ({ sidebarWrapperClass }) => {
  const { isTemplatesLoading, templatesError } = useSelector(getGlobalArticlesState);
  return isTemplatesLoading ? (
    <div className={sidebarWrapperClass} style={{ position: "relative" }}>
      <Loader top="200px" />
    </div>
  ) : templatesError ? (
    <></>
  ) : (
    <ul className={sidebarWrapperClass}>
      <li className="sidebarElementMainBlock">
        <CarService isSmallScreen={false} />
      </li>
      <li className="sidebarElementMainBlock">
        <Other isSmallScreen={false} />
      </li>
    </ul>
  );
};
