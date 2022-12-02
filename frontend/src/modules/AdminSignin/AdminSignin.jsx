import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../shared/components/Button";

import { signin } from "../../redux/auth/authOperations";

import s from "./AdminSignin.module.scss";
import { getGlobalAdminState } from "../../redux/auth/authSelectors";
import { Loader } from "../../shared/components/Loader";
import { useRef } from "react";
import { Header } from "../Header";

export const AdminSignin = () => {
  const dispatch = useDispatch();
  const loginInputRef = useRef();
  const passwordInputRef = useRef();
  const { isLoading, error } = useSelector(getGlobalAdminState);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = {
      login: ev.target.login.value,
      password: ev.target.password.value,
    };
    dispatch(signin({ formData }));
  };

  if (error === "Такого користувача не знайдено!") {
    loginInputRef.current.focus();
    loginInputRef.current.style.outlineColor = "#ff4242";
  } else if (error === "Невірний пароль!") {
    passwordInputRef.current.focus();
    passwordInputRef.current.style.outlineColor = "#ff4242";
  }

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        {error ? (
          <p className={s.text} style={{ textDecoration: "underline" }}>
            {error}
          </p>
        ) : (
          <p className={s.text}>
            Вхід <span style={{ textDecoration: "underline" }}>виключно</span>{" "}
            для адміністратора, якщо знайшли - молодець!😉
          </p>
        )}
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.formLabel} htmlFor="login">
            Логін
          </label>
          <input
            className={s.formInput}
            id="login"
            type="text"
            placeholder="Логін"
            autoComplete="true"
            name="login"
            ref={loginInputRef}
            // autoFocus
            required
          />
          <label className={s.formLabel} htmlFor="password">
            Пароль
          </label>
          <input
            className={s.formInput}
            id="password"
            type="text"
            placeholder="Пароль"
            autoComplete="true"
            name="password"
            ref={passwordInputRef}
            required
          />
          <Button className={s.submitFormBtn} type="submit">
            Увійти
          </Button>
          {isLoading && <Loader />}
        </form>
      </div>
    </>
  );
};
