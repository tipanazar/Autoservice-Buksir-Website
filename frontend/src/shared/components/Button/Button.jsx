import PropTypes from "prop-types";

export const Button = ({
  onClick,
  type,
  className,
  children,
  form,
  id,
  disabled,
  style,
}) => {
  return (
    <button
      className={className}
      type={type || "button"}
      onClick={onClick}
      form={form}
      id={id}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  form: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  style: PropTypes.objectOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  children: PropTypes.node,
};
