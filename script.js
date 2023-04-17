	let disp = document.querySelector('#wnh');

window.addEventListener("resize", function() {
	disp.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
})

function func() {

	disp.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}