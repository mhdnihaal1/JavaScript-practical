// //--------------for each--------------------
//  const number = [1, 2, 3, 4, 5];
//  const foreach=number.forEach((number)=>console.log(number))

const { isArgumentsObject } = require("util/types");


//output
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5  it modify on original array


// //---------------------map---------------------------
// const number = [1,2,3,4,5]

// const map =number.map((number)=> number *2)

//  console.log(map)  //output:[4,5,6,7,8]
//   //------------------filter---------------

// const number = [1,2,3,4,5]

// const filter = number.filter((num)=>num%2==0)

// console.log(filter);
 
// ---------------------reduse-------------------

// const number = [1,2,3,4,5]

// const newnumber = number.reduce((number,accumulator)=>{

//   if (number %2 ==0){
//     return number
//   }
//      return number +accumulator

// })
// console.log(newnumber)

// --------------hoisting----------------------
// hoist()
// function hoist(){
//   console.log('hoisted')
// }

// --------- ---closure-------------------------
// function a(){
//   let x=10;
//   function b(){
//     let y=20;
//     function c(){
//       let z=30;
//       console.log(x+y+z);
//     }
//     c()
//   }
//   b()
// }
// a()
// -------------slice------------

//  const originalArray = [1, 2, 3, 4, 5];
// const slicedArray=originalArray.slice(1,3)
//  console.log(slicedArray); // Output: [2, 3, 4]
// console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// ---------------splice-------------

// const originalArray = [1, 2, 3, 4, 5];
// const removedElements= originalArray.splice(2,1,3,4)
//  console.log(originalArray); 
//  console.log(removedElements); 

// --------------------push------------------

// const fruits = ['apple', 'orange', 'banana'];
// const newLength = fruits.push('grape', 'kiwi');

// console.log(fruits);      // Output: ['apple', 'orange', 'banana', 'grape', 'kiwi']
// console.log(newLength);   // Output: 5 (length of the modified array)

// ----------------pop--------------------

// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.pop();

// console.log(colors);      // Output: ['red', 'blue']
// console.log(removedColor); // Output: 'green' (the last element that was removed)

// ------------------unshift------------------

// const fruits = ['orange', 'banana'];
// const newLength = fruits.unshift('apple', 'grape');

// console.log(fruits);      // Output: ['apple', 'grape', 'orange', 'banana']
// console.log(newLength);   // Output: 4 (length of the modified array)

// ----------------------shift------------------------------

// const colors = ['red', 'blue', 'green'];
// const removedColor = colors.shift();

// console.log(colors);      // Output: ['blue', 'green']
// console.log(removedColor); // Output: 'red' (the first element that was removed)

// -----------------------------------map single manipulation-------------------------------------
// const originalArray = [1, 2, 3, 4, 5]

// const manipulatedArray = originalArray.map((element, index) => {

//   if (index === 0) {

//     return element * 2;
//   }

//   return element;
// });

// // console.log(originalArray)   // Output: [1, 2, 3, 4, 5]
// console.log(manipulatedArray)

//---------------------------------------Object-------------------------------

// const obj ={
//     name:'nihal',
//     dob:'10,10,2004',
//     place:'vadakara'
// }
// console.log(obj)

// ------------callback--------------

// function nihal (name,call){
//         console.log(`hello  ${name}`);
//         call()
// }

// function kp(greet){
//   console.log('How are you')
// }

// nihal('Muhammed Nihal',function(){
//   kp('greet')
// })

//-------------------------------------shallow copy------------------------------------

// const originalArray = [1, 2, [3, 4]];
// const shallowCopy = originalArray.slice();

// shallowCopy[2].push(5)

// console.log(originalArray); // Output: [1, 2, [3, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [3, 4, 5]]

//-------------DEEP COPY-------

// const originalArray = [1, 2, [3, 4]];
// const deepCopy =JSON.parse(JSON.stringify(originalArray))

// deepCopy[2].push(5)

