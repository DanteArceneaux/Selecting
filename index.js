let textPath = document.querySelector("#text-path");

function updateTextPathOffset(offset) {
	textPath.setAttribute("startOffset", offset);
}

function onscroll() {
	requestAnimationFrame(function () {
		updateTextPathOffset(window.scrollY * 0.2);
	});
}


window.addEventListener('scroll', onscroll); 

const titles = document.querySelectorAll('.anim'); 

observer = new IntersectionObserver((entries)=>{
	entries.forEach(entry => {
		if(entry.isIntersecting == true) {
			entry.target.classList.add('animate'); 
		} else {entry.target.classList.remove('animate')

		}
	})
})

titles.forEach(title=> {
	observer.observe(title); 
})