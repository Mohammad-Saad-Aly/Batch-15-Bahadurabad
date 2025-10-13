// for loops
// while loops
// do while loops


// stages of for loop: 

// initialization
// condition
// inc/dec

// for(var i=1; i <= 10; i++){
//     document.write(i + "<br>")
// }

// document.write("<h1> agha sheryar </h1>")


// var i = 2
// i = i + 5
// i += 5
// document.write(i)
// i++
// i = i + 10

// for (var i = 0; i <= 10; i = i + 2) {
//     document.write(i + "<br>")
// }



// for(var i=1; i <= 10; i++){
//     document.write(`${i}- saylani <br>`)
// }


var tableNum = +prompt("Enter your table number")

for(var i=1; i <= 10; i++){
    document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`)
}