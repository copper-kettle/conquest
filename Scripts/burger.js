let button = document.querySelector('.burger__button');
let nav = document.querySelector('.burger__nav');
button.addEventListener('click', 
	function() {
		button.classList.toggle('cross');
		nav.classList.toggle('active');
	});
	