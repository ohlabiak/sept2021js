// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrnumber = [1, 2, 3, 4, 5];
let arrstr = ['amokgk', 'abrak', 'fjgp', 'ogjjc', 'pont'];
let arrstrboolen = ['vasya', 'petya', 11, true, false];

console.log(arrnumber);
console.log(arrstr);
console.log(arrstrboolen);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
    arr [0] = 'yura';
    arr [1] = 'misha';
    arr [2] = 'kostia';
    arr [3] = 'sveta';
    console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
    document.write(`<div>"bimbom"</div>`)
};

for (let i = 0; i < 10; i++) {
  document.write(`<div>${i} index</div>`)
};


let k = 0;
while (k < 20) {
    document.write(`<div><h1>bro</h1></div>`)
    k++;
};


let r = 0;
while (r < 20) {
    document.write(`<div><h1>${r}bro</h1></div>`)
    r++;

};

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i=0; i < arr1.length; i++) {
        console.log(arr1[i]);
};
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = ['bla', 'bla', 'car', 'bolt', 'uklon', 'true', 'false', 'number', '9', '10'];
    for (i=0; i < arr2.length; i++) {
        console.log(arr2[i]);
};
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr3 = [11, 22, 'car', 'bolt', null, true, false, 'number', {}, ' '];
    for (i=0; i < arr2.length; i++) {
        console.log(arr3[i]);
};

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrb = [11, 22, 'car', 'bolt', 'year', true, false, 'text', 33, 55];
for (i = 0; i < arrb.length; i++) {
    if (typeof arrb[i] === 'boolean'){
        console.log(arrb[i]);
}
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrc = [11, 22, 'car', 'bolt', 'year', true, false, 'text', 33, 55];
for (i = 0; i < arrb.length; i++) {
    if (typeof arrc[i] === 'number'){
        console.log(arrc[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrd = [11, 22, 'car', 'bolt', 'year', true, false, 'text', 33, 55];
for (i = 0; i < arrd.length; i++) {
    if (typeof arrd[i] === 'string'){
        console.log(arrd[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr5 = [];
arr5[0] = 'new';
arr5[1] = 'empty';
arr5[2] = 'arr';
arr5[3] = ' for';
arr5[4] = 'this';
arr5[5] = 'task';
arr5[6] = 1;
arr5[7] = 2;
arr5[8] = true;
arr5[9] = 3;
arr5[10] = false;
    for (let i = 0; i < arr5.length; i++) {
        console.log(arr5[i]);
    }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
  console.log(i);
  document.write(i);
};

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
};

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
};

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
};
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(i);
    }
};

