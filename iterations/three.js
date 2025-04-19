// const arr=[1,2,3,4,5,6,7,8,9,10]
// for (const i of arr) {
//     console.log(i)
// }
// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

const map=new Map()
map.set('In',"india")
map.set("Usa","America")
map.set("Uk","United Kingdom")
map.set("Uae","United Arab Emirates")
// console.log(map)
for (const i of map.values()) {
    console.log(i)

    // console.log(`key is ${i} and value is ${j}`)
    
}
const myObj={
    1:"one",
    2:"two",
    3:"three"
}
// for (const element of myObj) {   NOt working
//     console.log(element)
    
// }