document.addEventListener("DOMContentLoaded", () => {

	const headerWrapper = document.getElementById("headerWrapper");
	const navigation = headerWrapper.querySelector("nav .menu");
	const hamburger = headerWrapper.querySelector(".hamburgerBtn");
	const menuRewind = headerWrapper.querySelector(".subMenu .rewind");

	menuRewind.addEventListener("click", () => {
		subMenu.classList.toggle("hidden");
	});

	const body = document.querySelector("body");
	const subMenuBtn = headerWrapper.querySelector(".subBtn");
	const subMenu = headerWrapper.querySelector("nav .subMenu");

	hamburger.addEventListener("click", ():void => {
		navigation.classList.toggle("hidden"),
		body.classList.toggle("overflowHidden")
	
	});

	subMenuBtn.addEventListener("click", ():void => {
		subMenu.classList.toggle("hidden");
	});

	const toggle = document.querySelector("#container .toggle");
	const toggleList = document.querySelector(".borderBox ul");

	toggle.addEventListener("click", () => {
		toggleList.classList.toggle("hidden");
	});

	subMenuBtn.addEventListener("mouseover",():void => {
		subMenu.classList.remove("hidden");
	}); 

	subMenu.addEventListener("mouseleave", ():void => {
        subMenu.classList.add("hidden");
    });

	const footer = document.querySelector("footer");
	const scrollTop = footer.querySelector(".scrollTop");

	scrollTop.addEventListener("click", ():void => {
		window.scrollTo(0,0);
	});
});