import Button from "../Button/Button";
import ReactLogo from "../../assets/react.svg";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header}>
      <p>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>
      <div className={css.headerButtons}>
        <Button isActive>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
