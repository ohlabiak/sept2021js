// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minnum (a, b, c) {
    if (a < b && a < c) {
        console.log(a);
} else if (b < a && b < c) {
        console.log(b);
}
    else {
    console.log(c);
    }
}

//minnum (150, 100, 250)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxnum (a, b, c) {
    if (a > b && a> c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
};
// maxnum (50, 200, 300);

// - створити функцію яка повертає найбільше число з масиву

let maxarr = [50, 50000, 8, 24, 152, -14,87];
function biggestnumber (maxarr) {
    let max = maxarr[0];
    for (const element of maxarr) {
        if (element > maxarr) {
            maxarr = element
        }
    }
    return maxarr;
};

//biggestnumber(maxarr)

// - створити функцію яка повертає найменьше число з масиву

let arrmin = [65, 54, 1, 37, 49, 49324, 123854];
function smoller (arrmin) {
    let min = arrmin[0];
    for (const element of arrmin) {
        if (element < arrmin) {
            arrmin = element
        }
    } return arrmin;
}
//smoller(arrmin)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumarr = [1, 2, 5, 10, 20];
    function sumelement (sumarr) {
        let sum = 0;
        for (const arr of sumarr) {
            sum = arr + sum;
        }
        return sum;
    }

//    sumelement(sumarr)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let sumarr1 = [5, 67, 92, 11, 64, 91, 38, -44];
    function middle (sumarr1) {
        let sum = 0;
        for (const arr of sumarr1) {
            sum = arr + sum;
        }
        return sum/sumarr1.length
    }
//middle(sumarr1)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function minmax (nums) {
     let min = nums[0];
     let max = nums[0];
     for (const element of nums) {
         if (element > max) {
             max = element;
             if (element < min) {
                min = element;
        }
        }
        console.log(max);
         return min;
    }
    // minmax(12, 45, -37, 84, 39)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

    function random (arr) {
    for (let i = 0; i < 20; i++) {
        arr[i](Math.floor(Math.random()*100));
    }
    return arr;
};
//random()
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


    function randomlimit (arr, limit) {
        for (let i = 0; i < 20; i++) {
            arr[i] = Math.floor(Math.random()*limit);
        }
        return arr;
    };
// randomlimit(10, 50)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

    function reverse(arr) {
        let newarr = [];
        for (let i = arr.length - 1, ri = 0; ri < arr.length, i >= 0; i--, ri++) {
            newArr[ri] = newArr[i];
            newArr[i] = newArr[i];
        }
        return newArr;
    }

    console.log(reverse([2, 3, 4]));
