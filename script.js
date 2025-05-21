document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-element");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

/*BURGER MENU*/
const burger = document.querySelector(".burger");
const navList = document.querySelector(".header__nav-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
  document.body.classList.toggle(
    "no-scroll",
    navList.classList.contains("active")
  );

  const expanded = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", !expanded);
});