// console.log(originalArray); // Output: [1, 2, [3, 4]]
// console.log(deepCopy);   // Output: [1, 2, [3, 4]]

//-----------sealedobject------------
// const obj={
//   name:'nihal',
//   age:19
// }

// Object.seal(obj)

//  obj.age=20

//  console.log(obj)
// /*

// ----------------------------object.freeze------------


//   const Object = {
//     prop1: 40,
//     prop2: "Hello",
//   };
  
//   Object.freeze(Object);// it cannot changable

// console.log(Object)

// */

//-------------type casting------------

// let str = "42";
// let num = Number(str); // Using Number constructor for explicit type conversion
// console.log(num); // Output: 42

//----------------type conversion--------------

// let number = 10;
// let string = "5";

// let result = number + string; // JavaScript converts number to a string for concatenation
// console.log(result); // Output: "105"

//-----------------finding value in which index using ------indexOf----findIndex-----

// const myArray = [10, 20, 30, 40, 50];
// const elementToFind = 30;

// const index = myArray.indexOf(elementToFind);

// console.log(index)

// -------------typeOf-----------------

// let x = 42;
// let y = "Hello, World!";
// let z = true;
// let obj = { key: "value" };
// let arr = [1, 2, 3];

// console.log(typeof x);  // Output: "number"
// console.log(typeof y);  // Output: "string"
// console.log(typeof z);  // Output: "boolean"
// console.log(typeof obj); // Output: "object"
// console.log(typeof arr); // Output: "object"

//--------------------trim---------------------

// let stringWithWhitespace = "   Hello, World!   ";
// let trimmedString = stringWithWhitespace.trim();

// console.log(trimmedString);
// Output: "Hello, World!"

//------------------------------------ normal promise--------------------------------------------------
// const prom =new Promise((reject,resolve)=>{
// let a=798
// if(a===798){
//   console.log(567);
// }else{
//   console.log(0);
// }
// })

// prom.then((result)=>console.log('result',result),((reject)=>console.log(reject)))

//--------------------------------promise any,all and race----------------------------------------------------

// const pro1 = Promise.resolve(10)
// const pro2 = Promise.resolve(20)
// const pro3 = Promise.resolve(30)

// Promise.any([pro1,pro2,pro3]).then((result)=>console.log(result))


//------------------------------setTimeout in async and await---------------------
//  function late(){
//   return new Promise ((resolve)=>{
//   setTimeout(()=>{
//  resolve(1000)
//   },1000)
 
// })
//  }

//  async function call (){
//   const fir = await late()
// console.log(fir);
//  }
//  call()

//---------------------------promise method---------async and await----------try  and catch-------------------------------

// async function call(){
//   const prom = new Promise((resolve,reject)=>{
//     let a=10
//     if(a===10){
//       resolve(`100        0`)
//     }else{
//       resolve(0)
//     }
//   })

//   let fir =await prom
//   console.log(fir);
// }
// call()

//---------------------destructuring-------------------

// const person = {
//   name:'John', 
//   age:30,
//   place:'New York'
  
// };

// // Using destructuring to extract only the 'age'
// const {place} = person;

// console.log(place);  // Output: 30


//-------------------spread------------------

// let arr1=[10,20,30,40]
// let arr2=[1,2,3,4]
// let arr3=[...arr1,...arr2]
// arr3.push(50)
// console.log(arr3)

//--------------rest parameter-------------------

// const number =[1,2,3,4,5]

// cosnt [First,...rest]=number

// console.log(rest)

//----------------------normal promise -----------------------

// let p= new Promise ((resolve,reject)=>{
//   var a = 10
//   if(a===10){
//     resolve(a)
//   }else{
//     reject('failed')
//   }
// })

// p.then((reason)=>{
//   console.log(reason)
// }),((error)=>{
//   console.log(error)
// })
//----------------------------------------------------------------

// const prom = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve('Operation succeeded!');
//     } else {
//       reject('Operation failed!');
//     }
//   }, 2000); 
// });

