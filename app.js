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
let sum = (a,b,c) =>{
console.log(a+b+c);
};
let numbers = [1,5,8];
sum(...numbers);



































