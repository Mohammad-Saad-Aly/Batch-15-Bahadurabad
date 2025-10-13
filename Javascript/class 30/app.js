// var student = {
//     id: '01',
//     firstName: 'Saad',
//     sec: 'yellow'
// }

// var arr = ['abcd', 'xyz', 'def']
// for(var x of arr){
//     document.writeln(x)
// }

// for(var value in student){
//     document.writeln(student[value])
// }

// document.writeln(`${student.id} ${student.firstName} ${student.sec}`)
// document.writeln(student.id)
// document.writeln(student.firstName)



var items = [
    {
        itemId: '01',
        itemName: 'iPhone',
        itemPrice: '150000',
        itemImage: 'https://cellmart.pk/wp-content/uploads/2024/07/0e9gueihg9uegioheu9geioh.jpg'
    },
    {
        itemId: '02',
        itemName: 'Motorola',
        itemPrice: '15000',
        itemImage: 'https://t-mobile.scene7.com/is/image/Tmusprod/FG_6057348_Moto_Edge_5G_2024?ts=1718653987140&$pngtransparent$&dpr=off'
    },
    {
        itemId: '03',
        itemName: 'Samsung',
        itemPrice: '1500000',
        itemImage: 'https://images.samsung.com/is/image/samsung/p6pim/pk/sm-s928bzkcpkd/gallery/pk-galaxy-s24-s928-489293-sm-s928bzkcpkd-539796713'
    },

]

var getDiv = document.getElementById('main')

for(var i=0; i < items.length; i++){
    var data = items[i]
    getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${data.itemImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">NAME: ${data.itemName}</h5>
    <p class="card-text">PRICE: ${data.itemPrice}</p>
  </div>
</div>`
}



// for(var i=0; i < items.length; i++){

//     for(var key in items[i]){
//         document.writeln(items[i][key])
//     }

// }

// document.writeln(items)













