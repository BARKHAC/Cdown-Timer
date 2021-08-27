const futureDate = "10 September 2021";
dayEL = document.getElementById('Days');
hourEl =document.getElementById('Hours');
minEl = document.getElementById('Minutes');
secEl = document.getElementById('Seconds');

function countDown(){
    const ganpatiChaturthi = new Date(futureDate);
    const currentDate = new Date();
    
    const TotalSeconds = Math.floor(ganpatiChaturthi-currentDate)/1000;
    const days = Math.floor(TotalSeconds/3600/24);
    const hours = Math.floor(TotalSeconds/3600) % 24;
    const minutes = Math.floor(TotalSeconds/60) % 60;
    const seconds = Math.floor(TotalSeconds) %60;

    dayEL.innerHTML = days;
    hourEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secEl.innerHTML = seconds;


}

countDown();

setInterval(countDown , 1000);