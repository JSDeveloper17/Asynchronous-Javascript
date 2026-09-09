const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(" resolved first Promise")
    }, 1000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve(" resolved second Promise")
        reject(new Error("an error occured"))
    }, 2000)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(" resolved thired Promise")
    }, 3000)
})

2.//!Promise.allSettle -
//? wait for all Promise to settle(either resolve/reject) and return their result as an array
//? of object with status & value

const allSettle = Promise.allSettled([p1,p2,p3])
allSettle.then((value)=>{
    console.log(value)
})

//!Promise.race -
//*wait for the first Promise to settle and its result/error become output
// const race = Promise.race([p1,p2,p3])
// race.then((value)=>{
//     console.log(value)
// })

//!Promise.Any-
//todo -wait for the first Promise to fulfilled(not Rejected) and its Result become outcome
//? through aggreted error if all promise are rejected

// const any = Promise.any([p1,p2,p3])
//  any.then((value)=>{
//      console.log(value)
//  })

//todo -Promise.resolve() and Promise.reject() are static Promise methods.
//  They create a Promise that is already settled.

// !Promise.Resolve -
// Make a resolved promise with given value
// const res = Promise.resolve(10)
//  res.then((value)=>{
//      console.log(value)
//  })

//!Promise.Reject -
//Make a reject promise with given error
// const rej = Promise.reject("something bad happen")
//  rej.catch((value)=>{
//      console.log(value)
//  })