 // - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let fn = (n) => {
    n
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
}

    // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    let arrrandom = (length) => {
        let array = [];
        for (let i = 0; i < length; i++){
            array.push(Math.floor(Math.random() * 100));
        }
        return array;
    }
    console.log(arrrandom(10))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

 // let arrayr = arrrandom(15);
 // arrayr.sort((a, b) => a - b);
 // console.log(arrayr);

 // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

 // let arrayr = arrrandom(15);
 // arrayr.filter(value => value % 2 === 0);
 // console.log(arrayr);

 // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

 let arrayr = arrrandom(15);
arrayr.map(value => value.toString());
console.log(arrayr);

 // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


 let sortNums = (nums, direction) => {
     if (direction === 'asc') return nums.sort((a, b) => a - b);
     if (direction === 'desc') return nums.sort((a, b) => b - a);
 };
 console.log(sortNums([11, 21, 3], 'desc') );


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

 let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
 console.log(newSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

 let filter = coursesAndDurationArray.filter((value) => {
     return value.monthDuration > 5;
 })
 console.log(filter);

