// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

    function rect (a, b) {
       let srect = a * b;
        return srect;
    }
    console.log(rect)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    function circle (r) {
        let radius = r **2;
        let scircle = 3.14 * radius;
            return scircle;
    }
    console.log(circle)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    function cilinder (h, r) {
        let scilinder = 2 * 3.14 * R * H;
            return (scilinder)
    }

// - створити функцію яка приймає масив та виводить кожен його елемент

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function marr (arr) {
        for (let i=0; i < arr.length; i++) {
            console.log(arr[i])
    }
    };

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textp (text) {
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createlist (text) {
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
}
// createlist('asdas')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createul3li (arg, size) {
        document.write(`<ul>`);
        for ( let i = 0; i < size; i++) {
            document.write(`<li>${arg}</li>`)
        }
        document.write(`</ul>`)
}
// createul3li('text', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrprimel1 = [1, 2, 3, 4, 'five', 'six', true, false];
function arrprim1 (arrprimel1) {
    document.write(`<ul>`)
    for (let item of arrprimel1) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
arrprim1(arrprimel1);


//     let arrprimel = [1, 2, 3, 4, 'five', 'six', true, false];
//         function arrprim (arrprimel) {
//             document.write(`<ul>`)
//             for (let i = 0; i < arrprimel.length; i++) {
//                 document.write(`<li>${arrprimel}</li>`)
//             }
//             document.write(`</ul>`)
//         }
// arrprim(arrprimel);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

    let users = [{id : 1, name : 'vasya', age : 33}, {id : 2, name : 'kolya', age : 15}, {id : 3, name: 'misha', age: 58}];
    function personal (users) {
            for (const user of users) {
                document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`);
            }
    }
    personal(users);

