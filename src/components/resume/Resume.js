/* eslint-disable jsx-a11y/alt-text */
import image from "../../img/myfoto.jpg";

import "./style.css";

const Resume = () => {
  return (
    <div className="resume-wrapper">
      <section className="profile section-padding">
        <div className="container">
          <div className="picture-resume-wrapper">
            <div className="picture-resume">
              <span>
                <img src={image} alt="myfoto" classNameName="myfoto" />
              </span>
              <svg version="1.1" viewBox="0 0 350 350">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                  </filter>
                </defs>

                <g filter="url(#goo)">
                  <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r="130" />

                  <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
                </g>
              </svg>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="name-wrapper">
            <h1>
              Межеедов <br />
              Юрий
            </h1>
          </div>
          <div className="clearfix"></div>
          <div className="contact-info clearfix">
            <ul className="list-titles">
              <li>Телефон</li>
              <li>Почта</li>
              <li>Web</li>
              <li>Адрес</li>
            </ul>
            <ul className="list-content ">
              <li>
                <a href="tel:+79991716526">+79991716526</a>
              </li>
              <li>mag9007@yandex.ru</li>
              <li>
                <a href="https://github.com/MYuriy1970">github.com/MYuriy1970</a>
              </li>
              <li>Россия, Тольятти</li>
            </ul>
          </div>
          <div className="contact-presentation">
            <p>
              Мужчина, 52 года, год рождения- 1970, проживаю в г.Тольятти,
              <br />
              <strong>Специализация:</strong> — Программист, разработчик <br />
              <strong>Занятость:</strong> полная занятость <br />
              <strong>График работы:</strong> полный день, удаленная работа
            </p>
          </div>
          <div className="contact-social clearfix">
            <ul className="list-titles">
              <li>VK</li>
              <li>github</li>
            </ul>
            <ul className="list-content">
              <li>
                <a href="https://vk.com/feed">Вконтакте</a>
              </li>
              <li>
                <a href="https://github.com/MYuriy1970">github</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="experience section-padding">
        <div className="container">
          <h3 className="experience-title">Experience</h3>

          <div className="experience-wrapper">
            <div className="company-wrapper clearfix">
              <div className="experience-title">Company name</div>
              <div className="time">Nov 2012 - Present</div>
            </div>

            <div className="job-wrapper clearfix">
              <div className="experience-title">Front End Developer </div>
              <div className="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>

            <div className="company-wrapper clearfix">
              <div className="experience-title">Company name</div>
              <div className="time">Nov 2010 - Present</div>
            </div>

            <div className="job-wrapper clearfix">
              <div className="experience-title">Freelance, Web Designer / Web Developer</div>
              <div className="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>

            <div className="company-wrapper clearfix">
              <div className="experience-title">Company name</div>
              <div className="time">Nov 2009 - Nov 2010</div>
            </div>

            <div className="job-wrapper clearfix">
              <div className="experience-title">Web Designer </div>
              <div className="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>
          </div>

          <div className="section-wrapper clearfix">
            <h3 className="section-title">Skills</h3>
            <ul>
              <li className="skill-percentage">HTML / HTML5</li>
              <li className="skill-percentage">CSS / CSS3 / SASS / LESS</li>
              <li className="skill-percentage">Javascript</li>
              <li className="skill-percentage">Jquery</li>
              <li className="skill-percentage">Wordpress</li>
              <li className="skill-percentage">PHP</li>
            </ul>
          </div>

          <div className="section-wrapper clearfix">
            <h3 className="section-title">Hobbies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
    </div>
  );
};

export default Resume;
