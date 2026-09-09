function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("fetching Data1")
            //resolve("success")
            reject("got some error")
        }, 1000)
    })
}
getData().then((res)=>console.log(res))
.catch((err)=>console.log(err))

//2.
const p1 = new Promise((resolve, reject)=>{
    //* asyns task - Database calling, network, api fetch 
    setTimeout(() => {
        resolve({id:101, title:"Express JS"})
    }, 2000);
})

p1.then((user)=>{
    console.log(user)
}).catch((err)=>{
    console.log(err)
})