const startstopBtn = document.querySelector("#startstopBtn")
const resetBtn = document.querySelector("#resetBtn")

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingseconds = 0;
let leadingminutes = 0;
let leadinghours = 0;

let timerinterval=null;
let timerstatus="stopped"

function stopwatch(){
    seconds++;
    if (seconds/60==1){
        seconds = 0;
        minutes++;
        if (minutes/60 ==1){
            minutes=0;
            hours++;
        }
    }

    if (seconds<10){
        leadingseconds="0"+seconds.toString();
    }
    else{
        leadingseconds=seconds;
    }

    if (minutes<10){
        leadingminutes="0"+minutes.toString();
    }
    else{
        leadingminutes=minutes;
    }

    if (hours<10){
        leadinghours="0"+hours.toString();
    }
    else{
        leadinghours=hours;
    }

    let displayTimer=document.getElementById("timer").innerText = leadinghours+":"+leadingminutes+":"+leadingseconds;
}

// calls function at specified interval
// window.setInterval(stopwatch,10)

startstopBtn.addEventListener("click",function(){
    if(timerstatus==="stopped"){
        timerinterval=window.setInterval(stopwatch,1000)
        document.getElementById("startstopBtn").innerHTML=`<i class ="fa-solid fa-pause" id="pause"></i>`
        timerstatus = "started"
    }
    else{
        //stop timer
        window.clearInterval(timerinterval);
        document.getElementById("startstopBtn").innerHTML=`<i class ="fa-solid fa-play" id="play"></i>`
        timerstatus="stopped";
    }
})

resetBtn.addEventListener("click",function(){
    window.clearInterval(timerinterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById("startstopBtn").innerHTML=`<i class ="fa-solid fa-play" id="play"></i>`
    timerstatus="stopped";
})