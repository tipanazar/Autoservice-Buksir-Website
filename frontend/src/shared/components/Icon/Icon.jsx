import PropTypes from "prop-types";

import sprite from "../../../images/sprite.svg";

export const Icon = ({ className, iconId, width, height, fill, style }) => {
  return (
    <svg
      className={className}
      width={width || "100%"}
      height={height || "100%"}
      fill={fill}
      style={style}
    >
      <use href={`${sprite}#${iconId}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.shape([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
};
