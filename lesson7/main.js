// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(name,  id, email, surname, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

    let userarr = [
    new User('vasya', 30, 'gfd@gmail.com', 'pypkin', 380674567896),
    new User('vova', 31, 'kokr@gmail.com', 'bolt', 380695412354),
    new User('petro', 32, 'cvbm@gmail.com', 'gor', 380321569874),
    new User('ivan', 37, 'pgk@gmail.com', 'ben', 380645987412),
    new User('endry', 34, 'folc@gmail.com', 'bim', 380691234567),
    new User('kolya', 38, 'wer@gmail.com', 'bom', 380144567891),
    new User('erik', 33, 'vfd@gmail.com', 'marvil', 380793278962),
    new User('ron', 41, 'ldf@gmail.com', 'golt', 380663216548),
    new User('john', 54, 'zas@gmail.com', 'black', 380780258963),
    new User('dagni', 27, 'btn@gmail.com', 'taggart', 380987894563),
];
    console.log(userarr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = userarr.filter(value => value.id % 2 === 0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = userarray.sort ((a, b) => (a.id - b.id));
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let Clients = [
    new Client(1, 'vova', 'bolt', 'gfd@gmail.com', 380674567896, [bla, blabla, blablabla, dfg, gkgigo]);
    new Client(3, 'petya', 'ben', 'gfd@gmail.com', 380674567896, [poker, scart, socs, books, pen]);
    new Client(4, 'ivan', 'gor', 'gfd@gmail.com', 380674567896, [sircle, cicle, bike]);
    new Client(6, 'stepan', 'giga', 'gfd@gmail.com', 380674567896, [car, flat, dodge, rom, gkgigo, beer]);
    new Client(7, 'erik', 'marvil', 'gfd@gmail.com', 380674567896, [pub, volvo]);
    new Client(5, 'ron', 'black', 'gfd@gmail.com', 380674567896, [bla, dfg, gkgigo]);
    new Client(2, 'john', 'golt', 'gfd@gmail.com', 380674567896, [blablabla]);
    new Client(9, 'vasya', 'pypkin', 'gfd@gmail.com', 380674567896, [bla, blabla, blablabla, dfg, gkgigo]);
    ];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortclient = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortclient);
