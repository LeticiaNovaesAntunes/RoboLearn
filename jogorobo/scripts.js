const robo = document.querySelector('.robo');
const agua = document.querySelector('.agua');
const cloud = document.querySelector('.cloud');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {

    robo.classList.add('jump');

    setTimeout(() => {

        robo.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const aguaPosition = agua.offsetLeft;
    const roboPosition = +window.getComputedStyle(robo).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (aguaPosition <= 100 && aguaPosition > 0 && roboPosition < 60) {

        agua.style.animation = 'none';
        agua.style.left = `${aguaPosition}px`;

        robo.style.animation = 'none';
        robo.style.bottom = `${roboPosition}px`;

        robo.src = 'assets/game-over.png';
        robo.style.width = '250px';
        robo.style.marginLeft = '35px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }
}, 10);

const restart = () => {

    gameOver.style.visibility = 'hidden';

    agua.style.animation = 'agua-animations 2s infinite linear';
    agua.style.left = ``;

    robo.src = 'assets/robo.png';
    robo.style.width = '250px';
    robo.style.bottom = '0px';
    robo.style.marginLeft = '';
    robo.style.animation = '';

    cloud.style.left = ``;

    const loop = setInterval(() => {

        const aguaPosition = agua.offsetLeft;
        const roboPosition = +window.getComputedStyle(robo).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

        if (aguaPosition <= 100 && aguaPosition > 0 && roboPosition < 60) {

            agua.style.animation = 'none';
            agua.style.left = `${aguaPosition}px`;

            robo.style.animation = 'none';
            robo.style.bottom = `${roboPosition}px`;

            robo.src = 'assets/game-over.png';
            robo.style.width = '250px';
            robo.style.marginLeft = '35px';

            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;

            gameOver.style.visibility = 'visible';

            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
