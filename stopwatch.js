let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedHH = hh.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function print(txt) {
    document.getElementById('time').innerText = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);
    document.getElementById('startStop').innerText = 'Stop';
}

function stop() {
    clearInterval(timerInterval);
    document.getElementById('startStop').innerText = 'Start';
}

function reset() {
    clearInterval(timerInterval);
    print('00:00:00');
    elapsedTime = 0;
    document.getElementById('startStop').innerText = 'Start';
}

document.getElementById('startStop').addEventListener('click', function() {
    if (this.innerText === 'Start') {
        start();
    } else {
        stop();
    }
});

document.getElementById('reset').addEventListener('click', reset);