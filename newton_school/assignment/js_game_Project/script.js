point = 0;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

document.onkeydown = function (e) {
    console.log(" key code is " + e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 32) {
        char = document.querySelector('.char')
        char.classList.add('animation');
        setTimeout(() => {
            audio.play()
        }, 1000);
        setTimeout(() => {
            char.classList.remove('animation')
        }, 1000);
    }
}

setInterval(() => {
    char = document.querySelector('.char');
    gameover = document.querySelector('.gameover');
    huddle = document.querySelector('.huddle');

    dx = parseInt(window.getComputedStyle(char, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(char, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(huddle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(huddle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        huddle.classList.remove('obstical');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);


    }
    else {
        point += 1;

        console.log(update(point));
    }

}, 10);
function update(point) {
    scoreCount.innerHTML = "Your Score: " + point;

}
