const Fahrenheit = document.getElementById('Fahrenheit')
const celsius = document.getElementById('celsius')
const convert = document.getElementById('convert')


convert.addEventListener('click',()=>{
    let FahVal = (celsius.value * 9/5) + 32 + "°F"
    Fahrenheit.value = FahVal    
})
