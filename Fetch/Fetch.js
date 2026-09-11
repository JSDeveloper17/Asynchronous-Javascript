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
const response = await fetch(url); //wait for HTTP response
const data = await response.json(); //Wait for the response body to be read and parsed as JSON.
console.log(data);

//todo 1. fetch() works asynchronously:

/*
┌─────────────────────────────┐
│ 1. SEND REQUEST             │
│                             │
│ fetch(url, options)         │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 2. RECEIVE RESPONSE         │
│                             │
│ Promise → Response          │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 3. CHECK RESPONSE           │
│                             │
│ response.ok                 │
│ response.status             │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 4. READ BODY                │
│                             │
│ response.json()             │
│ response.text()             │
│ response.blob()             │
│ etc.                        │
└─────────────────────────────┘

                    fetch(url)
                       │
                       ▼
                 Returns Promise
                       │
                       │ await
                       ▼
                 Response Object
              ┌────────┼──────────┐
              │        │          │
            status     ok       headers
              │
              ▼
       Is HTTP response OK?
          /            \
        NO              YES
        │                │
     throw Error        │
        │                ▼
        │        response.json()
        │                │
        │                │ await
        │                ▼
        │         JavaScript Data
        │                │
        └───────────────►│
                         ▼
                    Use the data
*/