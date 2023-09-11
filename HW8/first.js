// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users =[];
// function User(id, name, surname, email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let user1=new User(1,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user2=new User(2,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user3=new User(3,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user4=new User(4,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user5=new User(5,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user6=new User(6,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user7=new User(7,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user8=new User(8,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user9=new User(9,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// let user10=new User(10,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`);
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(users);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterUsers= users.filter(function (user){
//     return user.id % 2===0;
// })
// console.log(filterUsers)
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// // -спадання (зробив спадання бо в мене мвсив ітак йде по зростанню)
// users.sort(function (a,b){
//     return b.id-a.id;
// });
// console.log(users)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// let clients =[];
// function Client(id, name, surname, email, phone, order=[]){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//     this.orde=order;
// }
// let client1=new Client(1,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`,`товар2`,`товар3`]);
// let client2=new Client(2,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`,`товар2`]);
// let client3=new Client(3,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`,`товар2`,`товар2`]);
// let client4=new Client(4,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`]);
// let client5=new Client(5,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`,`товар2`,`товар2`]);
// let client6=new Client(6,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`]);
// let client7=new Client(7,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`]);
// let client8=new Client(8,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`,`товар2`,`товар2`]);
// let client9=new Client(9,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`,`товар2`]);
// let client10=new Client(10,`Danylo`, `Kotur`,`...gmail.com`, `0634056444`, [`товар1`]);
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
//
// console.log(clients);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort(function (a, b) {
//     return a.order.length - b.order.length;
// });
//
// console.log(clients);



//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, manufacturer,year,maxSpeed,engine){
//     this.model=model;
//     this.manufacturer=manufacturer;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//     this.driver=null;
//
//         this.drive=function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     };
//     this.info=function () {
//         for(let key in this){
//             if(typeof this[key]!=="function"){
//                 console.log(`${key}-${this[key]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed=function (newSpeed) {
//         this.maxSpeed+=newSpeed;
//         console.log(`Максимальна швидкість збільшена до ${this.maxSpeed} км/год`)
//     };
//     this.changeYear=function (newValue) {
//         this.year=newValue;
//         console.log(`Рік випуску змінено на ${this.year}`)
//     };
//     this.addDriver=function (driver) {
//         this.driver=driver;
//         console.log(`Додано водія: ${driver.name}`);
//     };
// }
// let car1= new Car(`BMW X5`, `Germany`, 2021, 260,3.0);
//
// car1.drive()
// car1.increaseMaxSpeed(10)
// car1.changeYear(2020)
// car1.addDriver({name:"Danylo"})
//
//
// car1.info()

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor (model, manufacturer,year,maxSpeed,engine){
//     this.model=model;
//     this.manufacturer=manufacturer;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//     this.driver=null;
// }
//         drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
//     };
//     info() {
//         for(let key in this){
//             if(typeof this[key]!=="function"){
//                 console.log(`${key}-${this[key]}`);
//             }
//         }
//     };
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed+=newSpeed;
//         console.log(`Максимальна швидкість збільшена до ${this.maxSpeed} км/год`)
//     };
//     changeYear(newValue) {
//         this.year=newValue;
//         console.log(`Рік випуску змінено на ${this.year}`)
//     };
//    addDriver(driver) {
//         this.driver=driver;
//         console.log(`Додано водія: ${driver.name}`);
//     };
// }
// let car1= new Car(`BMW X5`, `Germany`, 2021, 260,3.0);
//
// car1.drive()
// car1.increaseMaxSpeed(10)
// car1.changeYear(2020)
// car1.addDriver({name:"Danylo"})
//
//
// car1.info()

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}
let cinderellas = [
    new Cinderella("Попелюшка 1", 20, 36),
    new Cinderella("Попелюшка 2", 21, 37),
    new Cinderella("Попелюшка 3", 22, 36),
    new Cinderella("Попелюшка 4", 23, 38),
    new Cinderella("Попелюшка 5", 24, 37),
    new Cinderella("Попелюшка 6", 25, 36),
    new Cinderella("Попелюшка 7", 26, 39),
    new Cinderella("Попелюшка 8", 27, 38),
    new Cinderella("Попелюшка 9", 28, 37),
    new Cinderella("Попелюшка 10", 29, 36),
];
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.shoeSize === this.foundShoeSize) {
                console.log(`Принц ${this.name} знайшов свою Попелюшку: ${cinderella.name}`);
                return cinderella
            }
        }
        console.log(`Принц ${this.name} не знайшов свою Попелюшку`);
        return null;
    }
}
let prince= new Prince(`danylo`,23,38)

let foundCinderella= prince.findCinderella(cinderellas)