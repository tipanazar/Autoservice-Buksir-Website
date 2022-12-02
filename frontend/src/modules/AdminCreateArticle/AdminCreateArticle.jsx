import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/auth/authOperations";
import { getError } from "../../redux/auth/authSelectors";
import { Button } from "../../shared/components/Button";
import { Header } from "../Header";

import s from "./AdminCreateArticle.module.scss";

export const AdminCreateArticle = () => {
  const error = useSelector(getError);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.logoutBtnWrapper}>
        {error && <p>Помилка виходу: {error}</p>}
        <Button className={s.logoutBtn} onClick={() => dispatch(logout())}>
          Вийти з акаунта
        </Button>
      </div>
      <p>Написати статтю</p>
      <textarea></textarea>
    </div>
  );
};
