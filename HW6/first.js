// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// // let str1=`hello world`;
// // let str2=`lorem ipsum`;
// // let str3=`javascript is cool`;
// //
// // console.log(`length1:`, str1.length);
// // console.log(`length2:`, str2.length);
// // console.log(`length3:`, str3.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1=`hello world`;
// let str2=`lorem ipsum`;
// let str3=`javascript is cool`;
//
// console.log(str1.toLocaleUpperCase());
// console.log(str2.toLocaleUpperCase());
// console.log(str3.toLocaleUpperCase());
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1=`HELLO WORLD`;
// let str2=`LOREM IPSUM`;
// let str3=`JAVASCRIPT IS COOL`;
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let strReplace=str.
//     replaceAll(` `,``);
//
// console.log(strReplace)
//
// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str= 'Ревуть воли як ясла повні';
// let split=str.split(` `);
// console.log(split)
// //
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
//
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let str= numbers.map(function (number) {
//     return number.toString();
// })
// console.log(str)
// //
// // // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
//     let nums = [11,21,3];
// let sort1=nums.sort((u1,u2)=>{
//     return u1-u2;
//
// })
// console.log(sort1)
//
// let sort2=nums.sort((u1,u2)=>{
//     return u2-u1;
//
// })
// console.log(sort2)
//
//
//
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// //
// // ==========================
// // - є масив
// let courses = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // // -- відсортувати його за спаданням за monthDuration
// let sort=courses.sort((u1,u2)=>{
//     return u1.monthDuration-u2.monthDuration;
// });
// console.log(sort)
// //
// // // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter5=courses.filter(function (value){
//     return value.monthDuration>5;
// });
// console.log(filter5)
//
// // // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let mapCourses= courses.map(function (value,index) {
//     let idCourses={
//         id: index+1,
//         title:value.title,
//         monthDuration:value.monthDuration
//     }
//     return idCourses;
// });
// console.log(mapCourses);
// // =========================

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// let deck = [
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
// ];


// let deck = [];
//
// let suits = ['spade', 'diamond', 'heart', 'clubs'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// suits.forEach(function(suit) {
//     values.forEach(function(value) {
//         let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
//         deck.push({ cardSuit: suit, value: value, color: color });
//     });
// });
//
// let aceOfSpade=deck.filter(function (card) {
//     return card.cardSuit===`spade` && card.value===`ace`;
//
// });
// console.log(aceOfSpade);
//
//
// let sixes= deck.filter(function (card) {
//     return card.value===`6`;
//
// });
// console.log(sixes);
//
//
// let colors= deck.filter(function (card) {
//     return card.color===`red`;
//
// });
// console.log(colors);
//
//
// let diamond= deck.filter(function (card) {
//     return card.cardSuit===`diamond`;
//
// })
// console.log(diamond);
//
// let higherCards = deck.filter(function (card) {
//     return card.cardSuit===`clubs` && (card.value)>=9;
//
// })
// console.log(higherCards);
//
// // =========================
// //
// //     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
//
//
//
// // Використовуємо reduce для групування карт за мастями
// let decks = deck.reduce(function(acc, card) {
//     let suit= card.cardSuit;
//     acc[suit].push(card);
//     return acc;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
//
// console.log(decks);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesSASS= coursesArray.filter(function (course) {
    return course.modules.includes(`sass`)

})
console.log(coursesSASS);

let coursesDOCKER= coursesArray.filter(function (course) {
    return course.modules.includes(`docker`);

})

console.log(coursesDOCKER)

// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
