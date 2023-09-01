const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currcurrentActive;

common();

prev.addEventListener('click', () => {
	
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}
	callback();
	common();
})

function callback() {
	circles.forEach((circle, index) => {
		let list = index;
		if (list == currentActive) {
			circle.classList.remove('active');
		}
	})
}



next.addEventListener('click', () => {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}
	update();
	common();
})

function update() {
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}

	})
}




function common() {
	const actives = document.querySelectorAll('.active');
	 currentActive = actives.length;
	progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%';
	if (currentActive == 1) {
		prev.disabled = true;
	} else if (currentActive == circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}