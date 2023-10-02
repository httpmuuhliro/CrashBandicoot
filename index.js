
var backgroundAudio = document.getElementById("backgroundAudio");
var akuakuAudio = document.getElementById("akuakuAudio");
var akuakuIcon = document.getElementById("akuakuIcon");

var akuakuPlaying = false;

akuakuIcon.addEventListener("click", function () {
    var newAkuakuAudio = akuakuAudio.cloneNode(true);
    var akuakuPlaying = false;
    newAkuakuAudio.addEventListener("ended", function () {
    akuakuPlaying = false;
    });
    if (!akuakuPlaying) {
        newAkuakuAudio.play();
        akuakuPlaying = true;
    }
});