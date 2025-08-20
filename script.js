let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");
let clock = document.querySelector(".containerTime");


setInterval(()=>{

let currentTime = new Date();

let hours = currentTime.getHours();

let ampmText = "AM";

if (hours >= 12) {
    ampmText = "PM";
}
if (hours > 12) {
    hours = hours - 12;
}
if (hours === 0) {
    hours = 12;
}

hr.innerText = (hours <10 ? "0" : "") + hours ;

min.innerText = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes() ;

sec.innerText = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds() ;

ampm.innerText = ampmText;

 if (ampmText === "AM") {
        clock.style.color = "#5151b0";
    } else {
        clock.style.color = "green";
    }

},10)
 
