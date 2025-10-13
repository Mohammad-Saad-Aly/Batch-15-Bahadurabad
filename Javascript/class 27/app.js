// var arr = ['a', 'b', 'c', 'd']
// console.log(arr)

// var student = {
//     id: 1,
//     name: 'ali',
//     email: 'ali@gmail.com',
//     status: undefined,
//     bool: false,
//     nal: null,
//     hobbies: ['affan ko gherna', 'besharam', 'tairna']
// }

// document.writeln(student.hobbies)

// for (var key in student) {
//     document.writeln(student['email'])
// }

// document.writeln(student['email'])

// for(var key in student){
//     document.writeln(student[key] + "<hr>")
// }

// document.writeln(student)
// document.writeln(student.name + " " + student.email)
// console.log(student)

var car = {
    'model': 2025,
    'name1': 'civic',
    color: {
        'color1': 'black',
        'color2': 'white',
        'color3': 'gray'
    },
    display: function(){
        return car.name1 + " " + car.model
        // return this.model + this.name1
    }
}


var getValue = car.display()
console.log(getValue)


// car.display()
// document.writeln(car.name + " : " + car['color']['color2'])
// document.writeln(car.name + " : " + car.color['color1'])
// document.writeln(car.model)
// document.writeln(car['model'])












