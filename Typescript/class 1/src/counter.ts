let incBtn = document.getElementById('inc') as HTMLButtonElement
let decBtn = document.getElementById('dec') as HTMLButtonElement
let num = document.getElementById('num') as HTMLHeadingElement

let count = 0

function counter(clickOn : 'plus' | 'minus'){
    if(clickOn == 'plus'){
        count++
        num.innerText = count.toString()
    }
    if(clickOn == 'minus'){
        count--
        num.innerText = count.toString()
    }
}

incBtn.addEventListener('click', ()=>{counter('plus')})
decBtn.addEventListener('click', ()=>{counter('minus')})