const passlength = document.getElementById('input-length')
const incUppercase = document.getElementById('input-uppercase')
const incLowercase = document.getElementById('input-lowercase')
const incSymbols = document.getElementById('input-number')
const incNumbers = document.getElementById('input-symbols')
const generatePassword = document.getElementById('generate')
const passgenerated = document.getElementById('pass-generated')
const copyPassword = document.getElementById('copy-pass')



const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';
let password = '';

generatePassword.addEventListener('click', () => {
    let str = ''
    if (passlength.value < 6) {
        alert("Password Length Should be greater than 6")
    }
    if (incUppercase.checked) {
        str += uppercasestr
    }
    if (incLowercase.checked) {
        str += lowercasestr
    }
    if (incSymbols.checked) {
        str += symbolstr
    }
    if (incNumbers.checked) {
        str += numberstr
    }

    for (let i = 0; i < passlength.value; i++) {
        let index = Math.floor(Math.random() * str.length)
        password += str[index]
    }
    passgenerated.value = password
})

copyPassword.addEventListener('click', () => {
    passgenerated.select();
    navigator.clipboard.writeText(passgenerated.value).then(()=>{
        alert("Password Copied")
    })

})

