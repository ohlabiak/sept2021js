// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let xxx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result =xxx[0] + xxx[1] + xxx[2] + xxx[3] + xxx[4] + xxx[5] + xxx[6] + xxx[7] + xxx[8] + xxx[9];

    // Math.floor( (Math.random() * 10) + 1);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

    let book = {
            name: 'hjbj',
            pages: 351,
            genre: 'dfg',
        };

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
    name: 'dtngodbj',
    pages: 421,
    genre: 'dfgvoijhf',
    author: 'dfihndigt',
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

    let book2 = [
        {
            name: 'asdas',
            pages: 256,
            genre: 'filantrop',
            author: 'terminator'
        },
        {
            name: 'acjklg',
            pages: 458,
            genre: 'criminal',
            author: 'Pol Uoker'
        },
        {
            name: 'lghir',
            pages: 851,
            genre: 'comedy',
            author: 'gdwmho'
        }
    ];
    console.log(book2[0]);
    console.log(book2[1]);
    console.log(book2[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = 3.14 * dC * heightC;

// V = π⋅(d/2)2⋅h


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt((n ** 2) + (m ** 2));


// let k = (k**2 = (n ** 2) + (m ** 2)); чи можливий такий варіант вирішення?