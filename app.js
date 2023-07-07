// in-line comment
/*
multi line comment
*/

/*undefined, null, boolean, string, symbol, number and object */

// var myName="Sai"; // can be used throughout your whole program

// myName=8;

// let ourName="Varun";// only be used within the scope

// const pi=3.14; // can never change -error if try to change

// var a;
// var b=2;
// console.log(a) //undefined

// a=7;
// b=a;

// console.log(a)

// var a=5;
// var b=10;
// var c="I am a";

// a=a+1;
// b=b+5
// c=c+"String!"

// case sensitive will get reference error

// var sum=10+10;
// console.log(sum)

// increment and decrement 
// var myVar=87;
// myVar++;
// myVar--;

// var myDecimal=9.8;

// var prod=2.0*2.5;
// console.log(prod)

// var remainder;
// remainder = 11 % 3;

// var a=10;
// a+=5; a-=5; a*=5; a/=5;

// var firstname="Sai";
// var lastname="T";

// var mystr="hi \"Sai\"!"
// console.log(mystr)

// var str=`'Hey "Sai"!'`
// console.log(str)

/*
\' - single quote
\" - double quote
\\ - backslash
\n - newline
\r - carriage return
\t - tab
\b - backspace
\f - form feed
*/

// var ouStr="I come first "+"I come second";//or use +=
// console.log(ouStr)

// var firstname="Sai"
// firstnamelen=0;
// firstnamelen=firstname.length;

// console.log(firstnamelen)


// var fi="";
// var fname="Sai";
// fi = fname[0]; // fname[fname.length - 1]
// console.log(fi)

// //wordBlanks
// function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
//     var result="";
//     result+="The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb+".";
//     return result;
// }

// console.log(wordBlanks("dog","big","ran","quickly"));
// console.log(wordBlanks("bike","slow","flew","slowly"));

// var ourArray=["John",23];

// var ourArray=[["Sai",17],["John",23]];
// var ourArray=[50,60,70]
// console.log(ourArray[0])//ourArray[0][0]

// var ourArray=[18,64,99];
// ourArray[0]=45;
// console.log(ourArray)

// var ourArray=[50,60,70]
// ourArray.push(80)
// console.log(ourArray)

// var ourArray=[50,60,70]
// var newe=ourArray.pop()
// console.log(newe)

// var ourArray=[50,60,70]
// var n=ourArray.shift() //same as pop but pops the first element
// console.log(n)

// var ourArray=[50,60,70]
// ourArray.unshift(40)// like push but adds element to first place
// console.log(ourArray)


// function eg(){
//     console.log("Function");
// }

// eg();


// var myGlobal=10;

// function fun1(){
//     // oopsGlobal=5;// if we use var here it would be scoped to the function
//     // else it will act like a global variable
//     var oppsGlobal=5;
// }

// function fun2(){
//     var output="";
//     if (typeof myGlobal !="undefined"){
//         output+="myGlobal: "+ myGlobal;
//     }
//     if (typeof oopsGlobal !="undefined"){
//         output+=" oopsGlobal: "+oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();

// function fun(){
//     var myvar=5;
//     console.log(myvar)
// }

// fun();
// console.log(myvar);// referrence error

// if local and global variable have same name local variable takes preceedence
// var s="tshirt";
// function fun(){
//     var s="shirt"
//     return s;
// }
// console.log(fun());
// console.log(s);

// var n=0;
// function addfive(){
//     n+=5;
// }

// console.log(addfive())// undefined if no return statement

// var n=0;
// function fun(num){
//     return(num*6);
// }
// n=fun(8)
// console.log(n)

//queue
// function nextInLine(arr,item){
//     arr.push(item)
//     return arr.shift();
// }

// var testArr=[1,2,3,4,5];

// console.log("Before: "+JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
// console.log("After: "+ JSON.stringify(testArr));//modifies in place

// function fun(bl){
//     if (bl){
//         return "True"
//     }
//     else{
//         return "False"
//     }
// }
// console.log(fun(false))

// function fun(n){
//     if (n==12){//=== - strict equality (== -does type conversion to check if both are equal) n===12, n=="12"
//         return "True"
//     }
//     else{
//         return "False"
//     }
// }
// console.log(fun(12))

// function fun(n){
//     if (n!=12){
//         return "True"
//     }
//     else{
//         return "False"
//     }
// }
// console.log(fun(12))

// function fun(n){
//     if (n!==17){ //not going to convert types
//         return "True"
//     }
//     else{
//         return "False"
//     }
// }
// console.log(fun(12))

// function fun(n){
//     if (n<=50){
//         if (n>=25) {
//             return "Yes"
//     }
//     }
//     else{
//     return "No"
//     }
// }
// console.log(fun(12))//undefined

