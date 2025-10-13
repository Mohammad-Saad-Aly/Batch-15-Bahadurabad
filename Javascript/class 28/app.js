// var getDiv = document.getElementById('container')
// function sendMessage(){
//     var getInput = document.getElementById('inp')
//     var secondDiv = document.createElement('p')
//     secondDiv.textContent = getInput.value
//     getDiv.appendChild(secondDiv)
//     secondDiv.setAttribute('class', 'msg')
//     // var text = document.createTextNode(getInput.value)
//     getInput.value = null
// }

// var student = {
//   id: "01",
//   name: "Ali",
//   activities: ["swim", "reading", "coding"],
// };

// for (var key in student) {
//   if (key == "activities") {
//     for (var i = 0; i < student.activities.length; i++) {
//       document.writeln(key + " : " + student.activities[i] + " <br>");
//     }
//   } else {
//     document.writeln(key + " : " + student[key] + "<br>");
//   }
//   // document.writeln(student[key] + "<br>")
// }

// function Students(id, name, sec, roll, uni) {
//     this.id = id,
//     this.name = name,
//     this.sec = sec,
//     this.roll = roll,
//     this.uni = uni
// }

// var stud1 = new Students('01', 'Ali', 'Yellow', '123', 'SMIU')
// var stud2 = new Students('02', 'Alisha', 'yelo', '7999', 'Iqra')

// for(var key in stud1){
//     document.writeln(stud1[key])
// }

// img url
// name
// make
// model
// color
// brand

// bootstrap k card main saare objects show karane hein.

function Cars(img, name, model, color, price) {
  (this.img = img),
    (this.name = name),
    (this.model = model),
    (this.color = color),
    (this.price = price);
}

var car1 = new Cars(
  "https://cache3.pakwheels.com/system/car_generation_pictures/6000/original/Civic_10th_Gen_-_PNG.png?1635418859",
  "Civic",
  "2022",
  "Gray",
  "750000"
);

var getDiv = document.getElementById("div");
for (var key in car1) {
  getDiv.innerHTML = `<div class="card" style="width: 18rem;">
  <img src=${car1.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${car1['name']}</h5>
    <p class="card-text">${car1['color']}</p>
    <p class="card-text">${car1['price']}</p>
    <p class="card-text">${car1['model']}</p>
    <button class='btn btn-dark'> Add to Cart </button>
    </div>
</div>`;
}
