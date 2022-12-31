import { useSelector } from "react-redux";
import { getGlobalArticlesState } from "../../redux/articles/articlesSelectors";
import { Loader } from "../../shared/components/Loader";
import { CarTuning } from "./SidebarElements/CarTuning";
import { OurFeatures } from "./SidebarElements/OurFeatures";

export const RightSidebar = ({ sidebarWrapperClass }) => {
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
        <CarTuning isSmallScreen={false} />
      </li>
      <li className="sidebarElementMainBlock">
        <OurFeatures isSmallScreen={false} />
      </li>
    </ul>
  );
};
