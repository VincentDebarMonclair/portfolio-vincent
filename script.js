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
});

/*document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".header__nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("active");
    burger.classList.toggle("open");
  });
});*/

/*const burger = document.querySelector(".burger");
const navList = document.querySelector(".header__nav-list");

burger.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true" || false;
  burger.setAttribute("aria-expanded", !expanded);
  navList.classList.toggle("active");
});*/
