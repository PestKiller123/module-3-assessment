console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("submitted successfully");
};


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function Compliment() {
	alert("You are brilliant!")
};

let image = document.querySelector('#catImage');
image.addEventListener('mouseover', Compliment);