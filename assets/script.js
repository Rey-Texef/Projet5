const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"actualDot":"dotOne"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"actualDot":"dotTwo"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"actualDot":"dotThree"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"actualDot":"dotFour"
	}
]

let i=0

function rightArrow() {
	let supDot = document.querySelector(".dot_selected")
	supDot.classList.remove("dot_selected")
	i += 1
	if (i >= slides.length) {
		i = 0;
	}
	let dot = slides[i].actualDot
	let addDot = document.getElementById(dot)
	if (addDot) {
		addDot.classList.add("dot_selected")
	}
	let text = document.querySelector("#banner p")
	text.innerHTML = slides[i].tagLine
	let photo = document.querySelector(".banner-img")
	photo.src = slides[i].image
}

function leftArrow() {
	let supDot = document.querySelector(".dot_selected")
	supDot.classList.remove("dot_selected")
	i -= 1
	if (i < 0) {
		i = slides.length-1
	}
	let dot = slides[i].actualDot
	let addDot = document.getElementById(dot)
	if (addDot) {
		addDot.classList.add("dot_selected")
	}
	let text = document.querySelector("#banner p")
	text.innerHTML = slides[i].tagLine
	let photo = document.querySelector(".banner-img")
	photo.src = slides[i].image
}

const flecheGauche = document.getElementById("arrow_left")
flecheGauche.addEventListener("click", () => {
	leftArrow()
})

const flecheDroite = document.getElementById("arrow_right")
flecheDroite.addEventListener("click", () => {
	rightArrow()
})



