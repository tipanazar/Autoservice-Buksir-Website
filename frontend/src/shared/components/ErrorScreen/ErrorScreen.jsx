import PropTypes from "prop-types";

import s from "./ErrorScreen.module.scss";

export const ErrorScreen = ({ text, style }) => {
  return (
    <p className={s.text} style={style}>
      {text}
    </p>
  );
};

ErrorScreen.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};
