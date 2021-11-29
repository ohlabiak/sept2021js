// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxspeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };

    this.info = function () {
        console.log(`model - ${this.model}, producer - ${this.producer}`, `year - ${this.year}`, maxspeed - `${this.maxspeed}`, `volume - ${this.volume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    this.changeYear = function(newValue) {
            this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {
    constructor(model, producer, year, maxspeed, engineVal) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineVal = engineVal;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {
    console.log(`model - ${this.model}, producer - ${this.producer}`, `year - ${this.year}`, maxspeed - `${this.maxspeed}`, `volume - ${this.volume}`);
}
    increaseMaxSpeed (newSpeed) {
    this.maxspeed = this.maxspeed + newSpeed;
}
    changeYear (newValue) {
    this.year = newValue;
}
    addDriver (driver) {
    this.driver = driver;
};

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

    class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
};

let popelushkaArray = [
    new Popelushka('vika', 22, 36),
    new Popelushka('nina', 21, 35),
    new Popelushka('ira', 24, 39),
    new Popelushka('lesia', 26, 31),
    new Popelushka('nadia', 25, 32),
    new Popelushka('sveta', 20, 38),
    new Popelushka('mery', 17, 34),
    new Popelushka('sonya', 23, 33),
];
console.log(popelushkaArray);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class princ {
    constructor(name, age, shose) {
        this.name = name;
        this.age = age;
        this.shose = shose;
    }
}
let prince = new Princ('princ', 35, 39);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let newPara = (popelushkaArray, princ) => {
        for (const item of popelushkaArray) {
            if (item.size === princ.shose) {
                return `tvoya populushka: ${item.name}`
            }
        }
    };
    console.log(newPara(popelushkaArray, prince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let popelushka = popelushkaArray.find((value) => value.size === princ.shose));

console.log(popelushka);

