import { Outlet } from "react-router-dom";
import css from "./MainLayout.module.css";

function MainLayout() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={css.mainLayout}>
      <header>HEADER</header>
      <div className={css.mainWrapper}>
        <main className={css.main}>
          <Outlet />
        </main>
        <footer className={css.footer}>
          React Questions Cards Application | {currentYear} <br />
          by Liudmyla Kirichenko
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
