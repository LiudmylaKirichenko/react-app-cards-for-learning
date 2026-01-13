import css from "./Button.module.css";

function Button({ onClick, isActive, isDisabled, children }) {
  return (
    <button
      onClick={onClick}
      className={`${css.btn} ${isActive ? css.active : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
