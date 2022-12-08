import PropTypes from "prop-types";

export const Image = ({ src, alt, width, height, className, onClick }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      loading="lazy"
    />
  );
};

Image.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
