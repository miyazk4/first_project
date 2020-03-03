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
    var buttons = document.querySelectorAll(".newsType .turismoBtn");
    var _loop_1 = function (i) {
        buttons[i].addEventListener("click", function () {
            var ficheiro = buttons[i].dataset.file;
            var ajax = new XMLHttpRequest();
            ajax.open("GET", "/projecto/newsJson/" + ficheiro + ".json");
            ajax.addEventListener("load", function () {
                var news = JSON.parse(this.response);
                var articleContainer = document.getElementById("articleContainer");
                articleContainer.innerHTML = "";
                for (var j = 0; j < news.length; j++) {
                    articleContainer.appendChild(document.createElement("article"));
                    articleContainer.lastElementChild.innerHTML = "\n\t\t\t\t\t\t<div class=\"borderBox\">\n\t\t\t\t\t\t\t\t<h2 class=\"title\">\n\t\t\t\t\t\t\t\t\t<a href=\"\">" + news[j].title + "</a>\n\t\t\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t\t\t<p>" + news[j].designation + "</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<figure>\n\t\t\t\t\t\t\t\t<img src=" + news[j].image + " alt=\"\" class=\"image\">\n\t\t\t\t\t\t\t</figure>\n\t\t\t\t\t\t\t<div class=\"share\">\n\t\t\t\t\t\t\t\t<a href=\"\"><span class=\"fas fa-share-alt fa-2x\"></span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t";
                }
            });
            ajax.send();
        });
    };
    for (var i = 0; i < buttons.length; i++) {
        _loop_1(i);
    }
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
