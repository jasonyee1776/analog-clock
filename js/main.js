const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate() {
    const date = new Date;
    const second = date.getSeconds();
    const secondDegree = ((second / 60) * 360);
    console.log(second);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    const minute = date.getMinutes();
    const minuteDegree = ((minute / 60) * 360);
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    const hour = date.getHours();
    const hourDegree = ((hour / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

for (var i = 1; i < 13; i++) {
    const numbers = document.getElementsByClassName('numbers');
    numbers.innerHTML = i;
    console.log(i);
};

setInterval(() => {
    setDate();
}, 1000);

