const promis = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let result = false;
        if(!result){
            resolve({id:101, name:"Next JS"})
        }else{
            reject("Error, something went wrong")
        }
    }, 2000)
})

promis.then((user)=>{
    console.log(user)
    return user.name
}).then((name)=>{
    console.log("Name : ", name)
}).catch((err)=>{
    console.log("catch error - ", err)
}).finally(()=>{
    console.log("Finnaly Promise either resolve or rejected")
})