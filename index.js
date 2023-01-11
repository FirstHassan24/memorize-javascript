let name ='Akilou';
let age = 22;
// an object is when a single variable haves multiple variables 
//within it.
let person={
    name:'Akilou',
    age:22,
    live:'home'
};
//you use the dot. notation to change the string of any variable.
person.name='wakil';
// template literall allows you to join a variable with a string
// template literal looks like this ${}
let laste=`issifou`
let aki=`wakil${laste}` 
alert(aki);
// you use an array to give multiple strings to a single variables
selectedcolors=['bkue','red','black'];
//you use the index to add remove  are change strings in an array 
selectedcolors[0]='green'
console.log(selectedcolors)
function greet(name,lastname){
    console.log('Hello ' + name+' '+lastname);
}
greet('Akilou','Issifou');
let result=5>2;
console.log(result);
//a function is a set of statements that performs a task  or calculate
//a value
function guy(name){
console.log('hope i get the jobe '+name)
}
guy('and i get a call back from him tmrw');
let bro='making 20$ an hour';
//the if command lets you output something if the condition is true
if(guy<bro){
    console.log('i will get the jobe tommorrow');
}
//the else command let you output something when the if commands 
//condition is false
//else console.log('they will allow me to postpone it');
//let sign=prompt('may i get the call back tmrw');
//console.log(sign)
let a='abcdefg'
let tex='Apple, banana, kiwi'
let part=tex.slice(7,13);
console.log(part);
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
let string='i hope i get a call tmrw and for me to get an np5 melusin';
//you use the length command to find how many characters are in a
//string
console.log(string.length);
//the slice command extracts a part of a string and outputs the
//extracted part.
console.log(string.slice(20,57))
//you use the indexof command to find the possition of the first
//accurance of a string
//console.log(string.indexOf('m'))
//console.log(string.indexOf('a',20))
//let day='monday'
//switch(day){
    //case 'monday' :console.log('1 am');
    //case 'tuesday': console.log('2am');break
  //  case 'wendseday': console.log('3am');
//}
//this is whats called contanating strings it allows you to join
//two strings togather this sign ${} means you wanna link two strings togather by puting the variable in it
//let hi=`hope weathering wave is good`
//let app =`hi i ${hi}`;
//console.log(app);
//let w=`abcdefgjihklmnopqrstuvwxyz`
//let ww=w.length;
//let w=`hi,by,shy`
//let ww=w.slice(3,8)
//console.log(ww)
//let nulgath = ` i hope that wathering waves haves i good endgame`
//console.log(nulgath.indexOf(`a`));

//it checks if the word is one of your strings are not that includes letters and numbers
//let w=`yollo hollo pollo`
//console.log(w.includes(`petto`));
//negative indice
//let w=`how are you today laurance`
//console.log(w.slice(-8,-1));
let wave=`weathering waveis good`
for(let char of wave)
console.log(char)
//let texte =`wathering wave is bad game`
//let newtext=texte.replace(`bad`,`good`);
//console.log(newtext);
//the replaceAll methodes replaces all no with yes you can do it with
//any string
//let texte=`i will get np5 melusin no no`
//let newtext= texte.replaceAll('no',`yes`)
//console.log(newtext);
//let texts='hello'+ ` world!`;
//console.log(texts);
//the charat statement make it so you can recall the string that a 
//index is attached to
//let texte=`hello world`;
//let char=texte.charAt(0);
//console.log(char)
//let texts=`hello`
//let slice=texts.slice(3);
//console.log(slice);
//|| means or @@ means and
//if(1||0){
//    console.log(`truthy`)
//}
let agee=17;
let yes=`i did it`
if(!(agee>14 && agee<19)){
    console.log(yes);
}

// in order for you to make this code to work check grammer and make
//sure you dont use the let function in the if statement are else the
//variable wont work and also keep the else if with the if statement
//its reffering to. make sure to read all the small lines vsc code 
//is reffering to in your code.
// you can do it good luck slow and steady its okay to be stuck and 
//go back
let s=prompt('what will you get?');
if(s===`social`){
    var k=prompt(`when?`);
}
else if(s===null || s===``){
    alert(`try again`)
}
else(alert(`try harder`))
if(k===`now`){
    alert(`you will get it on the same day`);
}
//dont forget alert
else if(k===null || k===``){
    alert(alert`keep going`)
}
else(alert`why not`)
//keep going
let sume= (a,b) => console.log(a+b)
sume(`3`,`4`)
let gura=prompt(`how old are you`,20)
alert(`i am ${gura}years old`)
let n=prompt(`how old are you?`)
if(n===`22`){
    alert(`congratulation you are right!!!`)
}
let conf = confirm("You must be at least 18 years old to view this content.");
let nam = prompt("What's your name?");
let ag = prompt("What's your age?");

