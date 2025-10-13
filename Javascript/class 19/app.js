function dabaya(e){
    var getInp = document.getElementById('inp')
    getInp.value += e
}

function eq(){
    var getInp = document.getElementById('inp')
    getInp.value = eval(getInp.value)
}

function clr(){
    var getInp = document.getElementById('inp')
    getInp.value = getInp.value.slice(0,-1)
}

function clrall(){
    var getInp = document.getElementById('inp')
    getInp.value = ''
}