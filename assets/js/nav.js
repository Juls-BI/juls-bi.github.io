/* Mobile menu: accessible name, aria-expanded, closes on Escape and when a link is chosen. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("site-nav");
  if (!toggle || !list) return;
  function setOpen(open) {
    list.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  list.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
})();

/* Always open at the top, and keep the address bar free of #section links.
   In-page links still scroll to their section and move keyboard focus there. */
(function () {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) {
    history.replaceState(null, "", location.pathname + location.search);
  }
  window.scrollTo(0, 0);

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || a.classList.contains("skip-link")) return;
    var id = a.getAttribute("href").slice(1);
    var target = id && document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
})();
