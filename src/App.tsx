import { useState, useEffect } from "react";
import "./App.css";

import MonitorchikiScreen from "./assets/monitorchikiScreen.png";
import TennisScreen from "./assets/tennis.png";
import OpenWalletScreen from "./assets/openWallet.jpg";
import Me from "./assets/ava.jpg";

function App() {
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

  useEffect(() => {
    const menuButton = document.querySelector<HTMLButtonElement>(".nav-button");
    const mobileMenu = document.querySelector<HTMLElement>(".mobile-nav");
    if (!menuButton || !mobileMenu) return;

    const onToggle = () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      mobileMenu.classList.toggle("open", !open);
    };

    const onLinkClick = () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
    };

    menuButton.addEventListener("click", onToggle);
    const links = Array.from(mobileMenu.querySelectorAll("a"));
    links.forEach((link) => link.addEventListener("click", onLinkClick));

    return () => {
      menuButton.removeEventListener("click", onToggle);
      links.forEach((link) => link.removeEventListener("click", onLinkClick));
    };
  }, []);

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
        <nav className="desktop-nav">
          <ul className="desktop-navigation">
            <li>
              <a href="#about">Обо мне</a>
            </li>
            <li>
              <a href="#projects">Портфолио</a>
            </li>
            <li>
              <a href="#stack">Стэк</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
            <li>
              <button className="themeButton" onClick={handleToggle}>
                {labels[themeMode]}
              </button>
            </li>
          </ul>
        </nav>
        <button className="nav-button">Меню</button>
        <nav className="mobile-nav">
          <ul className="mobile-navigation">
            <li>
              <a href="#about">Обо мне &rarr;</a>
            </li>
            <li>
              <a href="#projects">Портфолио &rarr;</a>
            </li>
            <li>
              <a href="#stack">Стэк &rarr;</a>
            </li>
            <li>
              <a href="#contacts">Контакты &rarr;</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="me">
          <div id="top" className="me">
            <div>
              <img src={Me} alt="" />
              <div className="code-card" aria-label="Карточка кандидата">
                <span className="code-comment">// candidate.ts</span>
                <code>const candidate = </code>
                <code>
                  &nbsp;&nbsp;focus: <b>"frontend"</b>,
                </code>
                <code>
                  &nbsp;&nbsp;status: <b>"open_to_work"</b>
                </code>
                <code>;</code>
              </div>
            </div>
            <div className="about-me">
              <h5 className="me-hero">Кто я</h5>
              <h5>[Студент · Frontend-разработчик · Ищу стажировку]</h5>
              <h1 className="myName">Игорь, Fronend-разработчик</h1>
              <p className="lead">
                Учусь на 4 курсе университета по направлению "Веб-технологии".
                Разрабатываю адаптивные интерфейсы на React и
                JavaScript/TypeScript. Ищу стажировку, где смогу приносить
                пользу команде и расти на реальных задачах, а не распыляться на
                все направления как в универе.
              </p>
              <div className="me-buttons row">
                <a className="projects-button">[Смотреть проекты]</a>
                <a className="contact-button">[Связаться со мной]</a>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <h5 className="section-num">01 / обо мне</h5>
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
                  <p>Полноценных проекта</p>
                </li>
                <li>
                  <h3>[1]</h3>
                  <p>Коммерческий</p>
                </li>
                <li>
                  <h3>[3]</h3>
                  <p>asdf</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects">
          <h5 className="section-num">02 / проекты</h5>
          <h5>Pet и коммерческие проекты</h5>
          <h2>Проекты, над которыми я работал</h2>
          <div className="projects-list">
            <article className="project-card">
              <img className="" src={MonitorchikiScreen} alt="" />
              <div className="project-info">
                <h5>pet-проект · 2026</h5>
                <h3>Mirai Station</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia dolorem suscipit aut blanditiis repellendus
                  assumenda.
                </p>
                <div>
                  <ul className="project-stack">
                    <li>[React]</li>
                    <li>[TypeScript]</li>
                    <li>[Node.js]</li>
                    <li>[express.js]</li>
                    <li>[PostgreSQL]</li>
                    <li>[REST API]</li>
                  </ul>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/Igor-Zolin/MiraiStation/"
                >
                  [GitHub]
                </a>
                <a href=""></a>
              </div>
            </article>
            <article className="project-card project-card-reverse">
              <img className="case-media" src={TennisScreen} alt="" />
              <div className="project-info">
                <h5>Коммерческий проект · 2025</h5>
                <h3>Table Tennis Plaza</h3>
                <p>Одностраничный лендинг </p>
                <div>
                  <ul className="project-stack">
                    <li>[HTML]</li>
                    <li>[CSS]</li>
                    <li>[JavaScript]</li>
                  </ul>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/Igor-Zolin/Tennis-Plaza-main"
                >
                  [GitHub]
                </a>
                <a href=""></a>
              </div>
            </article>
            <article className="project-card">
              <img className="" src={MonitorchikiScreen} alt="" />
              <div className="project-info">
                <h5>ВУЗовский проект · 2024-2025</h5>
                <h3>Monitorchiki</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia dolorem suscipit aut blanditiis repellendus
                  assumenda.
                </p>
                <div>
                  <ul className="project-stack">
                    <li>[HTML]</li>
                    <li>[CSS]</li>
                    <li>[JavaScript]</li>
                  </ul>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/Igor-Zolin/monitorchiki"
                >
                  [GitHub]
                </a>
                <a target="_blank" href="https://monitorchiki.ru">
                  [Link]
                </a>
              </div>
            </article>
            <article className="project-card project-card-reverse">
              <img className="case-media" src={OpenWalletScreen} alt="" />
              <div className="project-info">
                <h5>В разработке</h5>
                <h3>OpenWallet</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia dolorem suscipit aut blanditiis repellendus
                  assumenda.
                </p>
                <div>
                  <ul className="project-stack">
                    <li>[React]</li>
                    <li>[TypeScript]</li>
                    <li>[Node.js]</li>
                  </ul>
                </div>
                <a href=""></a>
                <a href=""></a>
              </div>
            </article>
          </div>
        </section>
        <section>
          <h5 className="section-num">03 / обучение и практика</h5>
          <h5></h5>
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
                польльзовательских интерфейсов, проектирование веб-сервисов
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
          <h5 className="section-num">04 / технический стэк</h5>
          <h5>что я уже использую</h5>
          <ul className="stack">
            <li className="stack-item">
              <h5>01</h5>
              <h3>[Основа Frontend]</h3>
              <p>
                [HTML5, семантика, CSS5, flex, grid, адаптивная вёрстка,
                JavaScript ES6+]
              </p>
            </li>
            <li className="stack-item">
              <h5>02</h5>
              <h3>[Фреймворки]</h3>
              <p>[React, React Routes, TypeScript, управление состоянием]</p>
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
          <h5 className="section-num">05 / контакты</h5>
          <h5>открыт к стажировке</h5>
          <div>
            <div>
              <h2>Буду рад познакомиться с вашей командой</h2>
              <p>
                Рассматриваю варианты стажировок или выход на Junior-позицию в
                Москве удалённо или в гибридном формате, чтобы мог совмещать с
                обучением в университете Part-time,{" "}
              </p>
              <a href="mailto:timofey.danilov@gmail.com">
                <img src="" alt="" />
                timofey.danilov@gmail.com</a>
            </div>
            <div>
              <ul className="contacts-links">
                {/* <li>
                  <a href="">
                    <img src={TelegramLogo} alt="" />
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={GitHubLogo} alt="" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={HHLogo} alt="" />
                    HeadHunter
                  </a>
                </li>
                <li> */}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy;2026 Igor Zolin</p>
        <p>[Студент · Frontend-разработчик · Ищу стажировку]</p>
        <button onClick={goTop}>Наверх &uarr;</button>
      </footer>
    </>
  );
}

export default App;
