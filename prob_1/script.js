const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');
const hourEl = document.querySelector('.hourhand'); // this first tree lines select the hands of the clock in the html



setInterval(()=>{ //We call the setinterval function and set it in order to update the values every second
    const date = new Date; //We call the date object and save it into de variable date
    const secDeg = date.getSeconds()/60 * 360 - 90;
    const minDeg = date.getMinutes()/60 * 360 - 90;
    const hourDeg = date.getHours()/12 * 360 - 90; //This lines convert the values of seconds, minutes and hours into degrees
    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`; //This three sentence make the rotation action of the clock hands
}, 1000)
