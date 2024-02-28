// Initialize variables to hold the start time, elapsed time, and the interval object.
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Function to start the timer.
function start() {
    // Set the start time based on current time minus elapsed time (allows for pausing).
    startTime = Date.now() - elapsedTime;

    // Create a setInterval that updates the elapsed time every second.
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 1000);

    // Update the button text to indicate the timer can be stopped.
    document.getElementById('startStop').innerText = 'Stop';
}

// Function to stop the timer.
function stop() {
    // Clear the interval to stop the timer.
    clearInterval(timerInterval);

    // Update the button text to indicate the timer can be started.
    document.getElementById('startStop').innerText = 'Start';
}

// Function to reset the timer.
function reset() {
    // Clear the interval to stop the timer if it's running.
    clearInterval(timerInterval);

    // Reset the displayed time to 00:00:00.
    print('00:00:00');

    // Reset the elapsed time to 0.
    elapsedTime = 0;

    // Update the button text to indicate the timer can be started.
    document.getElementById('startStop').innerText = 'Start';
}

// Function to convert time in milliseconds to a human-readable format (HH:MM:SS).
function timeToString(time) {
    // Convert milliseconds to hours and round down to nearest whole number.
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    // Calculate remaining minutes after converting hours and round down.
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    // Calculate remaining seconds after converting minutes and round down.
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    // Format minutes, seconds, and hours to ensure they are two digits.
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedHH = hh.toString().padStart(2, "0");

    // Return the formatted time string.
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

// Function to display the timer value on the web page.
function print(txt) {
    document.getElementById('time').innerText = txt;
}

// Add a click event listener to the start/stop button.
document.getElementById('startStop').addEventListener('click', function() {
    // Start or stop the timer based on the button's current text.
    if (this.innerText === 'Start') {
        start();
    } else {
        stop();
    }
});

// Add a click event listener to the reset button.
document.getElementById('reset').addEventListener('click', reset);
