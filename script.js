
// 24-hour format time 2pm=14 12am=00
const end= '10 Oct 2021 14:34:50';
//const end = document.getElementById("end").innerText;
//alert(end);

var mySoundObject;


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}



var x = setInterval(function(){
    
    var enddate = new Date(end);
    var now = new Date();
    //this difference is in milliseconds
    var diff = (enddate-now)/1000 // in seconds now     
    var days = Math.floor(diff/3600/24);
    var hours = Math.floor(diff/3600)%24;
    var minutes = Math.floor(diff/60)%60;
    var seconds = Math.floor(diff)%60;

    document.getElementById("days").innerHTML = days;
    // To display 01 instead of 1
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
 

    if (diff<0){
        clearInterval(x);
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("header").innerHTML="Time Expired!!";
        document.getElementById("header").style.color="red";
        var snd = new Audio("music/beepSound.wav"); // buffers automatically when created
        snd.play();   
          
    }

},1000);
