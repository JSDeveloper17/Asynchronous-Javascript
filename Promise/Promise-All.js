
//!Promise.All =>
//? wait for all promise resolve and return the array of result. it any promise rejected then
//?it become error & all other result ignored.

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(" resolved first Promise")
    }, 1000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(" resolved second Promise")
    }, 2000)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(" resolved thired Promise")
    }, 3000)
})

const p = Promise.all([p1,p2, p3])
p.then((value)=>{

    console.log(value)
})