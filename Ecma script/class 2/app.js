// let fruits = ['apple', 'mango', 'pineapple', 'gava', 'banana']
// fruits.map((data, index)=>{
//     console.log(data, index)
// })

// let nums = [10, 20, 30, 40, 50, 60]
// let getValue = nums.filter((data)=>{
//     return data > 30
// })
// console.log(getValue)

// let nums = [10, 20, 30, 40, 50, 60]
// let getValue = nums.reduce((a, b)=>{
//     return a + b
// }, 500 )
// console.log(getValue)

// console.log("data 1")
// setTimeout(()=>{
//     console.log("data 2")
// },0)
// console.log("data 3")


let getDiv = document.querySelector("#main")

fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    return data.json()
})
.then((a)=>{

    a.map((data)=>{
            getDiv.innerHTML += `<div> 
            <p> ${data.id} </p>
            <p> ${data.name} </p>
            <p> ${data.username} </p>
            </div>`

    })
})
.catch((err)=>{
    console.log(err)
})










