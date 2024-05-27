const outerDiv = document.getElementById('outer')
const searchBtn = document.getElementById('btn')
const inputField = document.getElementById('password')


searchBtn.addEventListener('click',(e)=>{
    const data = inputField.value
    if(!data){
        alert("Please write the password")
    }
    else{
        if(data.length > 8){
            if(data.search(/[a-z]/) == -1){
                outerDiv.innerText = 'Please include lowercase also'
                outerDiv.style.color = 'red'
            } else if(data.search(/[0-9]/) == -1){
                outerDiv.innerText = 'Please include Numbers also'
                outerDiv.style.color = 'red'
            } else if(data.search(/[A-Z]/) == -1){
                outerDiv.innerText = 'Please include UpperCase also'
                outerDiv.style.color = 'red'
            } else if(data.search(/[!\@\#\$\%\^\&\*]/) == -1){
                outerDiv.innerText = 'Please include Special Case also'
                outerDiv.style.color = 'red'
            } else{
                outerDiv.innerText = 'password is strong'
                outerDiv.style.color = 'red'
            }
        }
        else{
            alert("Password Length should be greater than 8")
            outerDiv.style.color = 'green'
        }
    }
})