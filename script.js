function askname() {
    var questionname = prompt("What is your name?")
    return questionname
}

function sayhi(x) {
    alert(`Hello, ${x}`)
}

sayhi(askname())

function asktemp() {
    var questiontemp = prompt("What is the temperature?")
    return questiontemp
}


function choose() {
    var choose = prompt("F for fahrenheit to celsius, C for celsius to fahrenheit.")
    return choose
}

// choose()

if (choose == "F") {
    function ctof(temp1) {
        var math1 = ((temp1-32)*5/9)
        return math1
        console.log(ctof(asktemp()))
    }
}

console.log(ctof(asktemp()))


// function ctof() {
//     if (choose == "F") {
//         var math1 = ((questiontemp+32)*5/9)
//     }
//     return math1
// }