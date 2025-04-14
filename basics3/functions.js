// function sayMyName(){
//     console.log("HI")
// console.log("HI")
// console.log("HI")
// console.log("HI")
// console.log("HI")

// }
// sayMyName()

// function add(a,b){
//     return a+b
// }
// console.log(add(3,5))


// function addTwoNumbers(num1,num2){
//     // let res=num1+num2
//     return num1+num2
// }
// const result=addTwoNumbers(3,5)
// console.log(result)

// function userLogin(username="Atharv"){
//     if (!username){
//         console.log("please enter the username")
//         return
//     }
//     return `${username} logged in successfully!`
// }
// console.log(userLogin())

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(100,333,34,56)) 

const user={
    username: "Atharv",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({

})

const myNewArray=[1,2,3,4,5]
function returnSecVal(arr){
    return arr[1]

}
console.log(returnSecVal(myNewArray))