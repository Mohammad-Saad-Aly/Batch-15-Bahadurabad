// var num1 = parseInt(prompt("enter any number 1"))
// var num1 = +prompt("enter any number 1")
// var num1 = Number(prompt("enter any number 1"))
// document.write(typeof(num1)) 
// var num2 = prompt("Enter any number 2")
// var sum = num1 + num2

// var num1 = +prompt("Enter any number 1")
// var num2 = +prompt("Enter any number 2")
// var sum = num1 + num2
// var minus = num1 - num2
// document.write(sum)



// if
// if else
//  if else if

// if(2 >= 2){
//     document.write("ok")
// }


// > greater than
// < less than
// <= less than equal to
// >= greater than equal to
// == equals to
// = assignment operator
// === datatype or value dono check krega
// != not equal to
// !== strictly not equal to
// && and op  both sides should be true
// || Or op  anyone side should be true



// var num1 = 2
// var num2 = "2"
// document.write(num1 === num2)


// var val1 = +prompt("Enter number")
// var val2 = +prompt("Enter number")
// var operator = prompt("Enter any operator") 

// if(operator == "+" || operator == 'plus'){
//     document.write(val1 + val2)
// }
// else if(operator == '-'){
//     document.write(val1 - val2)
// }
// else if(operator == "x" || operator == "*"){
//     document.write(val1 * val2)
// }
// else if(operator == "/"){
//     document.write(val1 / val2)
// }
// else if(operator == '%'){
//     document.write(val1 % val2)
// }
// else{
//     document.write('invalid operator')
// }


// var num1 = +prompt("Enter any number")
// var num2 = +prompt("Enter any number")

// document.write(
//     `
//     The addition of ${num1} and ${num2} = ${num1 + num2}
//     <br>
//     The subtraction of ${num1} and ${num2} = ${num1 - num2}
//     <br>
//     The multiplication of ${num1} and ${num2} = ${num1 * num2}
//     <br>
//     The division of ${num1} and ${num2} = ${num1 / num2}
//     <br>
//     The Module of ${num1} and ${num2} = ${num1 % num2}
//     `
// )



// confirm("hakeem k pas gaye ?")


var studName = prompt("Enter your Name")
var english = +prompt("Enter english marks")
var sindhi = +prompt("Enter sindhi marks")
var PST = +prompt("Enter PST marks")
var Urdu = +prompt("Enter URDU marks")
var Maths = +prompt("Enter MATHS marks")
var total = english + sindhi + PST + Urdu + Maths
var perc = (total / 500) * 100
var grade;

if(perc >= 80){
    grade = "A+"
}
else if(perc >= 70){
    grade = "A"
}
else if(perc >= 60){
    grade = "B"
}
else if(perc >= 50){
    grade = "C"
}
else if(perc >= 40){
    grade = "D"
}
else{
    grade = "FAIL"
}
document.write(
    `
    <table border=''> 
    <tr>
    <th> NAME </th>
    <th> ENGLISH </th>
    <th> SINDHI </th>
    <th> PST </th>
    <th> URDU </th>
    <th> MATHS </th>
    <th> TOTAL </th>
    <th> PERCENTAGE </th>
    <th> GRADE </th>
    </tr>

    <tr> 
    <td> ${studName} </td>
    <td> ${english} </td>
    <td> ${sindhi} </td>
    <td> ${PST} </td>
    <td> ${Urdu} </td>
    <td> ${Maths} </td>
    <td> ${total} </td>
    <td> ${perc.toFixed(2)} </td>
    <td> ${grade} </td>
    </tr>
    </table>
    `
)






