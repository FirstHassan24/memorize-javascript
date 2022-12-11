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
else console.log('they will allow me to postpone it');
let sign=prompt('may i get the call back tmrw');
console.log(sign)
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
console.log(string.indexOf('m'))
console.log(string.indexOf('a',20))
let day='monday'
switch(day){
    case 'monday' :console.log('1 am');
    case 'tuesday': console.log('2am');break
    case 'wendseday': console.log('3am');
}
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