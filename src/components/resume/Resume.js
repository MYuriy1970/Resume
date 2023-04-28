import image from "../../img/myfoto.jpg";

import "./style.css";

const Resume = () => {
  return (
    <div className="wrapper header__title">
      <img src={image} alt="myfoto" className="myfoto" />

      <strong>Межеедов Юрий Александрович</strong>
      <br />
      <p>Возраст 51 год, Образование среднее</p>
      <br />
      <p>Режим работы - полный рабочий день, можно по удаленке.</p>
    </div>
  );
};

export default Resume;
