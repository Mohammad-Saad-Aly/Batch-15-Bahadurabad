var items = [
    {
        pid: '01',
        pname: 'Mobile',
        pcompany: 'iPhone',
        pprice: '150000',
        pimg: 'https://karachicomputers.pk/wp-content/uploads/2024/03/13red.jpg'
    },
    {
        pid: '02',
        pname: 'LED',
        pcompany: 'TCL',
        pprice: '65000',
        pimg: 'https://www.winstore.pk/cdn/shop/products/rhSEtunPVB_540x.jpg?v=1640606334'
    },
    {
        pid: '03',
        pname: 'Begherat Bachy',
        pcompany: 'Sir Saad ki class',
        pprice: '150',
        pimg: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Mughal_emperors.jpeg?VersionId=m7oeNhZeSqbMpe2pI6WCX4.x3vyCyjak'
    }
]

var getProductDiv = document.getElementById('products')

for (var i = 0; i < items.length; i++) {
    getProductDiv.innerHTML += `<div class="card text-center" style="width: 18rem;">
     <img src=${items[i].pimg} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${items[i].pid}</h5>
    <h5 class="card-title">${items[i].pname}</h5>
    <p class="card-title">${items[i].pcompany}</p>
    <p class="card-text">${items[i].pprice}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}



// for(var i=0; i < items.length; i++){
//     for(var key in items[i]){
//         document.writeln(items[i][key] + " --- <br>")
//     }
// }

// document.writeln(items[0])
// document.writeln(items[0]['pcompany'])
// console.log(items[0]['pcompany'])