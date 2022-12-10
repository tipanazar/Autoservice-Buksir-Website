import { NavLink } from "react-router-dom";
import { Image } from "../components/Image";

const smallScreenNavLinkClassName = ({ isActive }) =>
  isActive ? "headerMenuListItemLinkActive" : "headerMenuListItemLinkInactive";

const bigScreenNavLinkClassName = ({ isActive }) =>
  isActive
    ? "sidebarElementListItemLinkActive"
    : "sidebarElementListItemLinkInactive";

export function listMarkup({
  isSmallScreen,
  isImageNeeds = false,
  isListOpen,
  data,
  imageParams = null,
}) {
  console.log(isSmallScreen, isImageNeeds, isListOpen, data, imageParams);
  if (isSmallScreen) {
    if (isImageNeeds) {
      if (isListOpen) {
        return data.map((item, idx) => {
          return (
            <li className="headerMenuListItemOpen" key={idx}>
              <NavLink className={smallScreenNavLinkClassName} to={item.path}>
                {item.text}
                {imageParams[idx] && (
                  <Image
                    className="headerMenuListItemImg"
                    {...imageParams[idx]}
                  />
                )}
              </NavLink>
            </li>
          );
        });
      } else {
        return data.map((item, idx) => {
          return (
            <li className="headerMenuListItemClosed" key={idx}>
              <NavLink className={smallScreenNavLinkClassName} to={item.path}>
                {item.text}
                {imageParams[idx] && (
                  <Image
                    className="headerMenuListItemImg"
                    {...imageParams[idx]}
                  />
                )}
              </NavLink>
            </li>
          );
        });
      }
    } else {
      if (isListOpen) {
        return data.map((item, idx) => {
          return (
            <li className="headerMenuListItemOpen" key={idx}>
              <NavLink className={smallScreenNavLinkClassName} to={item.path}>
                {item.text}
              </NavLink>
            </li>
          );
        });
      } else {
        return data.map((item, idx) => {
          return (
            <li className="headerMenuListItemClosed" key={idx}>
              <NavLink className={smallScreenNavLinkClassName} to={item.path}>
                {item.text}
              </NavLink>
            </li>
          );
        });
      }
    }
  } else {
    if (isImageNeeds) {
      return data.map((item, idx) => {
        return (
          <li className="sidebarElementListItem" key={idx}>
            <NavLink className={bigScreenNavLinkClassName} to={item.path}>
              {item.text}
              {imageParams[idx] && (
                <Image className="sidebarElementImage" {...imageParams[idx]} />
              )}
            </NavLink>
          </li>
        );
      });
    } else {
      return data.map((item, idx) => {
        return (
          <li className="sidebarElementListItem" key={idx}>
            <NavLink className={bigScreenNavLinkClassName} to={item.path}>
              {item.text}
            </NavLink>
          </li>
        );
      });
    }
  }
}
