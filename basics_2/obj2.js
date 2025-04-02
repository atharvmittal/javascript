// const tinderUser=new Object()
const tinderUser={}
tinderUser.id="12345"
tinderUser.name="John Doe"
tinderUser.isActive=true
// console.log(tinderUser)
const user1={
    email:"atharvmittal9876@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Atharv",
            lastName:"Mittal"
        }
    }
}
// console.log(user1.fullName.userFullName.firstName)
const obj={

    1:"a",
    2:"b"
}
const obj1={3:"c",4:"d"}    
const obj2={...obj,...obj1}
// console.log(obj2)
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("id"))
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]