// prom.then(
//   (result) => {
//     console.log('Fulfilled with result:', result);
//   },
//   (reason) => {
//     console.log('Rejected with reason:', reason);
//   }
// );

//----------------generator function------------

// function* countUpTo(limit) {
//   let count = 0;
//   while(count <= limit) {
//     yield count;
//     count++;
//   }
// }

// const iterator = countUpTo(5);

// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }
// console.log(iterator.next()); // Output: { value: 3, done: false }
// console.log(iterator.next()); // Output: { value: 4, done: false }
// console.log(iterator.next()); // Output: { value: 5, done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: true }

//----------------------generator new method------------------------
// function *a(){
//   console.log('stop 1');
//   yield 100;

//   console.log('stop 2')
//   yield 200

//   console.log('stop 3');
//   yield 300
// }
//  const iterate = a()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

//------------------------------factory function----------------------------------
// function person (name,age){
//   return{
//     name:name,
//     age:age,


//     sayhello(){
//       console.log(`${this.name}  ${this.age}`)
//     }
//   }
// }

// Person=person('nafi',43)
// Person.sayhello()
// // --------------------------constructor function--------------------------


// function person (name,age){

//   this.name=name,
//   this.age=age,

//   this.Person=function(){
//     return `${this.name} ${this.age}`
//   }
// }

// const per=new person('nikku',10)
// const per1=new person('nahal',8)

// console.log(per.Person())


//--------------------------------currying-----------------------------------

// function sum (a){
//   return function (b){
//     return function (c){
//       return a+b+c
//     }
//   }
// }
// console.log(sum(876)(987)(43));

//-------------------------------higher order function(Hof)--------------------
// function num (num1,num2,number){
//   return number(num1,num2)
// }

// function sum(a,b){
//   return a+b
// }
// function multiple(a,b){
//   return a*b
// }

// console.log(num(765,123,multiple));
// console.log(num(34,543, add))


//-----------------------weekset---------------------

// let weakSet = new WeakSet();

// let obj1 = { key: 'value1' }
// let obj2 = { key0: 'value2' }

// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1)); // Output: true

// weakSet.delete(obj1);

// console.log(weakSet.has(obj1)); // Output: false

//------------------immediate invoke function (IIFC)------------------------

// (function() {
//   var x = 10; m
//   console.log(x); // Output: 10
// })();

//----------------------------do-while---------------------------

// let count = 1;

// do {
//   console.log(count);
//   count++;
// } while (count <= 5);

//---------------------------while----------------------

// let count = 1;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// //-----------------------optional chaining--------------------

// const person = {
//     name: 'John',
//     address: {
//       city: 'New York'
//     }
//   };

//   const cityName = person.address.city;

//   console.log(cityName);   

//------------------------------fs read file and write into another file-----------------------------------------

//  const fs = require ('fs')

// fs.readFile('./sample.js','utf8',(err,data)=>{
//   if(err){
//     console.log(err)
//     return
//   }

// fs.writeFile('./sample1.js',data,'utf8',(err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log('data sended')

//   return
// })
// })



//----------------------------------------------------------------------------

//-------------------------------server creation------------------------------

// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res)=>{

// fs.readFile('./s.js',(err,data)=>{

// res.writeHead(200,{'content-type':'text/html'})
// res.write(data)
// res.end('hello')

// })

// }).listen(4000,()=>{
// console.log('server is running...')
// })

//-----------------api not working----------------

// const express =require ('express')
// const path = require('path')

// const app=express()

// app.set('view engine','ejs')
// app.set(express.static('views'))
// app.get('/',(req,res)=>{
// res.render('sample.js')
// })

// app.listen(3000,()=>{
//   console.log("running...")
// })

//------------------------async and await---------------------

// function getName(){
//      return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("nihal");
//     },3000)
// })
// }

// function getname(){
//     return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve("nihalkp");
//    },2000)
// })
// }

