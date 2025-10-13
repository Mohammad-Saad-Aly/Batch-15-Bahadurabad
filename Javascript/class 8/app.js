// var i;
// for (i = 0; i <= 10; i++) {
//     if (i % 2 != 0){
//         document.write(i + "<br>")
//     }
// }

// for(i=0; i <= 10; i++){
//     document.write(i*2 + "<br>")
// }


// for (var i = 10; i >= 1; i = i - 2) {
//     document.write(i + "<br>")
// }


var userNumber = +prompt("Enter your table number")
var limit = +prompt("Enter your table limit")

for(var i=1; i <= limit; i++){
   document.write(`${userNumber} x ${i} = ${i * userNumber} <br>`)
}


// var myArray = ['pink', 'black', 'blue', 'white', 'grey']


// for(var i=0; i <= 4; i++){ 
//     document.write(`Element at ${i} is ${myArray[i]} <br>`)
// }