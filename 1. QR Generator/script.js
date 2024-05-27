const getInput = document.getElementById('qr-input')
const getButton = document.getElementById('qr-generate')
const getImage = document.getElementById('qr-image')

getButton.addEventListener('click',async(e)=>{
    const toGenerate = getInput.value
    if(!toGenerate){
        alert("Please enter the text or Link to generate the image")
    }
    else{
        getImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${toGenerate}`
    }
})