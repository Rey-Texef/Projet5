const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let flecheGauche = document.getElementById("arrow_left")
flecheGauche.addEventListener("click", function () {
	console.log("Vous avez cliqué sur la flèche gauche")
})

let flecheDroite = document.getElementById("arrow_right")
flecheDroite.addEventListener("click", function () {
	rightArrow(i)
	console.log("Vous avez cliqué sur la flèche droite")
})

let i=0

function rightArrow(i) {
	let actualDot = document.querySelector(".dot_selected")
	actualDot.classList.remove("dot_selected")
	i+=1
	let text = document.querySelector("#banner p")
	text.innerHTML = slides[i].tagLine
	return i
}