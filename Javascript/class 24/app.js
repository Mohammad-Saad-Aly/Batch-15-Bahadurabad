// crud operations
// create, read, update, delete

// var getChild = document.getElementById('child')
// console.log(getChild.parentElement)





var getList = document.getElementById('list')
var getInput = document.getElementById('todo')

function addTodo(){
    getList.innerHTML += `<li> ${getInput.value} <button onclick='this.parentNode.remove()'> Delete </button> </li>`
    getInput.value = ''
}

// function del(e){
//     e.parentNode.remove()
// }