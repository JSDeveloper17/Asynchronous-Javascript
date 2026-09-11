//?using Async Await
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


//!Interview Imp

/*
"Does fetch reject when the server returns 404?"

Say:

No. A 404, 500, or other HTTP error normally doesn't cause fetch() to reject.
The Promise can still resolve with a Response object. Therefore, we should check response.ok
or response.status ourselves and throw an error when appropriate. Network failures,
 on the other hand, can cause the fetch Promise to reject. 

Network-level failures

Examples:

No internet connection
DNS failure
Server cannot be reached
Request blocked by certain browser networking policies
Connection failure

In these situations, fetch() can reject its Promise.*/