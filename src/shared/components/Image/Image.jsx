import PropTypes from "prop-types";

export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  onClick,
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      style={style}
      loading="lazy"
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};
