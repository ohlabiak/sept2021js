// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let numArr = [2,17,13,6,22,31,45,66,100,-18];
i = 0;
while (i < numArr.length) {
    console.log(numArr[i]);
    i++;
};

//     2. перебрати його циклом for

for (i = 0; i < numArr.length; i ++) {
    console.log(numArr[i]);
};

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 0;
while (i < numArr.length) {
    if (i%2  !== 0) {
        console.log(numArr[i]);
    }
    i++
};

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (i = 0; i < numArr.length; i ++) {
    if (i%2  !== 0) {
    console.log(numArr[i]);
}
};

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < numArr.length) {
    if (i%2  === 0) {
        console.log(numArr[i]);
    }
    i++
};

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (i = 0; i < numArr.length; i ++) {
    if (i%2  === 0) {
        console.log(numArr[i]);
    }
};

// 7. замінити кожне число кратне 3 на слово "okten"

for (i = 0; i < numArr.length; i++){
     if (numArr[i]%3 === 0){
         numArr[i] = "okten";
        }
 };
// 8. вивести масив в зворотньому порядку.
let numArrBack = [2,17,13,6,22,31,45,66,100,-18];
for (i = numArrBack.length-1; i >= 0; i--){
     console.log(numArrBack[i]);
 };

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

i = numArrBack.length - 1;
while (i >= 0) {
    console.log(numArrBack[i])
    i--
}

// 2
for (i = numArrBack.length; i >= 0; i--) {
    console.log(numArrBack[i]);
};

 // 3
i = numArrBack.length - 1;
while (i >= 0) {
    if (i%2  !== 0) {
         console.log(numArrBack[i]);
     }
     i--
 };

// 4

for (i = numArrBack.length; i >= 0; i--) {
    if (i%2  !== 0) {
        console.log(numArrBack[i]);
    }
};

//5

i = numArrBack.length - 1;
    while (i >= 0) {
    if (i%2  === 0) {
        console.log(numArrBack[i]);
     }
     i--
 };

//6
for (i = numArrBack.length; i <= 0; i--) {
    if (i%2  === 0) {
        console.log(numArrBack[i]);
    }
};

// 7
 for (i = numArrBack.length; i <= 0; i--) {
     if (numArrBack[i]%3 === 0){
         numArrBack[i] = "okten";
     }
 };