//! Await - await is a keyword that can be used only inside async function
//"Pause this async function and resume it asynchronously when the value is available."
//await pauses only the async function, not JavaScript/the browser as a whole.

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Resolved first Promise")
    }, 5000);
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Resolved second Promise")
    }, 3000);
})

async function getData() {
    console.log("Hello Async-Await")

    const res1= await p1;
    console.log("after resolved p1")
    console.log(res1)

    const res2= await p2;
    console.log("after resolved p2")
    console.log(res2)
}
getData()

/*

                     YOUR PROGRAM
                          │
                          ▼
                 Create Promise p1
                          │
                    start 5s timer
                          │
                          ▼
                 Create Promise p2
                          │
                    start 3s timer
                          │
                          ▼
                     getData()
                          │
                          ▼
                "Hello Async-Await"
                          │
                          ▼
                     await p1
                          │
                    ⏸️ pause
                          │
                          │
             ┌────────────┴────────────┐
             │                         │
             ▼                         ▼
       p2 timer = 3 sec          p1 timer = 5 sec
             │                         │
             ▼                         ▼
          p2 = ✅                    p1 = ✅
             │                         │
             │                         ▼
             │                  Microtask Queue
             │                         │
             │                         ▼
             │                  Resume getData()
             │                         │
             │                         ▼
             │                 "after resolved p1"
             │                 "Resolved first Promise"
             │                         │
             │                         ▼
             └──────────────────► await p2
                                       │
                                  p2 already ✅
                                       │
                                       ▼
                              "after resolved p2"
                              "Resolved second Promise"   
                              */