// function fun(n){
//     if (n<=50){
//         if (n>=25) {
//             return "Yes"
//        }
//     }
//     return "No"
// }
// console.log(fun(12))//No

// function fun(n){
//     if (n<=50 && n>=25){
//             return "Yes"
//     }
//     else{
//     return "No"
//     }
// }
// console.log(fun(26))

// function fun(n){
//     if (n<=50 || n>=25){
//             return "Yes"
//     }
//     else{
//     return "No"
//     }
// }
// console.log(fun(4))

// function fun(n){
//     if (n>10){
//             return ">10"
//     }
//     else if (val<5){
//         return "<5"
//     }
//     else{
//     return "5<n<10"
//     }
// }
// console.log(fun(26))

//golf code -refer video

// function fun(n){
//     var answer="";
//     switch(n){
//         case 1:
//             answer="alpha";
//             break;
//         case 2:
//             answer="beta";
//             break;
//         case 3:
//             answer="gamma";
//             break;
//         case 4:
//             answer="delta";
//             break;
//         default:
//             answer="none"
//     }
//     return answer
// }

// console.log(fun(7))

// function fun(n){
//     var answer="";
//     switch(n){
//         case 1:
//         case 2:
//             answer="low";
//             break;
//         case 3:
//         case 4:
//             answer="medium";
//             break;
//         default:
//             answer="high"
//     }
//     return answer
// }

// console.log(fun(4))

//objects-dictionary property:value

// var testobj={
//     "hat":"ballcap",
//     "shirt":"jersey",
//     "shoes":"cleats"
// };

// var val1=testobj.hat;
// var val2=testobj["shirt"];
// testobj.hat="cap";
// testobj.sock="nike";
// testobj["belt"]="leather";

// delete testobj.belt;

// function fun(p){
//     if (testobj.hasOwnProperty(p)){
//         return testobj[p]
//     }
//     else{
//         return "No"
//     }
// }

// console.log(fun("sock"))

//record collection video

// var myArray=[]
// var i=0;
// while (i<5){
//     myArray.push(i)
//     i++;
// }
// console.log(myArray)


// var myArray=[]
// for (var i=0;i<5;i++){
//     myArray.push(i)
// }
// console.log(myArray)

// var arr=[9,10,11,12];
// var n=0;
// for (var i=0;i<arr.length;i++){
//     n+=arr[i]
// }
// console.log(n)

// function mult(arr){
//     var product=1;
//     for(var i=0;i<arr.length;i++){
//         for (var j=0;j<arr[i].length;j++){
//             product*=arr[i][j];
//         }
//     }
//     return product;
// }

// var p=mult([[1,2],[3,4],[5,6,7]])
// console.log(p)

// var arr=[];
// var i=10;

// do {
//     arr.push(i);
//     i++;
// }while(i<5)

// console.log(i,arr)

// Math.random,Math.floor() and others like random range

// function fun(str){
    // return parseInt(str)
//     return parseInt(str,2)
// }
// console.log(fun('56'))
// console.log(fun('10011'))

// function fun(a,b){
//     return a===b?true:false
// }

// console.log(fun(1,2))

// function fun(a){
//     return a>0 ? "positive" : a<0 ? "negative":"zero"
// }

// console.log(fun(-7))

//let does not allow duplicate names
// "use strict"; -catches errors 

//var is declared globally, let is restircted to scope where it is declared at

// function checkScope(){
//     "use strict";
//     let i="function scope";
//     if (true){
//         let i="block scope";
//         console.log(i);
//     }
//     console.log(i);
//     return i;
// }
// checkScope();

// function fun(str){
//     "use strict";
//     const s=str+" is cool!";
//     // s=s+"!" //read only-const
//     console.log(s)
// }
// fun("NBA");

// const s=[1,2,3]

// function fun(){
//     "use strict";
//     s[0]=0;
//     s[1]=3;
//     s[2]=6;
// }
// fun()
// console.log(s)

// function fun(){
//     "use strict";
//     const math_const={
//         pi:3.14
//     };
//     Object.freeze(math_const);
//     try{
//         math_const.pi=99;
//     }
//     catch(ex){
//         console.log(ex)
//     }
//     return math_const.pi;
// }

// const PI=fun();
// console.log(PI);

// var magic =function(){
//     return new Date();
// }//anonymous function


// var magic =() => new Date();//arrow function

// const magic =() => new Date();

// var myconcat= (a1,a2) =>a1.concat(a2);
// console.log(myconcat([1,2],[3,4,5]));

// const real=[4,5.6,-9.8,3.14,42,6,8.34,-2];
// const sq=(arr)=>{
//     const si=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);
//     return si;
// }

// const sqi=sq(real);
// console.log(sqi);

