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
