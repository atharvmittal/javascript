const mySym=Symbol("key1")
const jsUser={
    name:"Atharv",
    age:20,
    [mySym]:"mySymbol",
    location:"India",
    email:"atharvmittal9876@gmail.com",
    isLoggedIn:false,
    lastLoginDays:[1,2,3],
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])
// jsUser.email="xyz@gmail.com"
// Object.freeze(jsUser)
// jsUser.email="atharvmittal9876@gmail.com"
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());