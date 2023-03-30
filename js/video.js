var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	video.play()
});


let slider_val = document.querySelector('#slider')
document.getElementById("volume").innerHTML = slider_val.value


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");

	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	
	video.playbackRate = 0.9*video.playbackRate
	
	
	console.log(video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	
	video.playbackRate = (1 / 0.9)*video.playbackRate
	
	
	console.log(video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	
	  
	if (video.currentTime < 57.403333){
		video.currentTime= 10 + video.currentTime
		console.log(video.currentTime)
	}
	else {
		video.currentTime=0
		video.play()
		console.log(video.currentTime)
	}
 
});


document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted === true) {
		video.muted = false;
	}
	else {
		video.muted = true;
	} 

})

document.querySelector("#slider").addEventListener("change", function() {

	let slider_val = document.querySelector('#slider')
	document.getElementById("volume").innerHTML = slider_val.value
	video.volume = slider_val.value / 100
	

})

document.querySelector("#vintage").addEventListener("click", function() {

	document.getElementById("vintage").style.Class= "oldSchool"
	

})

document.querySelector("#vintage").addEventListener("click", function() {


	document.getElementById("vintage").classList.add('oldSchool');
	document.getElementById("player1").classList.add('oldSchool');
 
 
 });
 
 
 document.querySelector("#orig").addEventListener("click", function() {
 
 
	document.getElementById("vintage").classList.remove('oldSchool');
	document.getElementById("player1").classList.remove('oldSchool');
 
 
 });
 