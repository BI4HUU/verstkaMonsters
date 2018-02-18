var arrImg5 = document.querySelectorAll('.img5_')
var wrap5 = document.querySelector('#id5')
setTimeout(
	()=>{
		// wrap5 = document.querySelector('#id5').clientWidth
		resizeResponsiv()
	}, 500
)

// setInterval()

window.addEventListener("resize", resizeResponsiv);
function resizeResponsiv() {
	console.log(wrap5.clientWidth)
	for (let i = 0; i < arrImg5.length; i++) {
		arrImg5[i].style.width = `${wrap5.clientWidth}px`;
		arrImg5[i].style.height = `${wrap5.clientWidth}px`
	}
}


