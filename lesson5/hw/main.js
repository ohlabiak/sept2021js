// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let rect = (a,b) => a * b;
console.log(rect(10, 20));

// - створити функцію яка обчислює та повертає площу кола

let circle = (r) => 3.14 * (r**2);
console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру

let cilinder = (h, r) => 2 * 3.14 * R * H;
console.log(cilinder());


// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let farr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
farr(arr);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let text = (some text) => {
    document.write(`<p>${text}</p>`);
}
text('asdas');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createul = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
createUl('Text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createul3li = (arg, size) => {
    document.write(`<ul>`);
    for ( let i = 0; i < size; i++) {
        document.write(`<li>${arg}</li>`)
    }
    document.write(`</ul>`)
}
// createul3li('text', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let arrprimel1 = [1, 2, 3, 4, 'five', 'six', true, false];
let arrprim1 = (arrprimel1) => {
    document.write(`<ul>`)
    for (let item of arrprimel1) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
arrprim1(arrprimel1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [{id : 1, name : 'vasya', age : 33}, {id : 2, name : 'kolya', age : 15}, {id : 3, name: 'misha', age: 58}];
let personal (users) {
    for (const user of users) {
        document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`);
    }
}
personal(users);