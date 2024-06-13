const Countdown = document.getElementById('Countdown')

let Currentdate = new Date();
console.log(Currentdate)
let year = Currentdate.getFullYear()
let day = Currentdate.getDate("en-US",{weekday:"long"})

console.log(day, year)