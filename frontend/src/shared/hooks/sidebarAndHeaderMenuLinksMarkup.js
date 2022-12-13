import { NavLink } from "react-router-dom";
import { Image } from "../components/Image";

export function listMarkup({
  isSmallScreen,
  isImageNeeds = false,
  isListOpen,
  modalSwitcher = null,
  data,
  imageParams = null,
}) {
  const navLinkClassName = ({ isActive }) =>
    isSmallScreen
      ? isActive
        ? "headerMenuListItemLinkActive"
        : "headerMenuListItemLinkInactive"
      : isActive
      ? "sidebarElementListItemLinkActive"
      : "sidebarElementListItemLinkInactive";

  if (isSmallScreen) {
    if (isImageNeeds) {
      if (isListOpen) {
        return data.map((item, idx) => {
          return (
            <li className="headerMenuListItemOpen" key={idx}>
              <NavLink
                className={navLinkClassName}
                to={item.path}
                onClick={modalSwitcher}
              >
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
              <NavLink
                className={navLinkClassName}
                to={item.path}
                onClick={modalSwitcher}
              >
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
              <NavLink
                className={navLinkClassName}
                to={item.path}
                onClick={modalSwitcher}
              >
                {item.text}
              </NavLink>
            </li>
          );
        });
      } else {
        return data.map((item, idx) => {
          return (
            <li className="headerMenuListItemClosed" key={idx}>
              <NavLink
                className={navLinkClassName}
                to={item.path}
                onClick={modalSwitcher}
              >
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
            <NavLink className={navLinkClassName} to={item.path}>
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
            <NavLink className={navLinkClassName} to={item.path}>
              {item.text}
            </NavLink>
          </li>
        );
      });
    }
  }
}
