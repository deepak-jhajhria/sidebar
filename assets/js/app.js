let btn = document.querySelector(".btn");
let btn_2 = document.querySelector(".btn_3");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");

btn.addEventListener("click", function () {
    sidebar.classList.add("show");
    overlay.style.display="block";
});
btn_2.addEventListener("click", function () {
    sidebar.classList.remove("show");
    overlay.style.display="none";
});
overlay.addEventListener("click", function () {
    sidebar.classList.remove("show");
    overlay.style.display="none";
});
