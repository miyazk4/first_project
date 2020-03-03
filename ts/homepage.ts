document.addEventListener("DOMContentLoaded", () => {
	const headerWrapper = document.getElementById("headerWrapper");
	const navigation = headerWrapper.querySelector("nav .menu");
	const hamburger = headerWrapper.querySelector(".hamburgerBtn");
	const menuRewind = headerWrapper.querySelector(".subMenu .rewind");

	menuRewind.addEventListener("click", ():void => {
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

	const imgSliderArr = headerWrapper.querySelectorAll(".backgroundImg .image");
	const navLinkArr = headerWrapper.querySelectorAll(".secondaryNav .navLink");
	const backgroundImgMain = headerWrapper.querySelector(".backgroundImgMain");

	for (let i = 0; i < imgSliderArr.length; i++){
		navLinkArr[i].addEventListener("mouseover", () => {
			backgroundImgMain.classList.add("hidden");

			for(let j = 0; j < imgSliderArr.length; j++){
				imgSliderArr[j].classList.add("hidden");
			}

			imgSliderArr[i].classList.remove("hidden");

			clearInterval(imgSliderAuto);
		});
	}

	let current_img:number = 0;

	const imgSliderAuto = setInterval(() => {

		backgroundImgMain.classList.add("hidden");
		for(let j = 0; j < imgSliderArr.length; j++){
			imgSliderArr[j].classList.add("hidden");
		}
		
		imgSliderArr[current_img].classList.remove("hidden");
		

		current_img++;

		if(current_img >= imgSliderArr.length) {
			current_img = 0;
		}
	},3000);

	subMenuBtn.addEventListener("mouseover",():void => {
		subMenu.classList.remove("hidden");
	}); 
	
	subMenu.addEventListener("mouseleave", () => {
        subMenu.classList.add("hidden");
    });


	const footer = document.querySelector("footer");
	const scrollTop = footer.querySelector(".scrollTop");

	scrollTop.addEventListener("click", ():void => {
		window.scrollTo(0,0);
	});
});