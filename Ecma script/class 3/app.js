// console.log('task 1')
// setTimeout(function () {

//     for (var i = 1; i <= 10000; i++) {
//         console.log(i)
//     }

// }, 1000)
// console.log('task 3')




// let food = new Promise((resolve, reject) => {
//     let status = 'not delivered'
//     if (status == 'delivered') {
//         resolve("your order has been placed")
//     }
//     else {
//         reject("sorry dead")
//     }
// })

// food.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

let getDiv = document.querySelector("#main")

fetch('https://newsapi.org/v2/everything?q=babar azam&from=2025-06-02&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc9')
    .then(data => data.json())
    .then(data => {
        console.log(data.articles)

        data.articles.map((value, index) => {
            getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${value.urlToImage
                } class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.author}</h5>
    <p class="card-text">${value.description}</p>
    
  </div>
</div>`
        })
    })


    .catch(err => console.log(err))



















