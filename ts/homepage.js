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
    var imgSliderArr = headerWrapper.querySelectorAll(".backgroundImg .image");
    var navLinkArr = headerWrapper.querySelectorAll(".secondaryNav .navLink");
    var backgroundImgMain = headerWrapper.querySelector(".backgroundImgMain");
    var _loop_1 = function (i) {
        navLinkArr[i].addEventListener("mouseover", function () {
            backgroundImgMain.classList.add("hidden");
            for (var j = 0; j < imgSliderArr.length; j++) {
                imgSliderArr[j].classList.add("hidden");
            }
            imgSliderArr[i].classList.remove("hidden");
            clearInterval(imgSliderAuto);
        });
    };
    for (var i = 0; i < imgSliderArr.length; i++) {
        _loop_1(i);
    }
    var current_img = 0;
    var imgSliderAuto = setInterval(function () {
        backgroundImgMain.classList.add("hidden");
        for (var j = 0; j < imgSliderArr.length; j++) {
            imgSliderArr[j].classList.add("hidden");
        }
        imgSliderArr[current_img].classList.remove("hidden");
        current_img++;
        if (current_img >= imgSliderArr.length) {
            current_img = 0;
        }
    }, 3000);
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
