import PropTypes from "prop-types";

import s from "./Loader.module.scss";

const Loader = ({ backgroundColor }) => {
  return <div className={s.wrapper} style={{ backgroundColor }}></div>;
};

export default Loader;

Loader.propTypes = {
  backgroundColor: PropTypes.string,
};