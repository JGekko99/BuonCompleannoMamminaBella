// Play/Pause music functionality
document.getElementById('play-music').addEventListener('click', function() {
    var audio = document.getElementById('birthday-song');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause Music';
    } else {
        audio.pause();
        this.textContent = 'Play Music';
    }
});
