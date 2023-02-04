import PropTypes from "prop-types";
import cn from "classnames";

import "../index.css";
import "./UiButton.css";

const UiButton = ({ onClick, type, children, size = "s" }) => {
  const bntClass = cn({
    "btn": true,
    "btn-secondary": type === "secondary",
    "btn-primary": type === "primary",
    "btn-small": size === "s",
    "btn-medium": size === "m",
  });
  return (
    <>
      <button className={bntClass} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

UiButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  size: PropTypes.string,
};

export default UiButton;
