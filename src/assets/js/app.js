//= ../../../node_modules/swiper/swiper-bundle.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/scroll-lock.js
  //= components/sliders.js

  // header functional

  const header = document.querySelector(".header");
  let scrollPrev = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      let scrolled = document.documentElement.scrollTop;

      if (scrolled > 50 && scrolled > scrollPrev) {
        header.classList.add("out");
      } else {
        header.classList.remove("out");
      }

      if (scrolled <= 50) {
        header.classList.add("top");
      } else {
        header.classList.remove("top");
      }

      scrollPrev = scrolled;
    });

    if (document.documentElement.scrollTop <= 50) {
      header.classList.add("top");
    }

    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");

      if (burger.classList.contains("active") && window.innerWidth <= 500) {
        scrollLock.disablePageScroll();
      } else {
        scrollLock.enablePageScroll();
      }
    });
  }

  const dropdowns = document.querySelectorAll(".dropdown-container");

  if (dropdowns.length) {
    dropdowns.forEach((el) => {
      const dropdownLink = el.querySelector(".dropdown-link");

      dropdownLink.addEventListener("click", function () {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        } else {
          el.classList.add("active");
        }
      });
    });
  }

  // обработчик кликов по документу
  document.addEventListener("click", function (event) {
    const activeDropdowns = document.querySelectorAll(
      ".dropdown-container.active"
    );

    if (
      activeDropdowns.length &&
      !event.target.closest(".dropdown-container")
    ) {
      activeDropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });

  // tabs

  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs =
        typeof target === "string" ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll(".tabs-btn");
      this._elPanes = this._elTabs.querySelectorAll(".tabs-pane");
      this._elPanesAddl = this._elTabs.querySelectorAll(".tabs-pane_addl");
      this._eventShow = new Event("tab.itc.change");
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute("role", "tablist");
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute("role", "tab");
        this._elPanes[index].setAttribute("role", "tabpanel");
        this._elPanesAddl[index].setAttribute("role", "tabpanel");
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elPaneAddlTarget = this._elPanesAddl[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector(".tabs-btn_active");
      const elPaneShow = this._elTabs.querySelector(".tabs-pane_show");
      const elPaneAddlShow = this._elTabs.querySelector(".tabs-pane_addl_show");
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove("tabs-btn_active") : null;
      elPaneShow ? elPaneShow.classList.remove("tabs-pane_show") : null;
      elPaneAddlShow
        ? elPaneAddlShow.classList.remove("tabs-pane_addl_show")
        : null;
      elLinkTarget.classList.add("tabs-btn_active");
      elPaneTarget.classList.add("tabs-pane_show");
      elPaneAddlTarget.classList.add("tabs-pane_addl_show");
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    }
    _events() {
      this._elTabs.addEventListener("click", (e) => {
        const target = e.target.closest(".tabs-btn");
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  if (document.querySelector(".contacts-addrs")) {
    new ItcTabs(".contacts-addrs");
  }

  // modal functioal

  const modalTriggers = document.querySelectorAll("[data-modal]");

  if (modalTriggers.length > 0) {
    modalTriggers.forEach((el) => {
      el.addEventListener("click", () => {
        let modalName = el.dataset.modal;
        let modal = document.querySelector(`[data-modalName='${modalName}']`);

        modal.classList.remove("hide");
        scrollLock.disablePageScroll();
      });
    });
  }

  const modals = document.querySelectorAll(".modal");

  if (modals.length > 0) {
    modals.forEach((el) => {
      el.querySelector("[data-close]").addEventListener("click", () => {
        el.classList.add("hide");
        scrollLock.enablePageScroll();
      });
    });
  }

  // products show all

  const productsMain = document.querySelector(".products-main");
  const productsMainBtn = document.querySelector(".products-main__show-all");

  if (productsMainBtn) {
    productsMainBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (productsMain.classList.contains("rolled")) {
        productsMain.classList.remove("rolled");
        productsMainBtn.innerText = "показать все разделы";
      } else {
        productsMain.classList.add("rolled");
        productsMainBtn.innerText = "скрыть все разделы";
      }
    });
  }

  // sertif show all

  const sertif = document.querySelector(".sertif");
  const sertifBtn = document.querySelector(".sertif__show-all");

  if (sertif) {
    sertifBtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (sertif.classList.contains("rolled")) {
        sertif.classList.remove("rolled");
        sertifBtn.innerText = "Показать все сертификаты";
      } else {
        sertif.classList.add("rolled");
        sertifBtn.innerText = "Скрыть все сертификаты";
      }
    });
  }

  // accordeon

  //   const faqAccTitle = document.querySelectorAll(".faq__item-title"),
  //     faqAccText = document.querySelectorAll(".faq__item-descr");

  //   if (faqAccTitle.length > 0) {
  //     for (let i = 0; i < faqAccTitle.length; i++) {
  //       faqAccTitle[i].addEventListener("click", function () {
  //         this.classList.toggle("active");

  //         let panel = faqAccText[i];

  //         if (panel.style.maxHeight) {
  //           panel.style.maxHeight = null;
  //         } else {
  //           panel.style.maxHeight = panel.scrollHeight + "px";
  //         }
  //       });
  //     }
  //   }
});
