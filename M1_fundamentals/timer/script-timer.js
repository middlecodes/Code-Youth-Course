// Did the timer start 
let startTime = null;

// What time did the timer stop?
let stopTime = null;

// How long did the timer run?
let stoppedDuration = 0; 

// To stop the timer
let startInterval = null;

// 

let flag = false;

// ON CLICK START AND STOP BUTTONS
const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", startStop)
    function startStop(){
        
    if(!flag){
        startTimer();
        flag = true;
    }

    else{
        stopTimer();
        flag = false;
    }
}

function startTimer(){

    if(startTime === null)
    startTime = new Date ();

    if(stopTime !== null)
    stoppedDuration += (new Date - stopTime);
}
 
startInterval = setInterval(clockRunning,10);

function stopTimer(){
    stopTime= new date ();
    clearInterval(startInterval);
}

function clockRunning(){
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - startTime - stoppedDuration);


let minutes = timeElapsed.getUTCMinutes();
let seconds = timeElapsed.getUTCSeconds();
let milliseconds = timeElapsed.getUTCMilliseconds();

milliseconds = math.floor(milliseconds/10);

document.getElementById("timer-display").innerHTML = 
(minutes = minutes < 10 ? '0' + minutes:minutes) + ":" +
(seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
(milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}