// Promise.all([getname(),getName()]).then((result)=>{
//     console.log(result)
//  })
// async function getUser(){
//     let Name =await  getname()
//     console.log(Name);
//     let name =await  getName()
//     console.log(name);
// }
// getUser()

//---------------------------------type coercoin--------------------

// console.log('300'==300)

//console.log(6+3+'hi')

//---------------------------exec and test------------------------

// const strg = /hello /;
// const result = strg.test("hello world");

// console.log(result);
// // Output: ["hello"]
//---------------------------strict mode--------------

// "use strict";

// function example() {
//   // This will throw an error in strict mode
//   lo = 10;
//   console.log(lo)
// }

// example();

//------------------------create file and add date -----------------------

// const fs = require('fs');

// const date = Date()

// fs.writeFile('example1.txt',date,'utf8',(err,)=>{

// if(err){
//   console.error('error',err)
// }else{

//   console.log('file successfully created  :',date)
// }

// })

//-----------------------promise  setTimeout  in large question-------------------------------

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//       console.log('Get user from the database.');
//       setTimeout(() => {
//           resolve({
//               userId: userId,
//               username: 'john'
//           });
//       }, 1000);
//   })
// }

// function getServices(user) {
//   return new Promise((resolve, reject) => {
//       console.log(`Get services of  ${user.username} from the API.`);
//       setTimeout(() => {
//           resolve(['Email', 'VPN', 'CDN']);
//       }, 2 * 1000);
//   });
// }

// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//       console.log(`Calculate service costs of ${services}.`);
//       setTimeout(() => {
//           resolve(services.length * 100);
//       }, 3 * 1000);
//   });
// }

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

//------------------------promise chaining--------------------

// var prom=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(10)
//   },5000)

// })


// prom.then((result)=>{
//  console.log(result)
//  return result *2
// }).then((result)=>{
// console.log(result)
// return result *4
// }).then((result)=>{
// console.log(result)
// return result *6
// }).then((result)=>{
// console.log(result)
// return result *8
// })

//-----------------------------server creation ---------------------------------

// const http = require('http');
// const fs = require('fs')

// http.createServer((req,res)=>{

//   fs.readFile('s.js',(err,data)=>{

//     res.writeHead(200,({'content-type':'text/js'}))
//     res.write(data)
//     res.end('Hello')
//   })
// }).listen(3003,()=>{
// console.log('server is running...')
// })

//----------------------------------export-----------------------------------

// function p(){
//   console.log(  'wegyfvsHMVJH')
// }
// function r(){
//   console.log('wEFQGGEGGDG')
// }

// module.exports={
//   p,
//   r
// }

//--------------------------------callback--------------------------------------

// function first (first,second,callback){
 
//  return  first *second
  
// }
// function second1(peer){
//   let number =10
//   console.log(peer-number)
// }

// second1(first (2,50))


//---------------------------------callback---------------------------------------

// function person(num1,num2){
//       console.log('hello guys') 
      
//       console.log(num1+num2)
//       return num1*num2
    
//   }
  
//   function call(p){
//      console.log(p)
//   }
  
//   call(person(23,34))



//--------------------------------this  keywordds--------------call,apply and bind-------------------

// const obj={
//   a:10,
//   b:20,
//   c:function (a,b){
//     console.log(a,b,this)
//   }
// }

// // const obj1={
// //   d:30,
// //   e:40
// // }

// var n = obj.c.bind(obj)
// n(1,2)

//-------------------------------object keys or values-----------------------------

// const obj={

//   name:'nihal',
//   age:20,
//   place:'vadakara'
// }

// const n=Object.values(obj)
// console.log(n)



//-------------------------------template literals-----------------------------------
// const multilineString = `
//   This is a
//   multiline
//   string.
// `;

// console.log(multilineString)
// 
// Outputs:
//   This is a
//   multiline
//   string.
 
//--------------------------------default parameter---------------------------------

// function name ( name='nihal'){
//   console.log(name)
// }
// name()


//-------------------------------------weakset--------------------------------------


