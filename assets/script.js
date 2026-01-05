const slides = [
	{
		file_name: 'slide1.jpg',
		tag_line: 'Impressions tous formats <span>en boutique et en ligne</span>'
	},
	{
		file_name: 'slide2.jpg',
		tag_line: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	},
	{
		file_name: 'slide3.jpg',
		tag_line: 'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	},
	{
		file_name: 'slide4.png',
		tag_line: 'Autocollants <span>avec découpe laser sur mesure</span>'
	}
];

// Init dots
const dots_container = document.querySelector('#banner .dots');
slides.forEach(() => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dots_container.appendChild(dot);
});

// Index of the current slide
let current_slide_index = 0;

function updateSlide() {
	if (current_slide_index < 0) current_slide_index = slides.length - 1;

	// Get the slide data based on the index
	const { file_name, tag_line } = slides[current_slide_index];

	// Set image src and tag line content
	document.querySelector('#banner .banner-img').src = `assets/images/slideshow/${file_name}`;
	document.querySelector('#banner p').innerHTML = tag_line;

	// Unselect previous dot
	dots_container.querySelector('.dot-selected')?.classList.remove('dot-selected');

	// Select current dot
	dots_container.children[current_slide_index].classList.add('dot-selected');
}

// Increment the index and update the slide
function nextSlide() {
	current_slide_index++;
	if (current_slide_index >= slides.length) current_slide_index = 0;
	updateSlide();
}

// Decrement the index and update the slide
function previousSlide() {
	current_slide_index--;
	if (current_slide_index < 0) current_slide_index = slides.length - 1;
	updateSlide();
}

document.querySelector('.arrow-right').addEventListener('click', nextSlide);
document.querySelector('.arrow-left').addEventListener('click', previousSlide);

updateSlide();
