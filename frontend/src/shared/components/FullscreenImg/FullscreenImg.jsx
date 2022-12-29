import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { Image } from "../Image";
import { Button } from "../Button";
import { Icon } from "../Icon";

import s from "./FullscreenImg.module.scss";

const modalRoot = document.querySelector("div#modalRoot");
const body = document.querySelector("body");

export const FullscreenImg = ({ src, closeModal }) => {
  useEffect(() => {
    modalRoot.style.visibility = "visible";
    body.style.overflow = "hidden";
    document.addEventListener("keydown", close);
  });

  const close = (ev) => {
    if (
      ev.code === "Escape" ||
      ev.target === ev.currentTarget ||
      ev === "closeModal"
    ) {
      document.removeEventListener("keydown", close);
      modalRoot.style.visibility = "hidden";
      body.style.overflow = "auto";
      closeModal();
    }
  };

  return createPortal(
    <div className={s.modalBackdrop} onClick={close}>
      <Button className={s.closeModalBtn} onClick={() => close("closeModal")}>
        <Icon iconId="closeModal-icon" fill="whitesmoke" />
      </Button>
      <Image className={s.image} src={src} alt="Повноекранне зображення" />
    </div>,
    modalRoot
  );
};

FullscreenImg.propTypes = {
  src: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
