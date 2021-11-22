// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter you time from 0 to 59');
    if (time >= 0 && time < 15) {
        console.log('first part time');
}   else if (time > 14 && time < 30) {
        console.log('second part time');
}   else if (time > 29 && time < 45) {
        console.log('third part time');
}   else if (time > 44 && time < 60) {
    console.log('fourth part time');
} else {
        console.log('???????');
    };


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('введіть число від 1 до 31');
    if (day >= 1 && day <=10) {
        document.write('перша декада');
}   if else (day >= 11 && day <= 20) {
        document.write('друга декада');
}   if else (day >= 21 && day <= 31) {
        document.write('третя декада');
}   else {
        document.write('невірно введене число');
};

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test ='dghfgogj';
//     if (test !== tru) {
//        console.log('Вірно');
    // }
    // else {
    //     console.log('Неправильно');
    // }

    let test = 'true';
    test !== true ? 'Вірно' : 'Неправильно';
    console.log(test);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let a = +prompt('введіть число 1, 0, -3');
    if (a !== 0) {
        console.log('Вірно');
    }
    else {
        console.log('Невірно');
    }

    (a !==0 ? console.log('Вірно') : console.log('Невірно'));

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let week = +prompt('введіть номер дня тижня від 1 до 7');
switch (week) {
    case 1:
        console.log('понеділок: прокинутися');
        break;
    case 2:
        console.log('вівторок: взятися за роботу');
        break;
    case 3:
        console.log('середа: піти погуляти');
        break;
    case 4:
        console.log('четвер: зустрітися з друзями');
        break;
    case 5:
        console.log('пятниця: ура пятниця');
        break;
    case 6:
        console.log('субота: прибрати в квартирі');
        break;
    case 7:
        console.log('неділя: пікнік');
        break;
    default('ви ввели невірні дані');
}



// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt();
    if (year % 2 === 0) {
        console.log('високосний рік');
    }
    else {
        console.log('нормальний рік');
    }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let officialnamejs = prompt('Яка «офіційна» назва JavaScript?');
    if (officialnamejs === 'ECMAScript') {
        alert('Правильно!');
    }
    else {
        alert('Не знаєте? ECMAScript!');
    };