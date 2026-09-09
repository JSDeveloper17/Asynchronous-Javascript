//!callback is a function that you pass into another function as an argument
//  for executing later.

const sum = (a,b)=>{
    return a+b
}

const number = (x, y, callback)=>{
    return callback(x,y)
}
const result = number(3, 7, sum)
console.log(result)


