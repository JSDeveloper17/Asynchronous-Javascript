//!fetch() is a modern Web API used by JavaScript to make HTTP requests to a server.
//fetch() sends an HTTP request and gives you a Promise that eventually provides a Response
//  object. You then read the actual response data from that Response.


fetch("https://jsonplaceholder.typicode.com/users")  //JavaScript asks the browser 
                                                    //to make an HTTP request.
    //fetch() immediately returns a Promise
    //Promise resolves with a Response Object
 .then(res => res.json())
 //The HTTP response contains more than just the JSON data like status, body, Headers
 .then(data => console.log(data))

//!complete flow -
const response = await fetch(url);
const data = await response.json();
console.log(data);

//todo 1. fetch() works asynchronously:
//