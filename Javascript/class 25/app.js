var getInp = document.getElementById('todo')
var getUl = document.getElementById('ul')

function clr(){
    getUl.innerHTML = ''
}

function editItem(e){
    var getValue = prompt("Enter updated value", e.parentNode.firstChild.textContent)
    e.parentNode.firstChild.textContent = getValue
}



function addTodo(){
    
    getUl.innerHTML += `<li> ${getInp.value} <span> <button onclick='editItem(this)' class='btn btn-info'> Edit </button> <button onclick='this.parentNode.parentNode.remove()' class='btn btn-dark'> Delete </button> </span></li>`
    getInp.value = ''
    
    
    // var createLi = document.createElement('li')
    // var text = document.createTextNode(getInp.value)
    // createLi.appendChild(text)
    // console.log(createLi)
}