// const weakSet=new WeakSet()

// const obj1={}
// const obj2={}

// weakSet.add(obj1)
// weakSet.add(obj2)

// console.log(weakSet.has(obj2))

//------------------------------------ weakMap ---------------------------------------


// const weakMap = new WeakMap();

// const obj1={}
// const obj2={}

// weakMap.set(obj1,'obj1')
// weakMap.set(obj2,'obj2')

// console.log(weakMap.get(obj1,obj2))


//------------------------------------middleware------------------------------------------

// const express=require('express')
// const app=express()



//   app.get('./home',(req,res,next)=>{
//   const error=new Error('error simulated')
//   next()
// })

// const middleware=(err,req,res,next)=>{

//   console.error(err.stack)
       
//   res.status(500),json('error occured')   

// }

// app.use(middleware)

//    app.listen(7002,()=>{
  //   console.log('server is running')
  // })

//----------------------------------------------

// function name(){
// console.log('nihal')
// //callback
// }

// function greet(){
//     name()
// }

// greet(name)



// //--------------------------------getting number from user and giving it odd or even---------------------------------------

// const express=require('express')
// const app = express()

// app.get('/val/num',(req,res)=>{
//   const num=req.params.num 

//    if(isNaN(num)){
//     res.status(400).json({error:'failed'})
//   }else{
//     const result= num%2===0?'even':'odd';
//     res.json({num,result})

//   }
// }).listen(3000,()=>{
//   console.log('server is running')
// })

//-------------------------------------------  route  --------------------------------------------------

// const express=require('express')
// const app=express()


// // app.use((req,res,next)=>{
// //   console.error(error)
// //   next()
// // })


// // app.use((req,res,next)=>{
// //   console.error(error)
// //   next()
// // })
// app.get('/',(req,res)=>{
//   res.send('Hello every one')
//  // console.log('hi everyone')
// })

// app.get('/homes',(req,res)=>{
//   res.send('Hello every two')
//  // console.log('hi everyone')
// })

// app.listen(7002,()=>{
//   console.log('server is running')
// })

//---------------------------------------------------------------------------



// function hello (name,nam){
//   console.log(`${this.greet} am ${name} and my job is ${this.job} ${nam}`)
// }


// const   greeting={
//     greet:'Good morning',
//     job:'mern developer'
// }
// hello.apply(greeting,['nihal','good night'])



//-----------------class,constructor-----------------------------------------------


// class MyClass {
//   // Constructor method
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Method
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const myInstance = new MyClass('John', 25);

// myInstance.greet();

//----------------------------------  call ,apply and bind --------------------

//----------------call

// function hello(name){
//   console.log(`Hello i am ${name} and  he is ${this.name}`)
// }

// const person = {name:'Nihal'}
// hello.call(person,'shihad')

//----------------apply

// function hello(name,name1){
//   console.log(` Hello i am ${name} and they are ${name1} and ${this.name}`)
// }

// const person ={name:'Nihal'}

// hello.apply(person,['shihad','basith'])

//--------------bind

// function hello (name){
//   console.log(`hello i am ${this.name} and he is ${name}`);
// }

// const person={name:'nihal'}
// const  Hello =hello.bind(person);
// Hello('shihad');

// for(let i=1;i<=10;i++){
//   if(i%2==0){
    
//      console.log(i);
//   }
 
// }



// let a = 10;
// let b = 34;
// let c = 90;
// let d=110;

// const { Script } = require("vm");

// if(a<b<c<d){
//    console.log(d);
// }else{
// console.log(a);
// }
//======================================
// const obj = { a: 1, b: 2, c: 3 }; 
// for(let x in obj){
//     console.log(x+':'+obj[x]);
// }

//===================================
// const obj = { a: 1, b: 2, c: 3 };
//  const obj1=Object.values(obj)
//  console.log(obj1);

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(key + ': ' + value);
// });


//========================================================
// const obj ={a:1,b:2,c:3}

// for(let key in obj){
//     console.log(key+':'+obj[key]);
// }