//if you type your answere in prompt it can be recalled using
//${prompt variable in here}
if (ag>=18) {
alert(`Welcome ${nam}!`);
}
else {
alert(`Sorry ${nam}, you must be at least 18 years old to view this content.`);
}
// set the current day of the week to a variable with 0 being sunday and 6 being saterday
const day=new Date().getDay();
switch(day) {
    case 0:console.log(`its sunday, time to relaxe`);
    break;
    case 1:console.log(`happy monday!`);
    break;
    case 2:console.log(`its tuesday you got this.`)
    break;
    case 3:console.log(`hump day already!`)
    break;
    case 4:console.log(`just one more day til the weekend!`)
    break;
    case 5:console.log(`happy friday!`)
    break;
    case 6:console.log(`have a wonderful saterday!`)
    default:
        (`something went horribly wrong...`)
}
const grade=87;
switch (true) {
  //if score is 90 or greater
  case grade>=90:
  console.log(`A`);
  break;
//if score is 80 or greater
case grade>=80:
console.log(`B`)
break;
// if score is 70 or greater
case grade>=70:
console.log(`C`);
break;
//if score is 60 or greater
case grade>= 60:
console.log(`D`);
break;
//Anything 59 or below is failing
default:
console.log(`F`);
}
//the new Date().getMonth() methode will output a number from
//1-11 with 0 being january and 11 being december
const month=new Date().getMonth();
switch (month) {
    //january,feburary,march
    case 0:
    case 1:
    case 2:
        console.log(`winter`)
        break;
        //aprill,may,june
        case 3:
        case 4:
        case 5:
            console.log(`spring`)
            break;
        //july, August,September
        case 6:
        case 7:
        case 8:
     console.log(`summer`);
     break
    //october, november,Decmeber
    case 9:
    case 10:
    case 11:
    console.log(`autumn`)
    break;
    default:
     console.log(`something whent wrong`);    
}
// in javascript the while statement is a loop as long as speceified
//statements is true
//while(condition){
    //execute code as long as condition is true
//}
//set a population limit for the aquarium
let poplimit=10;
let fis=0;
//initiate while loop to run untill fish reaches population limit
while (fis < poplimit){
    fis++
    console.log(`theirs room for` + (poplimit-fis) + ` more fish`);
}
//set a condition to true
const icecapsaremelting=true
let polarbears = 5;
//initiate infinit loop//
while(icecapsaremelting){
    console.log(`there are${polarbears}polar bears`)
    polarbears--;
    //terminate infinite loop
    if(polarbears===0){
        console.log(`there are no polarbears left`)
        break
    }
}
do {
    `execute code`
} while(false);
//the do statement will run first and its followed by the while(condition)
//once do is run once it will return to a normal while loop
//set variable to 0
let x =0;
do {
    //increment variable by 1
    x++;
    console.log(x); 
} while(false);
//initilaze a for statment with 5 iteration
for(let i=0;i<4;i++){
    console.log(i)
}
let arrayexample=[]
for(i=0;i<3;i++){
    arrayexample.push(i)
    console.log(arrayexample);
} 
let fish=[`flounder`,`salmon`,`pike`];
//initilize the loop to run for the total length of the array
for(i=0;i<fish.length;i++){
    console.log(fish[i]);
}
//for in statement calls for the properties of an object//
const shark= {species:`great white`,color:`white`,numberofteeth:Infinity
}
for ( attribute in shark) {
    console.log(attribute)
}
//print property value of object//
for(attribute in shark){
    console.log(shark[attribute])
}
//putting them togather calls for all the properties and values of an object//
for (attribute in shark){
    console.log(`${attribute}`.toUpperCase()+ `:${shark[attribute]}`)
}
const xz = 1;

function az() {
  const yx = 2;
output(y);
}


function b() {
  const zn = 3;
  output(z);
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}