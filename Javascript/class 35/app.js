// var nums = [10, 30, 50, 28, 56, 78, 43, 57, 89]
// var filterData = nums.filter(function(data){
//     return data >= 100
// })
// console.log(filterData)


let arr = [
    {
        pid: '01',
        pname: 'Mouse',
        pprice: '2000',
        pdes: 'abcd',
        pimg: 'https://t3.ftcdn.net/jpg/01/82/47/28/360_F_182472844_YJTLFE1dmdK0KJWF6AdxU5A24eInzXxN.jpg'
    },
    {
        pid: '02',
        pname: 'Keyboard',
        pprice: '200',
        pdes: 'xyz',
        pimg: 'https://easetec.com.pk/wp-content/uploads/2023/01/2-17.jpg'
    },
    {
        pid: '03',
        pname: 'speaker',
        pprice: '20000',
        pdes: 'ghi',
        pimg: 'https://alhamdtech.pk/cdn/shop/files/jbl-partybox-110-portable-party-speaker-built-in-lights-961702.jpg?v=1722252487'
    }
]


var getMain = document.getElementById('main')

for (var i = 0; i < arr.length; i++) {
    var products = arr[i]
    getMain.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${products.pimg} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${products.pid}</p>
    <h5 class="card-title">${products.pname}</h5>
    <p class="card-text">${products.pdes}</p>
    <p class="card-text">${products.pprice}</p>
  </div>
</div>`
}

function filterData() {
    getMain.innerHTML = ''
    var getInp = document.getElementById('data')
    var getAns = arr.filter(function (data) {
        return getInp.value == data.pid || getInp.value == data.pname
    })

    if (getAns.length) {
        getMain.innerHTML = `<div class="card" style="width: 18rem;">
  <img src=${getAns[0].pimg} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${getAns[0].pid}</p>
    <h5 class="card-title">${getAns[0].pname}</h5>
    <p class="card-text">${getAns[0].pdes}</p>
    <p class="card-text">${getAns[0].pprice}</p>
  </div>
</div>`
    }
    else{
        alert('no items found')
    }
    


}




