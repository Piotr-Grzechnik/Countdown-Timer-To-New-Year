const dayscell = document.querySelector(".days-js");
const hourscell = document.querySelector(".hours-js");
const minscell = document.querySelector(".mins-js");
const secondscell = document.querySelector(".seconds-js");
const newyearcell = document.querySelector(".newyeardate-js");



const counstdown = () => {
    let year = 2021;
    let checkNewYear = new Date().getFullYear();
    while (year <= checkNewYear) {
        year++;
    }
     let newYear = `1 Jan ${year}`;
    const newYearsDate = new Date(newYear);
    const currentDate = Date.now();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayscell.innerHTML = days;
    hourscell.innerHTML = hours;
    minscell.innerHTML = mins;
    secondscell.innerHTML = seconds;
    newyearcell.innerHTML = newYear;
};

counstdown();
setInterval(counstdown, 1000);

