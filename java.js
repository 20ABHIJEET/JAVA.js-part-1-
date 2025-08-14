// INTRO TO JAVA SCRIPT
let intro = "INTRO TO JAVA SCRIPT";
console.log(intro);

let a = 88; 
let b = 44; 
console.log("answer is",a + b);
console.log("answer is", a - b);
console.log("answer is", a * b);
console.log("answer is", a / b);


let age = 18;
const name = "ahijit"
console.log("my name is",name );console.log("my age is", age)


// DATA TYPE IN JAVA SCRIPT
let data = "DATA TYPE IN JAVA SCRIPT";
console.log(data);
//Number
let c = 23;

console.log('the value of c is',c)
console.log('the tye of c is',typeof(c))

//String
let d = 'Hellow world'

console.log("the value of d is", d);
console.log("the tye of d is", typeof d);

//Boolen
let e = Boolean(23)

console.log("the value of e is", e);
console.log("the tye of e is", typeof e);

//Undefined
let f = undefined;
f = Number(f)
console.log("the value of f is", f);
console.log("the tye of f is", typeof f);

//Object
let g = null;

console.log("the value of g is", g);
console.log("the tye of g is", typeof g);

//Number to string to boolen
let h = "23"
h = Boolean(h);
console.log("the value of h is", h);
console.log("the tye of h is", typeof h);

//JAVA SCRIPT OPRATION
let opration = "JAVA SCRIPT OPRATION";
console.log(opration );
let avr = "Let assume that i = 81 and j = 19"
console.log(avr)
//ADDITION
let i = 81;
let j = 19; 

let result = i + j;
console.log("i + j",result) 

//SUBTRACTION
 i = 81;
 j = 19;

result = i - j;
console.log("i - j", result); 

//MULTIPLICTION
 i = 81;
 j = 19;

 result = i * j;
 console.log("i * j", result);

//DEVISION
i = 81;
j = 19;

result = i / j;
console.log("i / j", result);

 //REMAINDER
 i = 81;
 j = 19;

 result = i % j;
 console.log("i % j", result);

 //INCRIMENT BY ONE
i = 81;
i++;
console.log("++",i)

//DECRIMENT BY ONE
i = 81;
i--;
console.log("--", i);

//EXPONENT POWER
 i = 81;
 j = 19;

 res = i ** j;
  console.log("i ** j", res); 

  //ASSIGNMENT OPRATORS
  let ASSIGNMENT = "ASSIGNMENT OPRATORS (i=81)";
  console.log(ASSIGNMENT);

//+=
   i += 4
   console.log("i += 4",i)
//-=
i -= 4;
console.log("i -= 4", i);
//*=
i *= 4;
console.log("i *= 4", i);
// /=
i /= 4
   console.log("i /= 4",i)
   // %=
   i = 4;
   console.log("i %= 4", i);
   // **=
   i **= 4;
   console.log("i **= 4", i);

   //COMPARISON OPRATION
   let COMPARISON = "COMPARISON OPRATION (i=81,j=19)";
   console.log(COMPARISON);
// == (VALUE MUST SAME)
   i = 81;
   j = "19"
let aaa = i == j
console.log("i = 81; j = '19'(i == j)", aaa);

// === (TYPE AND VALUE MUST BE SAME)
   i = 81;
   j = "19"
let bbb = i === j
console.log("i = 81; j = '19'(i === j)", bbb);

// !== (CHECK THE TYPE AND VALUE IS NOT TRUE)
   i = 81;
   j = "19"
let ccc = i !== j
console.log("i = 81; j = '19'(i !== j)", ccc);

// <
i = 81;
j = "19";
let ddd = i < j;
console.log("i = 81; j = '19'(i < j)", ddd);

// >
i = 81;
j = "19";
let eee = i > j;
console.log("i = 81; j = '19'(i > j)", eee);

// <=
i = 81;
j = "19";
let fff = i <= j;
console.log("i = 81; j = '19'(i <= j)", fff);

// >=
i = 81;
j = "19";
let ggg = i <= j;
console.log("i = 81; j = '19'(i <= j)", ggg);

//LOGICAL OPRATION
let LOGICAL = "LOGICAL OPRATION (k=true,l=false)";
console.log(LOGICAL);

//AND GATE (&&)
let k = 'true'
let l = 'false'

let ans = k && l
console.log("k && l", ans);

// OR GATE
k = "true";
l = "false";

ans = k || l;
console.log("k || l", ans);

// NOT GATE
l = "false";

ans = !l;
console.log("!l", ans);
