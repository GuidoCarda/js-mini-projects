const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-box h4')

//Obtenco la fecha actual para utilizarla despues
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// A la fecha termporal actual le sumo 10 dias y seteo el horario a las 11:30:00
const futureDate = new Date(tempYear, tempMonth, tempDay  +  10, 11, 30, 0 );

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const weekday = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} at ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    
    let t = futureTime - today;

    //time in miliseconds
    const oneDay = 24 * 60 * 60 * 1000; 
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate all values 
    const days = Math.floor( t / oneDay );
    const hours = Math.floor( t % oneDay / oneHour);
    const minutes = Math.floor( t % oneDay / oneHour / oneMinute);

    console.log(days, hours, minutes)
}

//setInterval(getRemainingTime,1000);