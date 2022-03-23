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

// function domath() {

// }


function bigquestion(p, l) {
    var choose = prompt("F for fahrenheit to celsius, C for celsius to fahrenheit.")
    


        if (choose == "F")   
            var math1 = ((asktemp()-32)*5/9)
            alert(`That is ${math1} degrees fahrenheit.`)
        
    

            
}   


bigquestion()











// function ctof(temp1) {
//     var math1 = ((temp1-32)*5/9)
//     return math1
// }

// function saystatement(y) {
//     alert(`That is ${y} degrees fahrenheit.`)
// }

// saystatement(ctof(asktemp()))