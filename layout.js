/* ============================================================
   АК ГРАНАТ — Shared HTML snippets
   ============================================================ */

const HEADER_HTML = `
<header class="site-header">
  <!-- Topbar -->
  <div class="header-topbar">
    <div class="container">
      <div class="topbar-left">
        <a href="tel:+78123345010" class="topbar-contact">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 11.65 19.79 19.79 0 01.37 3.09a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.81a16 16 0 006.29 6.29l1.08-.68a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.05z"/></svg>
          +7 (812) 334-50-10
        </a>
        <a href="mailto:kamaz@granat.spb.ru" class="topbar-contact">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          kamaz@granat.spb.ru
        </a>
        <span class="topbar-contact">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          СПб, пос. Шушары, ул. Ленина, 2
        </span>
      </div>
      <div class="topbar-right">
        <div class="topbar-social">
          <a href="https://vk.com/akgranat" target="_blank" rel="noopener" aria-label="ВКонтакте">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.6-.19 1.37 1.261 2.185 1.817.617.42 1.087.328 1.087.328l2.184-.03s1.142-.071.6-.968c-.044-.073-.314-.661-1.618-1.869-1.366-1.267-1.183-1.062.462-3.253.999-1.333 1.399-2.146 1.273-2.494-.12-.332-.855-.244-.855-.244l-2.461.015s-.182-.025-.317.055c-.133.079-.218.262-.218.262s-.387 1.028-.903 1.902c-1.088 1.847-1.524 1.946-1.702 1.832-.414-.268-.311-1.075-.311-1.648 0-1.793.272-2.54-.529-2.733-.266-.064-.461-.107-1.141-.114-.872-.009-1.609.003-2.027.207-.278.136-.493.44-.362.457.162.022.529.099.724.364.25.344.241 1.116.241 1.116s.144 2.11-.335 2.372c-.329.18-.78-.187-1.748-1.86-.497-.858-.872-1.808-.872-1.808s-.072-.176-.203-.271c-.158-.115-.38-.151-.38-.151l-2.336.015s-.351.01-.48.163c-.114.136-.009.417-.009.417s1.829 4.282 3.899 6.441c1.899 1.98 4.057 1.85 4.057 1.85h.977z"/></svg>
          </a>
          <a href="https://rutube.ru/channel/30776980/" target="_blank" rel="noopener" aria-label="Rutube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14V8l6 4-6 4z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main nav -->
  <div class="header-main">
    <div class="container">
      <a href="index.html" class="site-logo">
        <span class="logo-name">АК <span>Гранат</span></span>
        <span class="logo-sub">Официальный дилер ПАО «КАМАЗ»</span>
      </a>

      <nav class="site-nav" aria-label="Основная навигация">
        <ul>
          <li class="nav-item">
            <a href="about.html">Покупателю
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav-dropdown">
              <a href="about.html">О компании</a>
              <a href="about.html#rekvizity">Реквизиты</a>
              <a href="novosti.html">Новости</a>
              <a href="contacts.html">Контакты</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="catalog.html">Каталог КАМАЗ К5
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav-dropdown">
              <a href="catalog-samosval.html">Самосвалы КАМАЗ К5</a>
              <a href="catalog-tyagach.html">Седельные тягачи КАМАЗ К5</a>
              <a href="catalog-spec.html">Спецтехника К5</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="service.html">Сервис и гарантия
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav-dropdown">
              <a href="service.html#garantia">Гарантия КАМАЗ К5</a>
              <a href="service.html#itis">ИТИС КАМАЗ</a>
              <a href="service.html#services">Пакет сервисных услуг</a>
              <a href="service.html#kontrakt">Сервисный контракт</a>
            </div>
          </li>
          <li class="nav-item"><a href="zapchasti.html">Запасные части</a></li>
        </ul>
      </nav>

      <div class="header-cta">
        <a href="tel:+78123345010" class="header-phone">+7 (812) 334-50-10</a>
        <button class="btn btn-primary btn-sm" data-modal>Заказать звонок</button>
      </div>

      <button class="burger" aria-label="Открыть меню">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile menu -->
<nav class="mobile-menu" aria-label="Мобильное меню">
  <button class="mobile-close" aria-label="Закрыть меню">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <ul>
    <li><a href="index.html">Главная</a></li>
    <li><a href="about.html">О компании</a></li>
    <li><a href="novosti.html">Новости</a></li>
    <li><a href="catalog.html" style="color:var(--clr-burgundy);font-weight:800">Каталог К5</a></li>
    <li class="sub-item"><a href="catalog-samosval.html">— Самосвалы</a></li>
    <li class="sub-item"><a href="catalog-tyagach.html">— Тягачи</a></li>
    <li class="sub-item"><a href="catalog-spec.html">— Спецтехника</a></li>
    <li><a href="service.html">Сервис и гарантия</a></li>
    <li><a href="zapchasti.html">Запасные части</a></li>
    <li><a href="contacts.html">Контакты</a></li>
  </ul>
</nav>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="site-logo">
          <span class="logo-name">АК <span style="color:var(--clr-burgunlgt)">Гранат</span></span>
          <span class="logo-sub" style="color:rgba(255,255,255,.4)">Официальный дилер ПАО «КАМАЗ»</span>
        </a>
        <p>С 1994 года поставляем грузовую технику КАМАЗ в Санкт-Петербурге и Ленинградской области. Официальный дилер ПАО «КАМАЗ».</p>
        <div class="footer-social">
          <a href="https://vk.com/akgranat" target="_blank" aria-label="ВКонтакте">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.6-.19 1.37 1.261 2.185 1.817.617.42 1.087.328 1.087.328l2.184-.03s1.142-.071.6-.968c-.044-.073-.314-.661-1.618-1.869-1.366-1.267-1.183-1.062.462-3.253.999-1.333 1.399-2.146 1.273-2.494-.12-.332-.855-.244-.855-.244l-2.461.015s-.182-.025-.317.055c-.133.079-.218.262-.218.262s-.387 1.028-.903 1.902c-1.088 1.847-1.524 1.946-1.702 1.832-.414-.268-.311-1.075-.311-1.648 0-1.793.272-2.54-.529-2.733-.266-.064-.461-.107-1.141-.114-.872-.009-1.609.003-2.027.207-.278.136-.493.44-.362.457.162.022.529.099.724.364.25.344.241 1.116.241 1.116s.144 2.11-.335 2.372c-.329.18-.78-.187-1.748-1.86-.497-.858-.872-1.808-.872-1.808s-.072-.176-.203-.271c-.158-.115-.38-.151-.38-.151l-2.336.015s-.351.01-.48.163c-.114.136-.009.417-.009.417s1.829 4.282 3.899 6.441c1.899 1.98 4.057 1.85 4.057 1.85h.977z"/></svg>
          </a>
          <a href="https://rutube.ru/channel/30776980/" target="_blank" aria-label="Rutube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14V8l6 4-6 4z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Покупателю</h4>
        <ul>
          <li><a href="about.html">О компании</a></li>
          <li><a href="about.html#rekvizity">Реквизиты</a></li>
          <li><a href="novosti.html">Новости</a></li>
          <li><a href="contacts.html">Контакты</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Каталог КАМАЗ К5</h4>
        <ul>
          <li><a href="catalog-samosval.html">Самосвалы К5</a></li>
          <li><a href="catalog-tyagach.html">Седельные тягачи К5</a></li>
          <li><a href="catalog-spec.html">Спецтехника К5</a></li>
          <li><a href="zapchasti.html">Запасные части</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Сервис</h4>
        <ul>
          <li><a href="service.html#garantia">Гарантия К5</a></li>
          <li><a href="service.html#itis">ИТИС КАМАЗ</a></li>
          <li><a href="service.html#services">Пакет услуг</a></li>
          <li><a href="service.html#kontrakt">Сервисный контракт</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 1994–2026 ООО «Автомобильная компания «Гранат». Официальный дилер ПАО «КАМАЗ».</span>
      <span style="display:flex;gap:20px">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Пользовательское соглашение</a>
      </span>
    </div>
  </div>
</footer>

<!-- Modal: callback -->
<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <button class="modal-close" id="modal-close" aria-label="Закрыть">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <h3 style="margin-bottom:8px">Заказать звонок</h3>
    <p style="color:var(--clr-muted);font-size:.85rem;margin-bottom:24px">Менеджер свяжется с вами в ближайшее время</p>
    <form data-form>
      <div class="form-group">
        <label for="cb-name">Ваше имя</label>
        <input type="text" id="cb-name" placeholder="Иван Петров" required>
      </div>
      <div class="form-group">
        <label for="cb-phone">Телефон *</label>
        <input type="tel" id="cb-phone" placeholder="+7 (___) ___-__-__" required>
      </div>
      <p class="form-consent">Нажимая кнопку, вы соглашаетесь с <a href="#">политикой обработки персональных данных</a></p>
      <button type="submit" class="btn btn-primary" style="width:100%">Отправить заявку</button>
    </form>
    <div class="form-success">
      <div class="check-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3>Заявка принята!</h3>
      <p style="color:var(--clr-muted);margin:8px 0 0">Наш менеджер свяжется с вами в ближайшее время.</p>
    </div>
  </div>
</div>
`;

// Inject shared HTML
document.addEventListener('DOMContentLoaded', () => {
  const headerTarget = document.getElementById('site-header');
  const footerTarget = document.getElementById('site-footer');
  if (headerTarget) headerTarget.outerHTML = HEADER_HTML;
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;
});
