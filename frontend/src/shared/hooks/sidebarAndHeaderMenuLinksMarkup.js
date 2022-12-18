import { NavLink } from "react-router-dom";
import { Image } from "../components/Image";

export function listMarkup({
  isSmallScreen,
  isImageNeeds = false,
  isListOpen,
  modalSwitcher = null,
  data,
}) {
  console.log("render")
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
                {item.title}
                {item.imageLink && (
                  <Image
                    className="headerMenuListItemImg"
                    src={item.imageLink}
                    alt={item.title}
                    width="140px"
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
                {item.title}
                {item.imageLink && (
                  <Image
                    className="headerMenuListItemImg"
                    src={item.imageLink}
                    alt={item.title}
                    width="140px"
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
                {item.title}
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
                {item.title}
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
              {item.title}
              {item.imageLink && (
                <Image
                  className="sidebarElementImage"
                  src={item.imageLink}
                  alt={item.title}
                  width="140px"
                />
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
              {item.title}
            </NavLink>
          </li>
        );
      });
    }
  }
}
