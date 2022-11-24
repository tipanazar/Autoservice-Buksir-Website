import { Link } from "react-router-dom";

import { Modal } from "../../../shared/components/Modal";

import s from "./HeaderMenu.module.scss";

export const HeaderMenu = ({ funcRef, modalSwitcher }) => {
  return (
    <Modal funcRef={funcRef} closeModal={modalSwitcher} isBackdropNeeds={false}>
      <div className={s.modalBodyBlock}>
        <h4 className={s.sidebarElementTitle}>Автосервіс</h4>
        <ul className={s.sidebarElementList}>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>
              Магазин запчастей
            </Link>
          </li>
        </ul>
        <h4 className={s.sidebarElementTitle}>Тюнинг автомобілів</h4>
        <ul className={s.sidebarElementList}>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
          <li className={s.sidebarElementListItem}>
            <Link className={s.sidebarElementListItemLink}>Подсветка днища</Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
};
