let h = 0
let headerTxt = ("Nice to meet you!" + "\n" + "I'm Tony Iseghohi.") 
let speed = 90

function welcomeHeader() {
    if (h < headerTxt.length) {
        document.getElementById("header").innerHTML += headerTxt.charAt(h)
        h++
        setTimeout(welcomeHeader, speed) 
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const listItem = document.querySelectorAll('.list-item')
listItem.forEach((li) => observer.observe(li))

const projectItem = document.querySelectorAll('.project-item')
projectItem.forEach((pi) => observer.observe(pi))
