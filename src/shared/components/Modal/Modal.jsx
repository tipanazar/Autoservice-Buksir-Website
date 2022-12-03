import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import s from "./Modal.module.scss";

const modalRoot = document.querySelector("div#modalRoot");

export const Modal = ({ children, closeModal, funcRef, isBackdropNeeds }) => {
  useEffect(() => {
    document.addEventListener("keydown", close);
  });

  const close = (ev) => {
    console.log("close")
    if (
      ev.code === "Escape" ||
      ev.target === ev.currentTarget ||
      ev === "closeModal"
    ) {
      document.removeEventListener("keydown", close);
      closeModal();
    }
  };

  funcRef.current = close;

  return createPortal(
    isBackdropNeeds ? (
      <div className={s.modalBackdrop} onClick={() => close("closeModal")}>
        {children}
      </div>
    ) : (
      <>{children}</>
    ),
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  funcRef: PropTypes.objectOf(PropTypes.func).isRequired,
};
