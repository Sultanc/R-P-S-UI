const rock = document.querySelector('.button-icon-r');
const clickedRock = document.querySelector('.clicked-r');
console.log(rock);

rock.addEventListener('click', () => {
    clickedRock.setAttribute('style', 'display: block');
});

