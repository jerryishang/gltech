// JavaScript Document
sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
	$('#slider>img#1').fadeIn(300);
	startSliding();
});

function startSliding() {
	//number if images
	count = $('#slider>img').size();
	
	loop = setInterval(function(){
		if (sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;	
		}
		// current image
		$('#slider>img').fadeOut(300);
		$('#slider>img#'+sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;	
	},3000);
}

function prev() {
	newSlider = sliderInt - 1;
	showSlider(newSlider);
	
}

function next() {
	newSlider = sliderInt + 1;
	showSlider(newSlider);
}

function stopLoop() {
	//stop loop function from happening as shown above
	window.clearInterval();
}

function showSlider(id) {
	stopLoop();
	if (id > count) {
			id = 1;
	} else if (id < 1) { //id 0
		id = count;
	}
	// current image
	$('#slider>img').fadeOut(300);
	$('#slider>img#'+id).fadeIn(300);
	sliderInt = id;
	id = id + 1;
	startSliding();
}

$('#slider>img').hover(
	function(){
		stopLoop();
	},
	function() {
		startSliding();
	}
); 