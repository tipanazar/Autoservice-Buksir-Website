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
  ariaLabel,
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
      aria-label={ariaLabel}
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
  style: PropTypes.shape([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
};
