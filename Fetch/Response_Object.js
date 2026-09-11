//!Response Object
const res = await fetch(url);
//response is a Response object. It is not your actual API data.

//todo - Response contain
/*
Response
├── status  - Contains the HTTP status code. 200 OK, 201 Created, 400 — Bad Request
├── statusText
├── ok //it is True if status code btw 200- 299
├── headers
├── url
└── body */

//! response.ok
//Because fetch() doesn't automatically reject for a 404 or 500.
//We're manually converting HTTP failures into rejected Promises.
const response = await fetch(url)
if(!response.ok){
    throw new Error(`HTTP ERROR, ${response.status}`)
}

//! .json() Method
/*
response.json(): .json() is also asynchronous so use await keyword
1. Reads the response body
2. Interprets it as JSON
3. Parses it
4. Gives you the corresponding JavaScript value */
const data = await response.json()