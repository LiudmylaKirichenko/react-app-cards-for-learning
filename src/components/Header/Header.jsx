import Button from "../Button/Button";
import ReactLogo from "../../assets/react.svg";
import css from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={css.header}>
      <p onClick={() => navigate("/")}>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>
      <div className={css.headerButtons}>
        <Button isActive onClick={() => navigate("/addquestion")}>
          Add
        </Button>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
