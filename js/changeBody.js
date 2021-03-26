let themeColor = document.querySelectorAll(".theme-toggler span");
themeColor.forEach(color => color.addEventListener('click',() => {
	let background = color.style.background;
	document.querySelector('body').style.background = background;
}))

	let themeInit = document.querySelector(".theme-toggler span");

	var cor = themeInit.style.background;

	document.querySelector('body').style.background = cor;