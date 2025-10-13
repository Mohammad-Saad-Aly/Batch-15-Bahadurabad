var getUl = document.querySelector("#ul")

function addTodo(){
    var getInp = document.querySelector("#inp")
    getUl.innerHTML += `<li> ${getInp.value} <button onclick='delItem(this)' class='btn btn-dark'> Delete </button>  <button class='btn btn-info'> Edit </button> </li>`
    getInp.value = ''
}

function deleteall(){
    getUl.innerHTML = ''
}

function delItem(e){
    e.parentNode.remove()
}