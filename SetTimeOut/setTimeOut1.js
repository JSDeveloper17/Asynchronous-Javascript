console.log("A")

const addNum = (a, b)=>{
    console.log("result ",a+b)
}
const multiply=()=>{
    console.log("B")
    addNum(10,20)
    console.log("C")
}


setTimeout(() => {
    multiply()
}, 5000);

setTimeout(() => {
    console.log("event loop")
},2000)
console.log("D")