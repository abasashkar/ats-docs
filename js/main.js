(function () {
  "use strict";

  // Mobile menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight active nav link based on current path
  const pathname = window.location.pathname;
  let current = "home";
  if (pathname.includes("/terms")) current = "terms";
  else if (pathname.includes("/privacy")) current = "privacy";
  else if (pathname.includes("/refund")) current = "refund";
  else if (pathname.includes("/delete-account")) current = "delete";
  document.querySelectorAll(".nav-links a[data-route]").forEach(function (link) {
    if (link.dataset.route === current) {
      link.classList.add("active");
    }
  });
})();
