/* ==========================================================================
   CREATIVE DALAAL — main.js
   Lightweight, dependency-free interactions:
     1. Hero intro animation
     2. Navbar scroll state + mobile menu
     3. Scroll-reveal (IntersectionObserver)
     4. Seamless marquee (duplicate track)
     5. Magnetic buttons
     6. Footer year
   ========================================================================== */
(function () {
  "use strict";

  /* ---- 1. Hero intro: add a class so the headline lines slide into place ---- */
  // Done on next frame so the initial (off-screen) state is painted first.
  var hero = document.getElementById("hero");
  if (hero) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { hero.classList.add("is-ready"); });
    });
  }

  /* ---- 2. Navbar: glassy background after scroll + mobile burger menu ---- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");

  // Toggle the "scrolled" style once the user moves past a small threshold.
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu open/close.
  if (burger && navLinks) {
    function closeMenu() {
      navLinks.classList.remove("is-open");
      nav.classList.remove("is-menu");
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    }

    function setMenu(open) {
      navLinks.classList.toggle("is-open", open);
      nav.classList.toggle("is-menu", open);
      document.documentElement.classList.toggle("menu-open", open);
      document.body.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", String(open));
    }

    burger.addEventListener("click", function () {
      setMenu(!navLinks.classList.contains("is-open"));
    });

    // Close the menu whenever a link inside it is tapped.
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (e) {
      if (!navLinks.classList.contains("is-open")) return;
      if (navLinks.contains(e.target) || burger.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  /* ---- 3. Scroll-reveal: fade + rise elements as they enter the viewport ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target); // reveal once, then stop watching
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // No IO support → just show everything.
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- 4. Marquee: clone the track once so the -50% loop is seamless ---- */
  var marquee = document.getElementById("marquee");
  if (marquee) {
    marquee.innerHTML += marquee.innerHTML;
  }

  /* ---- 5. Magnetic buttons: subtle pull toward the cursor on hover ---- */
  // Skipped for touch devices and reduced-motion users.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;
  if (!reduce && fine) {
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = "translate(" + x * 0.18 + "px," + y * 0.28 + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---- 6. Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
