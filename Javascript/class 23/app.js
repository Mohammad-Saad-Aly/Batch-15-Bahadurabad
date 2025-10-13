// function read(){
//     var text = 'olor sit amet consectetur adipisicing elit. Tempore a sunt quisquam, deleniti iusto dictadignissimos repellat'
//     var getPara = document.getElementById('para')
//     getPara.innerHTML = text
 
//     var getAnc2 = document.getElementById('anc2')
//     getAnc2.style.display = 'block'
 
//     var getAnc = document.getElementById('anc')
//     getAnc.style.display = 'none'
//     // getAnc.innerHTML = ''    
// }


// function setClass(){
//     var getPara = document.getElementById('para')
//     getPara.className = 'abc'
// }


// function send(){
//     var getInp = document.getElementById('inp').value
//     var createPara = document.createElement('p')
//     var getDiv = document.getElementById('div')
//     createPara.innerHTML = getInp
//     getDiv.appendChild(createPara)
// }

function send(){
    var getInp = document.getElementById('inp')
    var getdiv = document.getElementById('div')
    getdiv.innerHTML += `<p> ${getInp.value} </p>`
    getInp.value = ''
}