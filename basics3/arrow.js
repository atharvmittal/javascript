const user={

    username:"atharv",
    price:999,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username} to the website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="atharv123"
// user.welcomeMessage()
// console.log(this)
// function chai(){
//     console.log(this)
// }
// chai()

// const chai=()=>{
//     let username="atharv"
//     console.log(this)
// }
// chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(2,3))

const myArray=[1,3,3,4,5]
myArray.forEach()