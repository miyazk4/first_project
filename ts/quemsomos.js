document.addEventListener("DOMContentLoaded", function () {
    var headerWrapper = document.getElementById("headerWrapper");
    var navigation = headerWrapper.querySelector("nav .menu");
    var hamburger = headerWrapper.querySelector(".hamburgerBtn");
    var menuRewind = headerWrapper.querySelector(".subMenu .rewind");
    menuRewind.addEventListener("click", function () {
        subMenu.classList.toggle("hidden");
    });
    var body = document.querySelector("body");
    var subMenuBtn = headerWrapper.querySelector(".subBtn");
    var subMenu = headerWrapper.querySelector("nav .subMenu");
    hamburger.addEventListener("click", function () {
        navigation.classList.toggle("hidden"),
            body.classList.toggle("overflowHidden");
    });
    subMenuBtn.addEventListener("click", function () {
        subMenu.classList.toggle("hidden");
    });
    var toggle = document.querySelector("#container .toggle");
    var toggleList = document.querySelector(".borderBox ul");
    toggle.addEventListener("click", function () {
        toggleList.classList.toggle("hidden");
    });
    subMenuBtn.addEventListener("mouseover", function () {
        subMenu.classList.remove("hidden");
    });
    subMenu.addEventListener("mouseleave", function () {
        subMenu.classList.add("hidden");
    });
    var footer = document.querySelector("footer");
    var scrollTop = footer.querySelector(".scrollTop");
    scrollTop.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
});
