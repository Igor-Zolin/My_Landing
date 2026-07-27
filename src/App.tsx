import { useState, useEffect } from "react";
import "./App.css";

import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

import Me from "./assets/ava.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  type ThemeMode = "system" | "light" | "dark";

  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedTheme = localStorage.getItem("app-theme");
    return storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
      ? storedTheme
      : "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (themeMode === "system") {
      root.removeAttribute("data-theme");
      localStorage.setItem("app-theme", themeMode);
    } else {
      root.setAttribute("data-theme", themeMode);
      localStorage.setItem("app-theme", themeMode);
    }
  }, [themeMode]);

  const handleToggle = () => {
    setThemeMode((current) => {
      if (current === "system") return "light";
      if (current === "light") return "dark";
      return "system";
    });
  };

  const labels = {
    system: (
      <svg
        height="30"
        // width="109"
        // height="90"
        viewBox="0 0 109 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M108.927 33.2571C108.927 36.1964 108.927 39.052 108.927 41.9077C108.927 56.1024 108.819 70.2851 108.999 84.4798C109.047 88.5422 107.779 90.0119 103.583 89.9999C70.8484 89.8685 38.1139 89.9282 5.36751 89.9282C2.72533 89.9282 0.0233585 90.1553 0.0233585 86.2601C0.0472697 68.7677 0.0233585 51.2752 0.0233585 33.2571H108.927ZM73.8373 42.8755V75.2556H94.4129V42.8755H73.8373ZM14.4896 54.0234H61.3078V42.9114H14.4896V54.0234ZM14.5853 64.1914V75.3393H61.1045V64.1914H14.5853Z"
          fill="var(--text)"
        />
        <path
          d="M0.0233506 28.0235C0.0233506 21.3324 -0.0364272 15.0476 0.0353065 8.78662C0.10704 2.22696 2.30687 0.0523565 9.01397 0.0404081C36.9781 0.00456295 64.9423 0.0284606 92.8945 0.0284606C95.8475 0.0284606 98.8006 -0.0551784 101.754 0.0643054C106.189 0.243531 108.76 2.64515 108.855 7.08995C109.011 13.9483 108.903 20.8067 108.903 28.0474H0.0233506V28.0235ZM96.9833 9.83808H40.6963V18.4887H96.9833V9.83808ZM7.48365 14.2948C10.6519 16.4814 12.6365 18.871 14.0353 18.5723C15.8884 18.1661 18.1241 15.8601 18.5665 13.9842C18.8176 12.8969 15.8884 9.88587 14.3701 9.86197C12.5528 9.83808 10.6997 12.0844 7.4956 14.2948H7.48365ZM28.3701 7.26918C26.1583 10.782 23.9824 12.7296 24.078 14.5457C24.1617 16.0632 26.9354 18.5484 28.4896 18.5365C30.0319 18.5245 32.7219 15.9556 32.7817 14.4263C32.8415 12.6101 30.6297 10.7103 28.3701 7.26918Z"
          fill="var(--text)"
        />
      </svg>
    ),
    light: (
      <svg
        width="30"
        // width="166"
        // height="166"
        viewBox="0 0 166 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M133 83C133 110.614 110.614 133 83 133C55.3858 133 33 110.614 33 83C33 55.3858 55.3858 33 83 33C110.614 33 133 55.3858 133 83Z"
          fill="var(--text)"
        />
        <path
          d="M83 0L101 31C101 31 90.0076 28.5526 83 28.5526C75.9924 28.5526 65 31 65 31L83 0Z"
          fill="var(--text)"
        />
        <path
          d="M83 166L101 135C101 135 90.0076 137.447 83 137.447C75.9924 137.447 65 135 65 135L83 166Z"
          fill="var(--text)"
        />
        <path
          d="M166 83.0005L135 101C135 101 137.447 90.0081 137.447 83.0005C137.447 75.9929 135 65.0005 135 65.0005L166 83.0005Z"
          fill="var(--text)"
        />
        <path
          d="M0 83.0005L31 101C31 101 28.5526 90.0081 28.5526 83.0005C28.5526 75.9929 31 65.0005 31 65.0005L0 83.0005Z"
          fill="var(--text)"
        />
        <path
          d="M141.69 24.3104L132.498 58.9586C132.498 58.9586 126.456 49.4553 121.5 44.5002C116.545 39.545 107.042 33.5028 107.042 33.5028L141.69 24.3104Z"
          fill="var(--text)"
        />
        <path
          d="M24.3105 141.69L58.9587 132.498C58.9587 132.498 49.4554 126.456 44.5003 121.5C39.5451 116.545 33.5029 107.042 33.5029 107.042L24.3105 141.69Z"
          fill="var(--text)"
        />
        <path
          d="M141.69 141.69L107.042 132.498C107.042 132.498 116.545 126.456 121.5 121.501C126.455 116.546 132.498 107.042 132.498 107.042L141.69 141.69Z"
          fill="var(--text)"
        />
        <path
          d="M24.3102 24.3108L33.5026 58.959C33.5026 58.959 39.5448 49.4556 44.4999 44.5005C49.4551 39.5454 58.9584 33.5031 58.9584 33.5031L24.3102 24.3108Z"
          fill="var(--text)"
        />
      </svg>
    ),
    dark: (
      <svg
        height="30"
        // width="100"
        // height="139"
        viewBox="0 0 100 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.7958 0C69.0162 0 100 31.1162 100 69.5C100 107.884 69.0162 139 30.7958 139C19.7312 139 9.27553 136.387 0 131.75C3.6671 132.853 7.48935 133.44 11.4187 133.44C38.9374 133.44 61.2457 104.813 61.2457 69.5C61.2457 34.1869 38.9374 5.56 11.4187 5.56C7.48948 5.56001 3.66698 6.14525 0 7.24863C9.2754 2.6118 19.7314 2.24017e-05 30.7958 0Z"
          fill="black"
        />
      </svg>
    ),
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="row">
        <div className="logo-div row">
          <svg
            height="40"
            viewBox="0 0 184 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9643 27.8974L36.9643 128L47.6429 128L65.7143 100.102L65.7143 27.8974H90.3571L108.429 0.00021284L98.5712 0.00022536C77.3986 0.000358559 36.9643 0 36.9643 0H7.98064e-06L0 27.8974H36.9643Z"
              fill="var(--text-h)"
            />
            <path
              d="M184 63.9999C184 99.3461 155.314 128 119.929 128L64 128L82.0714 100.102L119.929 100.102C138.982 100.102 156.071 83.9388 156.071 63.9999C156.071 44.0611 138.982 27.8974 119.929 27.8974H106.714L124.786 0C160.171 0 184 28.6537 184 63.9999Z"
              fill="#0C0C0C"
            />
          </svg>
          <p className="text-h">Игорь Золин</p>
        </div>
        <div className="row">
          <nav className="desktop-nav">
            <ul className="desktop-navigation">
              <li>
                <a href="#about">Обо мне</a>
              </li>
              <li>
                <a href="#projects">Портфолио</a>
              </li>
              <li>
                <a href="#stack">Стек</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
              <li></li>
            </ul>
          </nav>
          <button
            aria-label={`Тема: ${themeMode}. Переключить тему`}
            className="themeButton"
            onClick={handleToggle}
          >
            {labels[themeMode]}
          </button>
          <button
            className="nav-button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Закрыть" : "Меню"}
          </button>
          <nav
            className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
            aria-label="Мобильная навигация"
          >
            <ul className="mobile-navigation">
              <li>
                <a href="#about">Обо мне &rarr;</a>
              </li>
              <li>
                <a href="#projects">Портфолио &rarr;</a>
              </li>
              <li>
                <a href="#stack">Стек &rarr;</a>
              </li>
              <li>
                <a href="#contacts">Контакты &rarr;</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="me" id="me">
          <div>
            <img src={Me} alt="Фотография кандидата" />
            <div className="code-card" aria-label="Карточка кандидата">
              <span className="code-comment">// candidate.ts</span>
              <code>const candidate = {"{"}</code>
              <code>
                &nbsp;&nbsp;focus: <b>"frontend"</b>,
              </code>
              <code>
                &nbsp;&nbsp;status: <b>"open_to_work"</b>
              </code>
              <code>{"}"};</code>
            </div>
          </div>
          <div className="about-me">
            <h5 className="me-hero">Кто я</h5>
            <h5>[Студент · Frontend-разработчик · Ищу стажировку]</h5>
            <h1 className="myName">Игорь, Frontend-разработчик</h1>
            <p className="lead">
              Учусь на 4 курсе университета по направлению "Веб-технологии".
              Разрабатываю адаптивные интерфейсы на React и
              JavaScript/TypeScript. Ищу стажировку, где смогу приносить пользу
              команде и расти на реальных задачах, а не распыляться на все
              направления как в универе.
            </p>
            <div className="me-buttons row">
              <a href="#projects" className="projects-button">
                [Смотреть проекты]
              </a>
              <a href="#contacts" className="contact-button">
                [Связаться со мной]
              </a>
            </div>
          </div>
        </section>
        <section id="about">
          <p className="section-num">01 / обо мне</p>
          <h5>короткое позиционирование</h5>
          <h2>
            Создаю понятные и адаптивные интерфейсы и постоянно прокачиваю
            собственные скиллы
          </h2>
          <div className="about-body row">
            <div className="terminal-placeholder">
              <div className="terminal-bar">
                <i></i>
                <i></i>
                <i></i>
                <span>portfolio-project</span>
              </div>
              <div className="terminal-content">
                <span>$ npm run dev</span>
                <span className="terminal-success">✓ ready in 420ms</span>
                <span>➜ Local: http://localhost:5173</span>
              </div>
            </div>
            <div className="stats-div">
              <p className="about-text">
                Начал изучать веб в 2023. В частности делаю упор на frontend,
                так как считаю, что с него всё начинается. В перспективе изучать
                Golang и больше углубляться в серверную разработку.
              </p>
              <p className="about-text">
                Обучаюсь в университете, практикуюсь в разработке самостоятельно
                через pet-проекты или, если находятся, проекты знакомым
              </p>
              <ul className="stats">
                <li>
                  <h3>[3]</h3>
                  <p>Готовых проекта</p>
                </li>
                <li>
                  <h3>[1]</h3>
                  <p>Коммерческий</p>
                </li>
                <li>
                  <h3>[2]</h3>
                  <p>Проекта с заказчиком</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects">
          <p className="section-num">02 / проекты</p>
          <h5>Pet и коммерческие проекты</h5>
          <h2>Проекты, над которыми я работал</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </section>
        <section>
          <p className="section-num">03 / обучение и практика</p>
          <h5>образование, активности</h5>
          <h2>Мой путь развития в Web</h2>
          <ul className="road">
            <li className="row road-item">
              <p>09.2023 — сейчас</p>
              <div>
                <h3>Московский Политех</h3>
                <p>Веб-технологии · 4 курс</p>
              </div>
              <p>
                Веб-разработка, серверная разработка, проектирование
                пользовательских интерфейсов, проектирование веб-сервисов
              </p>
            </li>
            <li className="row road-item">
              <p>12.2025 — сейчас</p>
              <div>
                <h3>React и Node.js</h3>
                <p>Самостоятельное изучение</p>
              </div>
              <p>Promises, асинхронность, состояния, virtual DOM, компоненты</p>
            </li>
            <li className="row road-item">
              <p>07.2026 — сейчас</p>
              <div>
                <h3>Vue + Nuxt.js</h3>
                <p>Самостоятельное изучение</p>
              </div>
              <p></p>
            </li>
          </ul>
        </section>
        <section id="stack">
          <p className="section-num">04 / технический стек</p>
          <h5>что я уже использую</h5>
          <h2>Инструменты и технологии</h2>
          <ul className="stack">
            <li className="stack-item">
              <h5>01</h5>
              <h3>[Основа Frontend]</h3>
              <p>
                [HTML5, семантика, CSS, flex, grid, адаптивная вёрстка,
                JavaScript ES6+]
              </p>
            </li>
            <li className="stack-item">
              <h5>02</h5>
              <h3>[Фреймворки]</h3>
              <p>[React, React Router, TypeScript, управление состоянием]</p>
            </li>
            <li className="stack-item">
              <h5>03</h5>
              <h3>[Инструменты]</h3>
              <p>[GitHub, git, npm, vite, Figma, DevTools, REST API, ESLint]</p>
            </li>
            <li className="stack-item">
              <h5>04</h5>
              <h3>[Изучаю сейчас]</h3>
              <p>[Next.js, Vue + Nuxt.js, Node.js]</p>
            </li>
          </ul>
        </section>
        <section id="contacts">
          <div className="contacts-copy">
            <p className="section-num">05 / контакты</p>
            <h5>открыт к стажировке</h5>
            <h2>
              Буду рад познакомиться <br></br>с вашей командой
            </h2>
            <p>
              Рассматриваю стажировки и Junior-позиции в Москве с удалённым или
              гибридным форматом работы. Ищу возможность работать part-time и
              совмещать профессиональное развитие с обучением в университете.
            </p>
            <a className="contact-email" href="mailto:">
              [igor.zolin@gmail.com]
            </a>
          </div>
          <ul className="contacts-links">
            <li>
              <a href="https://t.me/perfectly_person">
                <div className="linkName">
                  <svg
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M46.8452 23.4227C46.8452 36.3586 36.3585 46.8453 23.4226 46.8453C10.4866 46.8453 0 36.3586 0 23.4227C0 10.4867 10.4866 0 23.4226 0C36.3585 0 46.8452 10.4867 46.8452 23.4227ZM24.262 17.2916C21.9838 18.2392 17.4306 20.2005 10.6024 23.1754C9.49362 23.6163 8.9128 24.0477 8.85993 24.4695C8.77057 25.1823 9.66322 25.463 10.8788 25.8452C11.0441 25.8972 11.2154 25.951 11.3911 26.0081C12.587 26.3969 14.1957 26.8517 15.032 26.8697C15.7906 26.8861 16.6373 26.5734 17.5721 25.9315C23.9519 21.625 27.2451 19.4482 27.4519 19.4013C27.5978 19.3682 27.7999 19.3266 27.9368 19.4483C28.0738 19.57 28.0603 19.8006 28.0458 19.8624C27.9574 20.2394 24.4534 23.497 22.6401 25.1828C22.0748 25.7084 21.6738 26.0812 21.5919 26.1663C21.4083 26.357 21.2211 26.5374 21.0413 26.7108C19.9302 27.7818 19.097 28.585 21.0874 29.8966C22.0438 30.5269 22.8092 31.0481 23.5727 31.5681C24.4066 32.136 25.2384 32.7024 26.3145 33.4078C26.5887 33.5876 26.8505 33.7742 27.1056 33.9561C28.076 34.6479 28.9479 35.2694 30.025 35.1703C30.6509 35.1127 31.2974 34.5242 31.6257 32.769C32.4017 28.6208 33.9269 19.633 34.2794 15.9293C34.3103 15.6048 34.2714 15.1895 34.2402 15.0072C34.209 14.8249 34.1438 14.5652 33.9069 14.3729C33.6262 14.1452 33.193 14.0972 32.9992 14.1006C32.1183 14.1161 30.7667 14.5861 24.262 17.2916Z"
                      fill="white"
                    />
                  </svg>
                  Telegram
                </div>
                &#8599;
              </a>
            </li>
            <li>
              <a href="https://github.com/Igor-Zolin">
                <div className="linkName">
                  <svg
                    data-component="Octicon"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    display="inline-block"
                    overflow="visible"
                  >
                    <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943"></path>
                  </svg>
                  GitHub
                </div>
                &#8599;
              </a>
            </li>
            <li>
              <a href="https://vk.ru/world_person">
                <div className="linkName">
                  <svg
                    viewBox="0 0 101 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.52944 7.02944C0.5 14.0589 0.5 25.3726 0.5 48V52C0.5 74.6274 0.5 85.9411 7.52944 92.9706C14.5589 100 25.8726 100 48.5 100H52.5C75.1274 100 86.4411 100 93.4706 92.9706C100.5 85.9411 100.5 74.6274 100.5 52V48C100.5 25.3726 100.5 14.0589 93.4706 7.02944C86.4411 0 75.1274 0 52.5 0H48.5C25.8726 0 14.5589 0 7.52944 7.02944ZM17.3752 30.4169C17.9168 56.4169 30.9167 72.0418 53.7084 72.0418H55.0003V57.1668C63.3753 58.0001 69.7082 64.1252 72.2498 72.0418H84.0835C80.8335 60.2085 72.2914 53.6668 66.9581 51.1668C72.2914 48.0835 79.7915 40.5835 81.5831 30.4169H70.8328C68.4995 38.6669 61.5836 46.1668 55.0003 46.8751V30.4169H44.2499V59.2501C37.5833 57.5835 29.1668 49.5002 28.7918 30.4169H17.3752Z"
                      fill="black"
                    />
                    <defs>
                      <rect fill="white" transform="translate(0.5)" />
                    </defs>
                  </svg>
                  VK
                </div>
                &#8599;
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2026 Igor Zolin</p>
        <p>[Frontend Developer]</p>
        <button onClick={goTop}>Наверх &uarr;</button>
      </footer>
    </>
  );
}

export default App;
