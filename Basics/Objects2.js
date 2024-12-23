
// const tinderUser = new Object();

const tinderUser = {};


tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "harsh",
            lastname : "korde"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj4 = {5 : "a", 6 : "b"};

// const obj3 = {obj1,obj2}     //{obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' }}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj1 === obj3)       //true

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj1 === obj3)       //false due to {} which generates new object

// const obj3 = Object.assign({},obj1,obj2,obj4)


const obj3 = {...obj1,...obj2};
// console.log(obj3)


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },

    {
        id : 2,
        email : "k@gmail.com"
    },

    {
        id : 3,
        email : "hk@gmail.com"
    },

]


// console.log(users[1].email);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));    //[[],[],[]]


console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    coursename : "All about js",
    price : "999",
    courseInstructor : "Harsh"
}


const {courseInstructor : instructor} = course;

// console.log(course.courseInstructor);
console.log(instructor);


