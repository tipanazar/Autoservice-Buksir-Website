import { Link } from "react-router-dom";
import s from "./News.module.scss";

export const News = () => {
  return (
    <div className="sidebarElementMainBlock">
      <h4 className="sidebarElementTitle">Новини</h4>
      <ul className="sidebarElementList">
        <li className="sidebarElementListItem">
          <Link
            className="sidebarElementListItemLink"
            style={{ paddingBottom: 2 }}
          >
            Моторное масло, зачем ассортимент?
            <br />
            <time className={s.newsDate}>28.09.2022</time>
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link
            className="sidebarElementListItemLink"
            style={{ paddingBottom: 2 }}
          >
            Моторное масло, зачем ассортимент?
            <br />
            <time className={s.newsDate}>28.09.2022</time>
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link
            className="sidebarElementListItemLink"
            style={{ paddingBottom: 2 }}
          >
            Моторное масло, зачем ассортимент?
            <br />
            <time className={s.newsDate}>28.09.2022</time>
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link
            className="sidebarElementListItemLink"
            style={{ paddingBottom: 2 }}
          >
            Моторное масло, зачем ассортимент?
            <br />
            <time className={s.newsDate}>28.09.2022</time>
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link
            className="sidebarElementListItemLink"
            style={{ paddingBottom: 2 }}
          >
            Моторное масло, зачем ассортимент?
            <br />
            <time className={s.newsDate}>28.09.2022</time>
          </Link>
        </li>
        <li className="sidebarElementListItem">
          <Link
            className="sidebarElementListItemLink"
            style={{ paddingBottom: 2 }}
          >
            Моторное масло, зачем ассортимент?
            <br />
            <time className={s.newsDate}>28.09.2022</time>
          </Link>
        </li>
      </ul>
    </div>
  );
};
