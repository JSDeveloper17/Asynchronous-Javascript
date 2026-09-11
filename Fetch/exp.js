//? using Async Await

async function getUsers() {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
           throw new Error(`HTTP Error - ${response.status}`)
        }
        const data = await response.json();
        console.log(data)
    }
    catch(err){
        console.log("Request Failed ",err)
    }
}

//* using Promises
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
     if(response.ok){
        throw new Error(`HTTP Error - ${response.status}`)
     }
     return response.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log("Request Failed", err))
