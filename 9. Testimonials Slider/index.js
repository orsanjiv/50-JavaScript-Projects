const userImg = document.getElementById('user-img')
const userName = document.getElementById('user-name')
const userDescription = document.getElementById('user-description')

const data = [
    {
        "img": "https://i.pravatar.cc/150?img=1",
        "name": "John Doe",
        "description": "John is a software engineer with 10 years of experience in full-stack development."
    },
    {
        "img": "https://i.pravatar.cc/150?img=2",
        "name": "Jane Smith",
        "description": "Jane is a graphic designer who specializes in branding and digital illustrations."
    },
    {
        "img": "https://i.pravatar.cc/150?img=3",
        "name": "Michael Johnson",
        "description": "Michael is a data scientist with a background in machine learning and big data analytics."
    },
    {
        "img": "https://i.pravatar.cc/150?img=4",
        "name": "Emily Davis",
        "description": "Emily is a project manager who excels at leading cross-functional teams to deliver projects on time and within budget."
    },
    {
        "img": "https://i.pravatar.cc/150?img=5",
        "name": "David Wilson",
        "description": "David is a cybersecurity expert with a focus on network security and risk management."
    },
    {
        "img": "https://i.pravatar.cc/150?img=6",
        "name": "Sophia Martinez",
        "description": "Sophia is a content strategist who creates compelling content that drives engagement and growth."
    },
    {
        "img": "https://i.pravatar.cc/150?img=7",
        "name": "James Anderson",
        "description": "James is a marketing specialist with a knack for developing effective social media campaigns."
    }
]

let count = 0
function slider() {

    userImg.src = data[count].img;
    userName.innerText = data[count].name
    userDescription.innerText = data[count].description
    count++
    console.log(count)
    if(count>data.length-1){
        count = 0
    }


}
setInterval(slider, 3000)
