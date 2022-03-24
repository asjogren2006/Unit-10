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

function question1() {
    var imp = prompt(`Press "F" for fahrentheit to celsius, or "C" for celsius to fahrenheit.`)
    return imp
}


// f to c

function domath1(z) {
  var math1 = ((z-32)*5/9)
  return math1
}

// c to f

function domath2(c) {
  var math2 = ((c*9)/5+32)
  return math2
}

function ctof(m) {
   alert(`That is ${m} degrees fahrenheit.`)
}

function finish() {

    var q = question1()

    if (q == "C") {
        ctof(domath2(asktemp()))
    } else (q == "F") 
        ctof(domath1(asktemp()))
    }




finish()
// function domath() {

// }


// function bigquestion(p, l) {
//     var choose = prompt("F for fahrenheit to celsius, C for celsius to fahrenheit.")
    


//         if (choose == "F") {
//             var math1 = ((asktemp()-32)*5/9)
//         }
        
//        if (choose == "C") {
//            var math2 = ((asktemp()*9)/5+32)
//         }
        
       
       

            
// }   


// bigquestion()