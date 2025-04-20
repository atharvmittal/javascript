// const pr=new Promise(function(res,rej){
//     setTimeout(function(){
//         console.log('Async task is complete')
//         res()
//     },1000)
// })
// pr.then(function(){
//     console.log("promise consumed")
// })
// new Promise(function(res,rej){
//     setTimeout(function(){
//         console.log("async task 2 is completed")
//         res()
//     },1000)
// }).then(function(){
//     console.log("Atharv")
// })
//promise 3
//  const pr3=new Promise(function(res,rej){
//     setTimeout(function(){
//         res({username:"Atharv",email:"atharvmittal9876@gmail.com"})
//     },1000)
//  })
// pr3.then(function(user){
//     console.log(user)
// })


//promise4
//  const pr4=new Promise(function(res,rej){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             res({username:"Atharv",email:"atharvmittal9876@gmail.com"})
//         }
//         else{
//             rej("error")
//         }
//     },1000)
//  })
// pr4.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((name)=>{
//     console.log(name)
// }).catch(function(e){
//     console.log(e)
// }).finally(function(){
//     console.log("finally is executed")
// })

// const pr5=new Promise(function(res,rej){
//     setTimeout(function(){
//                 let error=true
//                 if(!error){
//                     res({username:"Atharv",email:"atharvmittal9876@gmail.com"})
//                 }
//                 else{
//                     rej("error")
//                 }
//             },1000)
// })
// async function conpr5(){
//     try{
//         const res=await pr5
//     console.log(res)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// conpr5()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))