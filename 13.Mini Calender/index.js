const day = document.getElementById('day')
const date = document.getElementById('date')
const month = document.getElementById('month')
const year = document.getElementById('year')

const getdate = new Date()

date.innerText = getdate.getDate()
month.innerText = getdate.toLocaleDateString("en-US",{month:"long"})
day.innerText = getdate.toLocaleDateString("en-US",{weekday:"long"})
year.innerText = getdate.getFullYear()