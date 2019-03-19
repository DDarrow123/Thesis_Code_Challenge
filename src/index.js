// console.log("hello!");

const arrow = document.querySelector(".down-arrow-img");

arrow.addEventListener("click", e => {
  let target = document.querySelector(".services-listings");
  target.scrollIntoView({
    behavior: "smooth"
  });

  e.preventDefault();
});
