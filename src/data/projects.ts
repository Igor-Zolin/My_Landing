import MiraiLogo from "../assets/miraiLogo.webp";
import TTPlazaLogo from "../assets/TTPlazaLogo.jpg";
import MonitorchikiScreen from "../assets/monitorchikiScreen.webp";
import OpenWalletLogo from "../assets/openWallet.webp";

export type Project = {
  title: string;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Mirai Station",
    type: "pet-проект · 2026",
    description: "Веб-приложение в формате Telegram Mini App, разработанное на React, TypeScript и Vite. Серверная часть реализована на Node.js и Express с использованием PostgreSQL, JWT-аутентификации и проверки данных Telegram. В приложении реализованы игровая система, магазин, инвентарь, экипировка персонажа, пользовательский маркетплейс и подключение TON-кошелька через TON Connect.",
    image: MiraiLogo,
    imageAlt: "Логотип проекта Mirai Station",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "express.js",
      "PostgreSQL",
      "REST API"
    ],
    github: "https://github.com/Igor-Zolin/MiraiStation/",
  },
  {
    title: "Table Tennis Plaza",
    type: "Коммерческий проект · 2025",
    description: "Лендинг для теннисного клуба в Паттайе, разработанный на HTML, CSS и JavaScript. Реализованы локализация на русский, английский и тайский языки, фотокарусель и адаптивная вёрстка с использованием Flexbox и CSS Grid.",
    image: TTPlazaLogo,
    imageAlt: "Логотип теннисного клуба Table Tennis Plaza",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Igor-Zolin/Tennis-Plaza-main",
  },
  {
    title: "Monitorchiki",
    type: "ВУЗовский проект · 2024-2025",
    description: "Многостраничный образовательный сайт детского электронного издания «Мониторчики», разработанный на HTML, CSS и JavaScript. Проект посвящён интернет-безопасности и цифровой грамотности. Реализованы адаптивная вёрстка, интерактивные материалы, модальные слайдеры, викторина, браузерная мини-игра и загрузка обучающих материалов.",
    image: MonitorchikiScreen,
    imageAlt: 'Главный экран сайта "Мониторчики"',
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Igor-Zolin/monitorchiki",
    demo: "https://monitorchiki.ru",
  },
  {
    title: "OpenWallet",
    type: "В разработке",
    description: "Веб-версия некастодиального кошелька для сети TON с поддержкой мнемонических фраз, TON Connect, управления активами и персонализации интерфейса. Разрабатывается на React, TypeScript и WalletKit.",
    image: OpenWalletLogo,
    imageAlt: "Логотип проекта OpenWallet",
    stack: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Igor-Zolin/OpenWallet",
  },
]