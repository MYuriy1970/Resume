/* eslint-disable jsx-a11y/alt-text */
import image from "../../img/myfoto.jpg";

import "./style.css";

const Resume = () => {
  return (
    <div class="resume-wrapper">
      <section class="profile section-padding">
        <div class="container">
          <div class="picture-resume-wrapper">
            <div class="picture-resume">
              <span>
                <img src={image} alt="myfoto" className="myfoto" />
              </span>
              <svg version="1.1" viewBox="0 0 350 350">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                  </filter>
                </defs>

                <g filter="url(#goo)">
                  <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130" />

                  <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                  <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
                </g>
              </svg>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="name-wrapper">
            <h1>
              Межеедов <br />
              Юрий
            </h1>
          </div>
          <div class="clearfix"></div>
          <div class="contact-info clearfix">
            <ul class="list-titles">
              <li>Телефон</li>
              <li>Почта</li>
              <li>Web</li>
              <li>Адрес</li>
            </ul>
            <ul class="list-content ">
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
          <div class="contact-presentation">
            <p>
              Мужчина, 52 года, год рождения- 1970, проживаю в г.Тольятти,
              <br />
              <strong>Специализация:</strong> — Программист, разработчик <br />
              <strong>Занятость:</strong> полная занятость <br />
              <strong>График работы:</strong> полный день, удаленная работа
            </p>
          </div>
          <div class="contact-social clearfix">
            <ul class="list-titles">
              <li>VK</li>
              <li>github</li>
            </ul>
            <ul class="list-content">
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

      <section class="experience section-padding">
        <div class="container">
          <h3 class="experience-title">Experience</h3>

          <div class="experience-wrapper">
            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2012 - Present</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Front End Developer </div>
              <div class="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>

            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2010 - Present</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Freelance, Web Designer / Web Developer</div>
              <div class="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>

            <div class="company-wrapper clearfix">
              <div class="experience-title">Company name</div>
              <div class="time">Nov 2009 - Nov 2010</div>
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">Web Designer </div>
              <div class="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>
          </div>

          <div class="section-wrapper clearfix">
            <h3 class="section-title">Skills</h3>
            <ul>
              <li class="skill-percentage">HTML / HTML5</li>
              <li class="skill-percentage">CSS / CSS3 / SASS / LESS</li>
              <li class="skill-percentage">Javascript</li>
              <li class="skill-percentage">Jquery</li>
              <li class="skill-percentage">Wordpress</li>
              <li class="skill-percentage">PHP</li>
            </ul>
          </div>

          <div class="section-wrapper clearfix">
            <h3 class="section-title">Hobbies</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
          </div>
        </div>
      </section>

      <div class="clearfix"></div>
    </div>
  );
};

export default Resume;
