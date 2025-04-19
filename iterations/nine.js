const arr=[1,2,3,4]
const l=arr.reduce((acc,curr)=>{
    console.log(`acc:${acc} curr:${curr}`)
    return acc+curr

},0)
// console.log(l)
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);