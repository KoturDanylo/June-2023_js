// let time = prompt( 'Hello')
//
// if (time>=0 && time<=14)
//     console.log('1')
// if (time>=15 && time<=29)
//     console.log('2')
// if (time>=30 && time<=44)
//     console.log('3')
// if (time>=45 && time<=59)
//     console.log('4')


// -------------------------------------------/
// let Day = prompt( 'Day')
//
// if (Day>=1 && Day<=11)
//     console.log('1')
// if (Day>=12 && Day<=21)
//     console.log('2')
// if (Day>=22 && Day<=31)
//     console.log('3')


// -------------------------------------------/


// let week =prompt("Which day you choose?")
// switch (week) {
//     case '1':
//         console.log('Monday');
//         break;
//     case '2':
//         console.log('Tuesday');
//         break;
//     case '3':
//         console.log('Wednesday');
//         break;
//     case '4':
//         console.log('Thursday');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('Saturday');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//
//     default:
//         console.log("fjrnnjfr")
//
// }

// -------------------------------------------/


let coursesAndDurationArray=  [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('super');
}


// -------------------------------------------/
let x = 5;
if (x !==0) {
    console.log('вірно');
} else{
    console.log('невірно');
}
// -------------------------------------------/

let a=1;
let b=3;
if (a>b){
    console.log('a:',a);
} else if(b>a){
    console.log('b:',b);
} else if(a===b){
    console.log('equal');
}

// -------------------------------------------/

 let x1=0;
let result1=x1 || 'default';
let result2=x1 ?? 'default';

console.log(result1);
console.log(result2);


let xx1=false;
if(!xx1){
    xx1='default';
    console.log('dddddd',xx1)
} else {
    console.log(xx1)
}
// -------------------------------------------/
