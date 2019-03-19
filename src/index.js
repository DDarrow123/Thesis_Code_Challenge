// const arrow = document.querySelector(".down-arrow-img");
console.log("hello!");

// arrow.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

const arrow = document.querySelector(".down-arrow-img");

arrow.addEventListener("click", e => {
  // let hashval = arrow.getAttribute(".services-container");
  let target = document.querySelector(".services-listings");
  target.scrollIntoView({
    behavior: "smooth"
  });
  history.pushState(null, null, hashval);
  e.preventDefault();
});
