# АК Гранат — Редизайн сайта КАМАЗ К5
## Структура проекта

```
granat-kamaz/
├── index.html              ← Главная страница
├── catalog.html            ← Каталог (обзор всех категорий)
├── catalog-samosval.html   ← Самосвалы КАМАЗ К5 (с фильтром)
├── catalog-tyagach.html    ← Седельные тягачи (добавить по аналогии)
├── catalog-spec.html       ← Спецтехника (добавить по аналогии)
├── contacts.html           ← Контакты + форма обратной связи
├── novosti.html            ← Новости
├── about.html              ← О компании (добавить по аналогии)
├── service.html            ← Сервис и гарантия (добавить по аналогии)
├── zapchasti.html          ← Запасные части (добавить по аналогии)
├── css/
│   └── style.css           ← Вся стилевая система
└── js/
    ├── layout.js           ← Шапка + подвал + модальное окно
    └── main.js             ← Бургер-меню, анимации, формы

```

## Как добавлять новые страницы

Скопируйте любую существующую страницу (например `catalog-samosval.html`) и:
1. Обновите `<title>`, `<meta description>`, `<link rel="canonical">`
2. Обновите хлебные крошки в `.breadcrumb`
3. Замените контент внутри `<main>`
4. Подключения JS-файлов и `id="site-header"` / `id="site-footer"` — оставьте как есть

## SEO — что уже встроено

- Уникальные `<title>` и `<meta description>` на каждой странице
- `<link rel="canonical">` на каждой странице
- Open Graph теги (og:title, og:description, og:image, og:url)
- Schema.org разметка (AutoDealer + ItemList)
- Семантические теги: `<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`
- `aria-label` для скринридеров и SEO
- `alt` у всех изображений
- `loading="lazy"` для изображений ниже fold
- Правильная иерархия заголовков (h1 → h2 → h3)

## Дизайн-решения

- **Цвета**: белый / светло-серый / бордовый (#8b1a1a) / тёмно-серый
- **Шрифты**: Montserrat (заголовки, кнопки) + PT Sans (текст)
- **Адаптив**: 3 брейкпоинта (1100px / 900px / 680px)
- **Анимации**: fade-up через IntersectionObserver (без JS-фреймворков)
- **Фильтр** на странице самосвалов: фильтрация по колёсной формуле

## Следующий шаг — Node.js backend

Когда будете готовы, запросите: "Добавь Node.js backend с REST API для управления моделями".
Backend будет обслуживать те же HTML-страницы и предоставлять API для:
- GET  /api/models      — список моделей
- POST /api/models      — добавить модель
- PUT  /api/models/:id  — обновить модель
- DELETE /api/models/:id — удалить модель
