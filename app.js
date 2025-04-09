// //es class 1
// let galobalVar = `i am a global variable`;//global variable
// function data(){
//     console.log(galobalVar);
//      let localVar = `i am local variable`
//      console.log(localVar);//local variable
// }
// data();
//                                 //*difference between let, var and const*
// var name = `shifa`;
// var name = `ali`;
// console.log(name);
// //can be reassigned and also redeclared
// // let name = `shifa`;
// name  = `ali`;
// console.log(name);
// //can be reassigned but not be redeclared
// // const name = `shifa`;
// //cannot be reassigned and redeclared
// // var is a function based variable also available outside the function but not a good practice

// if(true){
//     let testing = 12345;
// }
// // console.log(testing);
// if(true){
//     var testing = 12345;
// }
// console.log(testing);
// //template literals
// let text = `hello,
// this is javascript`
// console.log(text);
// //closure, when a child function remembers its parent variable is called closure
// function parent(){
//     let secret =  `i love javascript`;
//     function child(){
//         console.log(secret);
//     }
//     child();
// }
// parent();

// function counter(){
//     let count = 0;
//     const increment = setInterval(function(){
//         count--;
//         console.log(count);
//     },3000)
// }
// //this will automatically increment our count in every three seconds
// counter();

// let numbers = [0,1,2];
// let [first, second, third] = numbers;
// console.log(first, second, third);

// let numbers = [10, , 20, 10];
// let [a,b=100,c,d] = numbers;
// console.log(a,b,c,d);

// let x = 5, y = 10;
// [x,y] = [y,x];
// console.log(x, y);

// const data = {
//     name: "shifa",
//     address: {
//         city: 'karachi',
//         area: 'nazimabad'
//     }
// }
// let {name, address} = data;
// console.log(name, address);

// in functions (desturturing)
// const data = {
//     name: "alice",
//     age: 25
// }
// let {name: username, age: userAge} = data;
// console.log(username, userAge);

// let{name, age} = data;
// let greet = ({name, age}) =>{
//     console.log(`hello! ${name}, you are ${age} years old`);
    
// }
// let data ={
//     name: "shifa"
// }
// let { name, age = 17} = data;
// console.log(name, age);

// let actual = [1,2,3,4];
// let copy = [...actual];
// console.log(copy);

// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let num = {
//     name : "shifa",
//     age: 17,
//     education: 1
// };
// let name = {
//     name: "ali",
//     batch: 4
// }
// let merged = [...arr1, num, ...arr2];
// console.log(merged);

// let merged = {num, name};
// merged.education = [1,2,3,4,5]
// console.log(merged);
// let sum = (a,b,c) =>{
// console.log(a+b+c);
// };
// let numbers = [1,5,8];
// sum(...numbers);

// default parameter
// function greet(name){
//     console.log("hello!, " + name);
// }
// function greet(name = "guest"){
//     console.log("Hello!, " + name);
// }
// greet("shifa");
// with multiple values
// function intro (name = "shifa", age = 17){
//     console.log("My name is "+ name+ " and my age is "+ age);
    
// }
// intro();
// default parameter for calculation
// function calculation(price, tax = price* 0.1){
//     console.log(`total price : ${price + tax}`);
    
// }
// calculation(200);

// without rest parameters
// function sum (a, b){
//     console.log(a+b);
    
// };
// sum(12, 23)
//with rest parameters
// function nums(...numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     console.log(total); 
// };
// nums(10,20,30,34,45,6778,2453,346)

// function greet (greeting , ...names){
//     for(let i = 0; i < names.length ; i++){
//         console.log(greeting, names[i]+"!");
        
//     }
// }
// greet("hey!,","shifa", "isha", "azlaan")

// function name(){
//     console.log(arguments);
// }
// name("shifa", "isha")
// const name1 = {
//     age : 21
// }
// console.log(name1);
// enhanced object literals
// var name = "shifa";
// var age = 17;
// var course = "web and app development";
// const data ={
//     name,age,course,sayHello(){
//         console.log("hello");
        
//     }
// }
// console.log(data);
// console.log(data.sayHello());

// const obj1 = {
//     name: name,
//     course: course,
//     age: age

// }
// let name = "shifa";
// let course = "web and app development";
// let age  = 17;
// const obj2 = {
//     name: name,
//     course: course,
//     age: age

// }
// console.log( obj1, obj2);

//promises
// const promise = new Promise((resolve, reject)=>{
//     const randomNum = Math.random();
//     if(randomNum < 0.5){
//         resolve('success');
//     }
//     else{
//         reject('error!');
//     }
// })
// promise.then((message)=>{
//     console.log(message);
    
// })

// const promise = new Promise((resolve,reject)=>{
//     let userInput = prompt("is your career successful?");
//     if(userInput == "yes" || userInput == "Yes" || userInput == "YES"){
//         resolve("success");
//     }
//     else{
//         reject("try again until your success");
//     }
// })
// promise.then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
    
// })

//nested promises
// const promise = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('hello pakistan!!');
//     },2000)
// });
// promise.then((message)=>{
//     console.log(message);
//     return "hello karachi";
// }).then((message)=>{
//     console.log(message);
//     return "hello sindh"
// }).then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })
// promises all
const promise1 = new Promise ((resolve, reject)=>{
    let name = "shifa";
    if(name){
        resolve("success");
    }
    else{
        reject("failure")
    }
})
const promise2 = new Promise ((resolve, reject)=>{
    let name = "shifa";
    if(name){
        resolve("success");
    }
    else{
        reject("failure")
    }
})
const promise3 = new Promise ((resolve, reject)=>{
    let name = "shifa";
    if(name){
        resolve("success");
    }
    else{
        reject("failure")
    }
})
Promise.all([promise1, promise2, promise3]).then((messages)=>{
    console.log(messages);
    
})
























