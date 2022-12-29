import { createPortal } from "react-dom";

const modalRoot = document.querySelector("div#modalRoot");
const body = document.querySelector("body");

export const Modal = ({ src, closeModal, modalWrapperClass, mainBlockStyle, children }) => {
  // useEffect(() => {
  //   modalRoot.style.visibility = "visible";
  //   body.style.overflow = "hidden";
  //   document.addEventListener("keydown", close);
  // });

  const close = (ev) => {
    if (
      ev.code === "Escape" ||
      ev.target === ev.currentTarget ||
      ev === "closeModal"
    ) {
      document.removeEventListener("keydown", close);
      // modalRoot.style.visibility = "hidden";
      body.style.overflow = "auto";
      closeModal();
    }
  };

  return createPortal(
    <div className={modalWrapperClass} style={mainBlockStyle} onClick={close}>
      {children}
    </div>,
    modalRoot
  );
};
