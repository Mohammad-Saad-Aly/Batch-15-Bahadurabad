// setInterval(function(){
//     console.log('test')
// }, 5000)

// function test(){
//     console.log('smit')
// }
// setInterval(test, 1000)

// setTimeout(function(){
//     console.log('quiz')
// }, 5000)

// clearInterval()
// clearTimeout()

// var count = 0
// var interval;
// interval = setInterval(function () {
//     count++
//     console.log(count)
// }, 1000)
// setTimeout(function () {
//     clearInterval(interval)
// }, 10000)


var getMin = document.querySelector("#min")
var getSec = document.querySelector("#sec")
var getMsec = document.querySelector("#msec")
var min = 0
var sec = 0
var msec = 0
var interval;

function start() {
    interval = setInterval(function () {
        msec++
        getMsec.innerHTML = msec

        if (msec >= 100) {
            sec++
            getSec.innerHTML = sec
            msec = 0
        }
        else if (sec >= 10) {
            min++
            getMin.innerHTML = min
            sec = 0
        }
    }, 10)

    document.querySelector("#btn").disabled = true


}



function stop() {
    clearInterval(interval)
    document.querySelector("#btn").disabled = false
}


function reset(){
    min = 0
    sec = 0
    msec = 0
    getMin.innerHTML = min
    getMsec.innerHTML = msec
    getSec.innerHTML = sec
    clearInterval(interval)
    document.querySelector("#btn").disabled = false
}
