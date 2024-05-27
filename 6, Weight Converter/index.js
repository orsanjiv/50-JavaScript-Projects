const kgweight = document.getElementById('kg-weight')
const lbsweight = document.getElementById('lbs-weight')
const generate = document.getElementById('convert')

generate.addEventListener('click',()=>{
    let kg = kgweight.value
    let lbs = kg*2.20462.toPrecision()
    console.log(lbs)
    if(kg==0){
        alert("Please Enter The weight More than 0")
    }
    lbsweight.value = lbs
})