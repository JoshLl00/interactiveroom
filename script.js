const secondsHand = document.querySelector("[data-second]");
const minuteHand = document.querySelector("[data-minute]");
const hourHand = document.querySelector("[data-hour]");

function setClock(){
    console.log("Clock Changed!")

    const currentDate = new Date();
    let second = currentDate.getSecond() /60;
    let minute = currentDate.getMinute() + seconds);
    let hour = currentDate.getHours();

    setRotation(secondsHand, second);
    setRotation(secondsHand, minute);
    setRotation(secondsHand, hour);
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotationDeg)
}
setInterval(setClock, 1000)