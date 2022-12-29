import { useRef } from "react";
import PropTypes from "prop-types";

import { Modal } from "../Modal/Modal";
import { Image } from "../Image";
import { Button } from "../Button";
import { Icon } from "../Icon";

import s from "./FullscreenImg.module.scss";

export const FullscreenImg = ({ src, closeModal }) => {
  const closeFuncRef = useRef();
  return (
    <Modal
      closeModal={closeModal}
      isModalOpen={src}
      wrapperClassName={s.modalBackdrop}
      closeFuncRef={closeFuncRef}
    >
      <Button
        className={s.closeModalBtn}
        onClick={() => closeFuncRef.current("closeModal")}
      >
        <Icon iconId="closeModal-icon" fill="whitesmoke" />
      </Button>
      <Image className={s.image} src={src} alt="Повноекранне зображення" />
    </Modal>
  );
};

FullscreenImg.propTypes = {
  src: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
