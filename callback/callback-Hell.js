console.log("start")

function login(email, password, callback){
    setTimeout(() => {
        console.log("inside Login")
        const userData = {userId:1001, userName: "Alex"}
        callback(userData)
    }, 2000);
}

function getUserTweets(userId, callback){
    setTimeout(()=>{
        console.log("inside Tweets")
        const userTweets = [{tweetId:201, content:"Virat Best"},
              {tweetId:202, content:"Pant better"}
        ]
        callback(userTweets)
    },1000)
}
function getTweetComment(tweetId, callback){
    setTimeout(()=>{
        console.log("inside comments")
        const tweetComments = [{commentId:201, content:"Virat Best"}]
        callback(tweetComments)
    },1000)
}
const data = login("pant@gmail.com", "Pant@123", (userData)=>{
    getUserTweets(userData.userId, (userTweets)=>{
        getTweetComment(userTweets[0].tweetId, (comment)=>{
            console.log(comment)
        })
    })
} )

console.log("end")