// round .5 kay baad agey wala number or .5 se pehle wohi wala number
// floor wohi wala number rakhega
// ceil value agey le jaayega

// var num = 78.2
// document.write(Math.ceil(num))

// console.log(Math.floor(Math.random() * 11))

// var num = 5
// var computerNum = Math.floor(Math.random() * 11)
// if(computerNum == num){
//     console.log("wohooo number mil gaya")
// }
// else{
//     console.log("dafa hojao")
// }

// var heads = prompt("Enter player1 name")
// var tails = prompt("Enter player2 name")
// var toss = Math.floor(Math.random() * 2)
// if(toss == 0){
//     console.log(heads + " wins the toss")
// }
// else{
//     console.log(tails + " wins the toss")
// }

var str = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'
var check = ''
var length = 8

for(var i=0; i < length; i++){
    check += str[Math.floor(Math.random()* str.length)]
}
console.log(check)