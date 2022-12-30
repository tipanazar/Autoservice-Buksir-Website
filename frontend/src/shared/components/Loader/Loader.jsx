import PropTypes from "prop-types";

import s from "./Loader.module.scss";

export const Loader = ({ backgroundColor, top, bottom }) => {
  return (
    <div className={s.wrapper} style={{ backgroundColor, top, bottom }}></div>
  );
};

Loader.propTypes = {
  backgroundColor: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
