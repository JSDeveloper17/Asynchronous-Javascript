//! The second argument — options object
//? fetch() can accept a second argument:

fetch("https://jsonplaceholder.typicode.com/users", {
    method:"POST",
    headers:{
      "Content-Type":"Application/json"//It tells the server what format the request body uses.
    },
    body: JSON.stringify({name:"Alex"})
})

//!Request Headers
//*HTTP headers are additional pieces of information sent along with a request or response.
//? - Used to send authentication credentials/token.
//Accept tells the server what response format the client prefers.

fetch(URL,{
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer JWT_Token"
}})