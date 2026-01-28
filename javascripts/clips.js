var videoPlayer = document.getElementById("videoPlayer");
var videoClip = document.getElementById("videoClip");

videoPlayer.style.display = "none";
videoClip.volume = 0.07;

function playVideo(file) {
	videoClip.src = file;
	videoPlayer.style.display = "block";
}

function stopVideo() {
	videoPlayer.style.display = "none";
	videoClip.pause();
}