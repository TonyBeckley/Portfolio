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