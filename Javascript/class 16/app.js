// var print = new Date().toString()
// document.write(print.slice(15))

// var pri = new Date()
// var methods = pri.getDate() + "-" + pri.getMonth() + "-" + pri.getFullYear()
// document.write(methods)

// var pri = new Date()
// document.write(pri)

// var days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
// var op = new Date().getDay()
// document.write(days[op])

// var months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];

// var date = new Date()
// var printDate = date.getDate() + "/" + months[date.getMonth()] + "/" + date.getFullYear()
// document.write(printDate)


// var date = new Date().getTime()
// var dob = new Date(prompt("Enter your date of birth")).getTime()
// var minus = date - dob
// var final = minus / (1000 * 60 * 60 * 24 * 365)
// document.write(Math.floor(final))


let nums = [1, 2, 2, 3, 4, 4, 5, 6, 6]
for(let i= nums.length-1; i >=0; i--){
    if(nums.indexOf(nums[i]) !== i){
        nums.splice(i,1)
    }
}
document.write(nums)


