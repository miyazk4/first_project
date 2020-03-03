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

	const buttons = document.querySelectorAll(".newsType .turismoBtn");

	for(let i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", () => {
		
			const ficheiro = buttons[i].dataset.file;

			const ajax = new XMLHttpRequest();
		
			ajax.open("GET","/projecto/newsJson/" + ficheiro + ".json");
		
			ajax.addEventListener("load", function() {

				const news = JSON.parse(this.response);
				const articleContainer = document.getElementById("articleContainer");
				
				articleContainer.innerHTML = "";
				
				for(let j = 0; j < news.length; j++){
					articleContainer.appendChild(document.createElement("article"));

					articleContainer.lastElementChild.innerHTML = `
						<div class="borderBox">
								<h2 class="title">
									<a href="">${news[j].title}</a>
								</h2>
								<p>${news[j].designation}</p>
							</div>
							<figure>
								<img src=${news[j].image} alt="" class="image">
							</figure>
							<div class="share">
								<a href=""><span class="fas fa-share-alt fa-2x"></span></a>
							</div>
					`;
				}
			});	
			ajax.send();
		});
	}
	
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
