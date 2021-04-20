
const menu = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sideBar");

function menuToggle(){
	menu.classList.toggle("active");
	sideBar.classList.toggle("active");
}

var close = document.querySelectorAll(".close");

close.forEach(element => {
	element.addEventListener("click", closeSideBar);
});

function closeSideBar(){
	
	if(sideBar.classList.contains("active")){
		sideBar.classList.remove("active");
		menu.classList.remove("active");
	}
}