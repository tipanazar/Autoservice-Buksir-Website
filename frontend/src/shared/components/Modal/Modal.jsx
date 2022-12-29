import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { getBodyElement, getModalRoot } from "../../hooks/getDomElement";

const modalRoot = getModalRoot();
const body = getBodyElement();
export const Modal = ({
  closeModal,
  wrapperClassName,
  closeFuncRef,
  children,
}) => {
  useEffect(() => {
    body.style.overflow = "hidden";
    modalRoot.style.zIndex = 3;
    modalRoot.style.opacity = 1;
    document.addEventListener("keydown", close);
  });

  const close = (ev) => {
    if (
      ev.code === "Escape" ||
      ev.target === ev.currentTarget ||
      ev === "closeModal"
    ) {
      document.removeEventListener("keydown", close);
      body.style.overflow = "auto";
      modalRoot.style.zIndex = -1;
      modalRoot.style.opacity = 0;
      closeModal();
    }
  };
  closeFuncRef.current = close;

  return createPortal(
    <div className={wrapperClassName} onClick={() => close("closeModal")}>
      {children}
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  wrapperClassName: PropTypes.string.isRequired,
  closeFuncRef: PropTypes.shape({ current: PropTypes.func }),
  children: PropTypes.node.isRequired,
};
