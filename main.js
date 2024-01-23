// let greeting = 'I is JavaScript!';
// alert(greeting)

// let name = prompt(`You're name?`, '');
// alert(name);

// let a = 1, b = 1;

// let c = ++a;
// let d = b++;
// console.log(a, b, c, d);

// let a = 2;
// let x = 1 + (a *=2);
// console.log(a, x);

// let num = 3;
// alert(num);

// let a = 10, 
//     b = 2;
// console.log(a+b, a-b, a*b, a/b);

// let c = 15,
//     d = 2,
//     result = c + d;
// console.log(result);

// let a = 10,
//     b = 2,
//     c = 5;
// console.log(a + b + c);

// let a = 17,
//     b = 10,
//     c = a - b,
//     d = 7,
//     result = c + d
// console.log(result);

// let str = 'Hello, World!'
// console.log(str);

// let str1 = 'Hello',
//     str2 = 'World!';
// console.log(str1 + ', '+ str2);

// let name = 'Nazar';
// console.log(`Hi, ${name}!`);

// let age = 16;
// console.log(`Мне ${age} лет!`);

// let name = prompt('How you are name?', 'Nazar' )
// alert(name)

// let num = prompt('Input number, please', 23)
// alert(num * num)


// let str = 'abcde';
// console.log(str[0], str[2], str[4])

// let num = '12345';
// console.log(num[0] * num[1] * num[2] * num[3] * num[4])

// let sec = 1;
// let h = sec * 3600,
//     d = h * 24,
//     m = d * 30;

// console.log(`${h}:${d}:${m}`)

// let h = 11,
//     m = 52,
//     s = 40;

// console.log(`${h}:${m}:${s}`)

// let num = 4

// console.log(num * num)

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /=15;
// alert(num);

// var num = 10;
// num ++;
// num ++;
// num --;
// alert(num);

//////////////////////////////////////////////////////////
///////////////////////Quest 2////////////////////////////
//////////////////////////////////////////////////////////

// let a = prompt('Input the coolest option', '1/0/-3');
// alert(a)
// if (a==0){
//     console.log('True')
// }else {
//     console.log('Else')
// }

// let a = prompt('Input the coolest option', '1/0/-3');
// alert(a)
// if (a>0){
//     console.log('True')
// }else {
//     console.log('Else')
// }

// let a = prompt('Input the collest option', '1/0/-3');
// if (a<0){
//     console.log('True')
// } else {
//     console.log('Else')
// }

// let a = prompt('Input the coolest option', '1/0/-3')
// if (a>=0){
//     console.log('True');
// } else {
//     console.log('Else')
// }

// let a = prompt('Input the coolest options', '1/0/-3')
// if (a<= 0){
//     console.log('True')
// } else {
//     console.log('Else')
// }

// let a = prompt('Input the coolest options', '1/0/-3')
// if (a != 0){
//     console.log('True')
// } else {
//     console.log('Else')
// }

// let a = prompt('Input word test', '')
// if (a == 'test'){
//     console.log('True')
// } else {
//     console.log('Else')
// }

// let a = prompt('Input 1', '')
// if (a == 1 && typeof a == typeof 1){
//     console.log('True')
// } else {
//     console.log('Else')
// }

// let a = prompt('Input a number', '5/0/-3/2')
// if (a>0 && a<5){
//     console.log('True');
// } else {
//     console.log('Else')
// }

// let a = prompt('Input a number', '5/0/-3/2')
// if (a==2 || a==0){
//     console.log(Number(a) + 7);
// } else {
//     console.log(a/10);
// }

// let a = prompt('Input a number', '5/0/-3/2'),
//     b = prompt('Input a number', '5/0/-3/2');
// if (a == 1 || a < 1 && b > 3 || b == 3){
//     console.log(Number(a) + Number(b));
// } else {
//     console.log(a - b)
// }

// let a = prompt('Input a number', '5/0/-3/2'),
//     b = prompt('Input a number', '5/0/-3/2');
// if (a > 2 && a < 11 || b >= 6 && b < 14){
//     console.log('True');
// } else {
//     console.log('Else')
// }

//  let a = prompt('Input a number', '')
//  switch(a){
//     case '1':
//         console.log('winter');
//         break;

//     case '2':
//         console.log('spring')
//         break;

//     case '3':
//         console.log('summer')
//         break;

//     case '4':
//         console.log('autumn')
//         break;
//  }




















// Classwork
// let a = 1
// switch (a){
//     case 1:
//         console.log('fwrf');
//         break;
//     case 2:
//         console.log('veee')
//         break;
//     case 3:
//     console.log('error')
//     break;
// }

// let lang = '1';
// rus = ['пон', 'вт', 'ср', 'чт', 'пят', 'вс']

// eng = ['mon', 'tu', 'wen', 'th', 'fr', 'sat', 'sun']

// if (lang != 1){
//     console.log(rus)
// } else {
//     console.log(eng)
// }




// let showMessage = function (text, name, i){
//     console.log(`${name}, ${text}`)

//     if (i>5){
//     clearInterval(0)
//     }
// }

// setTimeout(showMessage, 1000, 'Hello', 'Vasia', 1)
// setInterval(showMessage, 1000, 'Hello', 'Petia', 1)
// function one(x = 10){
//     console.log(x)

// }

// function two(x=15){
//     console.log(x)

// }

// function calc(x, y, first, second){
//     if (x>y){
//         first(100)
//     } else{
//         second(200)

//     }
// }

// calc(6, 2, one, two)

// let a = one

// a(52)
////////////////////////////////////////////////////////////

// function less(a,b){
//     if (a<b){
//         return a
//     }
//     return b

// }

// console.log(less(20,6))

// let showMessage = function (){
//     console.log('Message');
// }

// showMessage()
// showMessage2()
// function showMessage2(){
//     console.log('Message 2')
// }
