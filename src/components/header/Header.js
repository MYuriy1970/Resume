import { NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, мое имя <em>Юрий</em>
          </strong>
          <br /> я фронтенд разработчик
        </h1>
        <div className="header__text">
          <p>С огромным интересом к обучению и творчеству.</p>
        </div>
        <NavLink to={`/resume`} className="btn">
          Резюме
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
