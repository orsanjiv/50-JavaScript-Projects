const textArea = document.getElementById('text-area')
const btn = document.getElementById('count')
const Total = document.getElementById('display')

btn.addEventListener('click', () => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let str = textArea.value

    if (str == '') {
        alert("Please enter some words")
    } else {
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                count = count + 1;
            }
        }

        Total.innerText = `Total Vowels: ${count}`
    }


})