//==========================================avg=== 

//const size=[4,7,2,47,8,2,3,4,2,2,]
// //console.log(...size);

// function calculateAverage(...array){
//   //  console.log('hi');
//    const sum=array.reduce((acc,num)=>acc+num) 
//       const avg=sum/array.length
//       console.log(avg);

// }
// calculateAverage(size)

//=========================================reverse string

// function reverseString (string){

// const split =string.split('')
// const reverse=split.reverse()
// const join=reverse.join('')
// console.log(join);

// }

// const string='hello'
// reverseString(string)

//========================================finding max number

//  const size=[4,7,2,47,8,2,3,4,2,2,]

//  function findmax(size){

// const newsize=size.sort((a,b)=>b-a)
// console.log(newsize);

//  const max=newsize[0]
//  console.log(max);

//  }
// findmax(size)

//==========================================first letter capital

// const string = 'HELLO';

// function titleCase(str) {
    
//         return str.toLowerCase() + str.slice(1)
 
// }

// const result = titleCase(string);
// console.log(result); 

//============================================================
// const array=[1,2,3,4,51,2,3,4,6,7,8,9]

//     const newarray=[]

//     for(let i=0;i<array.length;i++){
//           let one=true
//       for(let j=0;j<array.length;j++){
//         if(i!==j&&array[i]==array[j]){
//          one=false
//         }    
//     }
//     if(one){
//         newarray.push(array[i])        
//     }
//     } console.log(newarray);


//==========================================

// function primenumber(limit){
//     let prime=[];

//     for(let i=2;i<=limit;i++){
//         let one=true
//         for(let j=2;j<=Math.sqrt(i);j++){
//            if(i%j==0){
//             one=false
//             break;
//            }
//         }
//         if(one){
//             prime.push(i)
//         }
//     }
//     return prime
// }
// const limit=12;
// const ones=primenumber(limit)
// console.log(ones);

//==================================
// for(let i in obj){
//     let c=i
//    console.log(c+':'+obj[c]);
// }

//==================================switch===================

// const cars='bugatti'


// switch (cars){
//     case 'swift':
//     console.log('is swift');
//      break;
//      case'bugatti':
//      console.log('is bugatti');
//      break;
//      default:
//      console.log('nothing');
// }
//====================================================================
// const a = [1, 2, 324, 456, 87]

// const c = a.join('') // Join the array back into a string
//             .split('') // Split the string into individual characters
//             .map(Number); // Convert each character back to a number

// console.log(c);
// const x=232
//================================
// const obj={
//     name:'nihal',
//     age:19,
//     place:'calicut'
// }
// if(obj.length==0){
//     console.log(0);
// }else{
//     console.log(1);
// }
//======================================
//  const array=[1,2,3,4,5,6,7,8,9]


// const reduce = array.filter((num) =>num>7)
// console.log(reduce);

// const largestNumber = array.reduce((max, current) =>{
//     max+current
    
//     console.log(max,current)
// });
// console.log(largestNumber); // Output: 9
//=====================
//  const arr = [
//   { name: "John", age: 30 },
//   { name: "alex", age: 20 }
//  ]

//  const filteredArr = arr.filter(obj => obj.age > 20)

//  console.log(filteredArr)
//===============================

    // if(arr.length==0){
    //     console.log(12);
    // }else{
    //     console.log(1);
    // }




// const arr=[1,1,2,3,2]

// const filter= arr.filter((elem,index,arr)=>{
//  return arr.indexOf(elem) !== index
// })
// console.log(filter);


// const ar =[1,2]
// console.log(ar[0]);
// ar[10]=10
// ar.length = 10
// console.log(ar);

// const promise= Promise.resolve(10)
// const promise2=promise.then((result)=>{
//   console.log(result)
//    return result*2 
//   })

//   console.log(promise2);
//   console.log(promise);

//   promise2.then((result)=>{
//     console.log(result);
//   })