//default parameters
// const increment=(function(){
//     return function increment(number,value=1){
//         return number + value;
//     };
// })();
// console.log(increment(5,2));
// console.log(increment(5));

//rest operator
// const sum=(function(){
//     return function sum(...args){
//         return args.reduce((a,b)=>a+b,0);
//     };
// })();

// console.log(sum(1,2,3,4))

//spread
// const arr1=["jan","feb","mar","apr"];
// let arr2;
// (function(){
//     // arr2=arr1;
//     arr2=[...arr1];//arr2 will equal all of the contents of arr1
//     arr1[0]='potato'
// })();

// console.log(arr2,arr1)

//destructuring
// voxel ={x:3.6,y:7.4,z:6.54};
// const {x:a,y:b,z:c}=voxel;

// const avgt={
//     today:77.5,
//     tomorrow:79
// }

// function gettemp(avg){
//     "use strict";
//     const{tomorrow:avtt}=avg;
//     return avtt
// }

// console.log(gettemp(avgt))

// const avgt={
//     today:{min:72,max:83},
//     tomorrow:{min:73.3,max:84.6}
// }

// function gettemp(avg){
//     "use strict";
//     const{tomorrow:{max:avtt}}=avg;
//     return avtt
// }

// console.log(gettemp(avgt))

// const[z,x,,y]=[1,2,3,4,5,6]
// console.log(z,x,y)

// let a=8,b=6;
// (()=>{
//     "use strict";
//     [a,b]=[b,a]
// })();
// console.log(a,b)

// const source=[1,2,3,4,5,6,7,8,9]

// function re(l){
//     const [,,...arr]=l;
//     return arr;
// }

// const arr=re(source)

// console.log(arr,source)

// const stats={
//     max:56.78,
//     sd:4.34,
//     median:34.54,
//     mode:23.87,
//     min:-0.75,
//     avg:35.85
// }
// const half=(function(){
//     return function half({max,min}){
//         return(max+min)/2.0;
//     };
// })();

// console.log(stats,half(stats))

//template literal
// const person={
//     name:"sai",
//     age:21
// };

// const greeting=`Hello, my name is ${person.name}!
// I am ${person.age} years old.`
// console.log(greeting);

// const create=(name,age,gender)=>({name,age,gender});
// console.log(create("sai",21,"M"))

// const bicycle={
//     gear:2,
//     setGear:function(newGear){
//         "use strict";
//         this.gear=newGear;
//     }
// };
// bicycle.setGear(3)
// console.log(bicycle.gear)

//other way of having function inside an object
// const bicycle={
//     gear:2,
//     setGear(newGear){
//         "use strict";
//         this.gear=newGear;
//     }
// };
// bicycle.setGear(3)
// console.log(bicycle.gear)

//object creation
// var Space=function(target){
//     this.target=target;
// }

// var zeus= new Space('Jupiter');
// console.log(zeus.target)

// class Space{
//     constructor(target){
//     this.target=target;
// }
// }

// var zeus= new Space('Jupiter');
// console.log(zeus.target)

// function makeclass(){
//     class veg{
//         constructor(name){
//             this.name=name;
//         }
//     };
//     return veg;
// }

// const veg = makeclass();
// const carrot= new veg("carrot");
// console.log(carrot.name)

//getter and setter -(getter)meant to get the value of an objects private variable to the user without letting the user directly access the variable

// class Book{
//     constructor(author){
//         this._author=author;
//     }
//     get writer(){
//         return this._author;
//     }
//     set writer(update){
//         this._author=update;
//     }
// }

//_temp -private variable
// function makeclass(){
// class Thermostat{
//     constructor(temp){
//         this._temp=5/9*(temp-32);
//     }
//     get temperature(){
//         return this._temp;
//     }
//     set temperature(update){
//         this._temp=update;
//     }
// }
// return Thermostat;
// }

// const Thermostat= makeclass();
// const thermos = new Thermostat(76);
// let temp= thermos.temperature;
// thermos.temperature=26;
// temp= thermos.temperature;
// console.log(temp)

// import { capitalizeString } from "./strfunc";
// const cap =capitalizeString("hello!")
// console.log(cap)

//importing from strfunc.js
// import * as capitalizeStrings from "./strfunc";
// import sub from "./strfunc";

//generation of randomcard pulling function
// let arrayeg=["card1","card2","card3","card4","card5"]
// let randomcardpull=(arr,reqlen)=>{
//     let copyarr=arr.copyWithin()
//     let randcards=[];
//     for (let i=0;i<reqlen;i++){
//        randcards.push(...arr.splice(Math.floor(Math.random() * arr.length),1))
//     }
//     return randcards
// };
// console.log(randomcardpull(arrayeg,2))
