/* ============================================================
   Mohd Imran — portfolio behaviour
   Theme, mobile nav, active section, skill filters, copy email.
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Theme ---------- */

  var themeBtn = document.getElementById("theme");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncThemeButton() {
    if (!themeBtn) return;
    themeBtn.textContent = currentTheme() === "dark" ? "Light mode" : "Dark mode";
    themeBtn.setAttribute("aria-label", "Switch to " + (currentTheme() === "dark" ? "light" : "dark") + " mode");
  }

  if (themeBtn) {
    syncThemeButton();
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncThemeButton();
    });
  }

  /* ---------- Mobile navigation ---------- */

  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open", !isOpen);
      menuToggle.textContent = isOpen ? "Menu" : "Close";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Menu";
      });
    });
  }

  /* ---------- Active section in nav ---------- */

  var sectionLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var sections = sectionLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          sectionLinks.forEach(function (link) {
            var isCurrent = link.getAttribute("href") === "#" + entry.target.id;
            link.classList.toggle("is-active", isCurrent);
            if (isCurrent) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Skills filter ---------- */

  var filterBar = document.getElementById("filters");
  var skillGroups = Array.prototype.slice.call(document.querySelectorAll(".sg[data-g]"));

  if (filterBar && skillGroups.length) {
    filterBar.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-f]");
      if (!button) return;

      filterBar.querySelectorAll("button[data-f]").forEach(function (item) {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });

      var filter = button.getAttribute("data-f");
      skillGroups.forEach(function (group) {
        group.hidden = filter !== "all" && group.getAttribute("data-g") !== filter;
      });
    });
  }

  /* ---------- Copy email ---------- */

  var copyBtn = document.getElementById("copy-email");
  var emailText = document.getElementById("email-text");

  if (copyBtn && emailText) {
    var reset = function () {
      window.setTimeout(function () { copyBtn.textContent = "Copy email"; }, 1800);
    };

    copyBtn.addEventListener("click", function () {
      var email = emailText.textContent.trim();

      var fallback = function () {
        try {
          var range = document.createRange();
          range.selectNodeContents(emailText);
          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          copyBtn.textContent = "Press Ctrl+C";
          reset();
        } catch (e) {
          copyBtn.textContent = "Copy failed";
          reset();
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          copyBtn.textContent = "Copied";
          reset();
        }, fallback);
      } else {
        fallback();
      }
    });
  }

  /* ---------- Email links ---------- */

  var contactEmail = "ia12imran@gmail.com";
  document.querySelectorAll("#email-link").forEach(function (link) {
    link.href = "mailto:" + contactEmail;
  });

  /* ---------- Footer year (if a placeholder exists) ---------- */

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
