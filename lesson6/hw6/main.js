// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello1 = 'hello world';
console.log(hello1.length);

let lorem1 = 'lorem ipsum';
console.log(lorem1.length);

let js1 = 'javascript is cool';
console.log(js1.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hellobig = 'hello world';
console.log(hellobig.toUpperCase());

let lorembig = 'lorem ipsum';
let lor = lorembig.toUpperCase();
console.log(lor);

let jsbig = 'javascript is cool';
console.log(jsbig.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let hellolow = 'HELLO WORLD';
console.log(hellolow.toLowerCase());

let loremlow = 'LOREM IPSUM';
console.log(loremlow.toLowerCase());

let jslow = 'JAVASCRIPT IS COOL';
console.log(jslow.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str1 = ' dirty string   ';
// console.log(str1.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let arr12 = stringToarray(str);
// console.log(arr12);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));


let delete_characters = (str2, length) => {
    return str2.substr(0, length);
}
let str2 = 'Каждый охотник желает знать';
document.writeln(delete_characters(str2, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str3 = "HTML JavaScript PHP";
let insert_dash = (str3) => {
    let splitJoinUpper = str3.split(' ').join('-').toUpperCase();
     return splitJoinUpper;
}
console.log(insert_dash(str3));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstUp = (str) => {
     if (!str) return str;
     return str[0].toUpperCase() + str.slice(1)
 };
 document.write(firstUp('hello world'));
