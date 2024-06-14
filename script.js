let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopBtn.textContent = 'Pause';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = 'Start';
    display.textContent = '00:00:00';
    laps.innerHTML = '';
    lapCounter = 0;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    display.textContent = hours + ':' + minutes + ':' + seconds;
}

function recordLap() {
    if (running) {
        lapCounter++;
        const lapTime = document.createElement('li');
        lapTime.textContent = 'Lap ' + lapCounter + ': ' + display.textContent;
        laps.appendChild(lapTime);
    }
}
