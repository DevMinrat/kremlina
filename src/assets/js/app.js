//= ../../../node_modules/swiper/swiper-bundle.js

document.addEventListener("DOMContentLoaded", () => {
  //= components/scroll-lock.js
  //= components/sliders.js
  //= components/animation.js

  // header functional

  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");
  const headerLinks = document.querySelector(".header-links__main");
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

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");

      if (window.innerWidth <= 1024) {
        headerLinks.classList.toggle("active");
      }

      if (burger.classList.contains("active")) {
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

  class Accordion {
    constructor(element, heading, content) {
      this.element = element;
      this.heading = heading;
      this.content = content;
      this.button = this.element.querySelector(heading);
      this.content = this.element.querySelector(content);
      this.button.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (this.element.classList.contains("active")) {
          window.location.href = this.button.getAttribute("href");
        } else {
          this.toggleContent();
        }
      });
    }

    toggleContent() {
      this.content.classList.toggle("active");
      this.element.classList.toggle("active");
    }
  }

  const accordions = document.querySelectorAll(".accordion");
  const accordionsSub = document.querySelectorAll(".accordion-sub");
  if (accordions.length) {
    accordions.forEach(
      (accordion) =>
        new Accordion(accordion, ".accordion__heading", ".accordion__content")
    );
    accordionsSub.forEach(
      (accordionsSub) =>
        new Accordion(
          accordionsSub,
          ".accordion__heading",
          ".accordion__content"
        )
    );
  }

  const menuCat = document.querySelectorAll(".menu-cat");
  menuCat.forEach(
    (elem) =>
      new Accordion(
        elem,
        ".menu-cat__title",
        ".menu-cat__links"
      )
  );

  // filter dropdown

  const catalogFilters = document.querySelectorAll(".catalog-filter");
  if (catalogFilters.length) {
    catalogFilters.forEach((select) => {
      const heading = select.querySelector(".cf__heading");
      heading.addEventListener("click", () => {
        select.classList.toggle("active");
      });
    });

    const filtersWrapper = document.querySelector(".catalog-filters");
    const filterCheckboxes =
      filtersWrapper.querySelectorAll(".custom-checkbox");

    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const text = this.nextElementSibling.nextElementSibling.innerText;

        if (this.checked) {
          const block = createChosenBlock(text);
          document
            .querySelector(".catalog-filters__choosed")
            .appendChild(block);

          const deleteButton = block.querySelector("svg");
          deleteButton.addEventListener("click", function () {
            block.remove();
            checkbox.checked = false;
            setFilterCount(filterParent);
          });
        } else {
          const chosenBlock = document.querySelector(`div[data-id="${text}"]`);
          chosenBlock.remove();
        }

        const filterParent = checkbox.closest(".catalog-filter");
        setFilterCount(filterParent);
      });
    });

    function createChosenBlock(text) {
      const block = document.createElement("div");
      block.classList.add("catalog-filter__chosen");
      block.setAttribute("data-id", text);

      const span = document.createElement("span");
      span.innerText = text;
      block.appendChild(span);

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.innerHTML = '<use xlink:href="#cross"></use>';

      block.appendChild(svg);

      return block;
    }

    function setFilterCount(parent) {
      const checkedItems = parent.querySelectorAll(".custom-checkbox:checked");
      const filerHeading = parent.querySelector(".cf__heading-name");

      if (checkedItems.length > 0) {
        if (!filerHeading.querySelector(".count")) {
          const span = document.createElement("span");
          span.classList.add("count");
          span.innerText = checkedItems.length;

          filerHeading.appendChild(span);
        } else {
          filerHeading.querySelector(".count").innerText = checkedItems.length;
        }
      } else {
        filerHeading.querySelector(".count").remove();
      }
    }
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

    const activeFilters = document.querySelectorAll(".catalog-filter.active");

    if (activeFilters.length && !event.target.closest(".catalog-filter")) {
      activeFilters.forEach((filter) => {
        filter.classList.remove("active");
      });
    }

    if (
      window.innerWidth > 1024 &&
      burger.classList.contains("active") &&
      !event.target.closest(".burger-menu")
    ) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      scrollLock.enablePageScroll();
    }
  });

  // Получаем элементы, с которыми работаем
  const coopBtn = document.querySelector(".coop-info__btn");
  const coopRadios = document.querySelectorAll(
    ".custom-radio[name='coop-radio']"
  );
  const coopPanes = document.querySelectorAll(`.coop-info__pane`);
  const coopTitle = document.querySelector(".coop-info__title");
  const coopVars = document.querySelector(".coop-info__vars");
  let coopFirstStep = true;

  if (coopTitle) {
    coopBtn.addEventListener("click", function () {
      const selectedRadioIndex = Array.from(coopRadios).findIndex(
        (radio) => radio.checked
      );
      if (selectedRadioIndex >= 0) {
        coopPanes[selectedRadioIndex].style.display = "block";
        toggleCoopVars(coopFirstStep);
      }
    });
  }

  function toggleCoopVars(step) {
    if (step) {
      coopBtn.innerText = "назад";
      coopTitle.style.display = "none";
      coopVars.style.display = "none";

      coopFirstStep = false;
    } else {
      coopBtn.innerText = "далее";
      coopTitle.style.display = "block";
      coopVars.style.display = "flex";

      coopFirstStep = true;

      coopPanes.forEach((el) => (el.style.display = "none"));
    }
  }
});