// const sentences = ["please wait", "continue to fight", "continue to win"]
// let count=0;
// let max=0;
// for(let i=0;i<sentences.length;i++){
//   const split=sentences[i].split(" ")
  
//   count=split.length;
//   max=count
// console.log(count);
// }
const croppers = [];

function handleFileSelect(input, preview) {
    const file = input.files[0];
    preview.style.display = "block";
    preview.src = URL.createObjectURL(file);

    // If there's an existing Cropper instance, destroy it
    if (croppers.length > 0) {
        croppers[0].destroy(); // Destroy the first Cropper instance
        croppers.pop(); // Remove the destroyed Cropper instance from the array
    }

    // Initialize a new Cropper instance for the new image element
    const cropper = new Cropper(preview, {
        aspectRatio: 0,
    });
    croppers.push(cropper); 
}
<% if (product.productId) { %>
    <div class="d-flex justify-content-evenly">
    <div class="styled-text mt-0"> &bull;<%= product.productId.productName %></div>
    <div class="styled-text mt-0"> Price:<%= product.productId.productPrice %></div>

        </div>
       
<% } else { %>
    <span>Error: Product ID missing</span>
<% } %>
<% if (index < orders.products.length - 1) { %>
    <br>
<% } %>

if (response.ok) {
                const responseData = await response.json();
                if (responseData.ok) {
                    alert(responseData.message);
                    window.location.href = "/address";
                } else {
                    document.getElementById('message').textContent = responseData.message;
                window.location.href = "/address";                 }
            } else {
                const errorData = await response.json();
            document.getElementById('message').textContent = errorData.message || 'An error occurred.';
            }
        }

        practical
        <% } else if (searchproduct.length > 0) { %> <!-- If product is empty but userData is not -->
            <%for (let i = 0; i < searchproduct.length; i++) {  %>
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item womenc d-flex" style="max-width: 22%;">
                    <!-- Block2 -->
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <% if (searchproduct[i].productImage && Array.isArray(product[i].productImage)) { %>
                                <img src="<%= product[i].productImage[0] %>" alt="productImage" width="20px" height="180px" productId="<%= searchproduct[i]._id %>">
                            <% } %>
                            <a href="/productDetail/<%= searchproduct[i]._id %>" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                Quick View
                            </a>
                        </div>
    
                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l">
                                <a href="/productDetail/<%= searchproduct[i]._id %>" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    <%= searchproduct[i].productName %>
                                </a>
    
                                <% searchproduct[i].discount.forEach((discount) => { %>
                                    <div class="d-flex">
                                        <span class="mtext-106 cl2" style="margin-top: 2%;">
                                            <h6>&#8377;<%= searchproduct[i].productPrice - discount.discountPrice %></h6>
                                        </span>
                                        <del><span class="mtext-104" style="margin-top: 0%; margin-left: 10%;" style="margin: 0%;">&#8377;<%= product[i].productPrice %></span></del>
                                        <span class="mtext-104 cl2" style="margin-top: 0%; padding-left: 5%;">
                                            <%= ((discount.discountPrice / searchproduct[i].productPrice) * 100).toFixed(2) %>%off
                                        </span>
                                    </div>
                                <% }) %>
    
                                <p>
                                    <div>
                                        <span class="mtext-102" style="margin-left: 10px; margin-top: 4px;">Only <%= searchproduct[i].productQuantity %> Stocks left</span>
                                    </div>
                                </p>
                            </div>
    
                            <div class="block2-txt-child2 flex-r p-t-3">
                                <div>
                                    <a href="#" class="btn-addwish-b2  pos-relative js-addwish-b2" productId="<%= searchproduct[i]._id %>">
                                        <img class="icon-heart1  trans-04" src="/asset/vendor/images/icons/icon-heart-01.png" alt="ICON">
                                        <img class="icon-heart2  trans-04 ab-t-l" src="/asset/vendor/images/icons/icon-heart-02.png" alt="ICON">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>				<% } %>
        <% } else { %> 