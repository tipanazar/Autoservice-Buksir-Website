import PropTypes from "prop-types";

import s from "./Loader.module.scss";

export const Loader = ({ backgroundColor }) => {
  return <div className={s.wrapper} style={{ backgroundColor }}></div>;
};

Loader.propTypes = {
  backgroundColor: PropTypes.string,
};
