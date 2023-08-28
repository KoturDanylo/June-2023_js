// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function users(id, name, age) {
//     document.write(
//
//         `<div>
//         <p>id:${id}</p>
//             <p>name:${name}</p>
//                <p>age:${age}</p>
//                </div>`
// );
// }
//
// users(1, 'Danylo', 23 )

// -------------------------------------------/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const users =[
//     {id:1, name: 'vasya', age: 31},
//     {id:1, name: 'petya', age: 30},
//     {id:1, name: 'kolya', age: 29},
//     {id:1, name: 'olya', age: 28},
//     {id:1, name: 'max', age: 30},
//     {id:1, name: 'anya', age: 31}
//     ];
// function userPresentor(arr) {
//     for (const user of arr) {
//         document.write(`<di>
//                 <p>id:${user.id}</p>
//                 <p>name:${user.name}</p>
//                 <p>age:${user.age}</p>
//                 </di>`)
//     }
// }
// userPresentor(users)
// -------------------------------------------/

// - створити функцію яка повертає найменьше число з масиву

// function aaa(array) {
//     if (array.length===0) {
//         return undefined;
//     }
//     let minimum=array[0];
//
//     for (let i=1; i<array.length; i++){
//         if (array[i]<minimum){
//             minimum=array[i];
//         }
//     }
//     return minimum;
// }
// const numbers=[3,4,5,1,-9,8];
// const min =aaa(numbers);
//
// console.log(`${min}`)


// -------------------------------------------/
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum() {
//     const arr= Array.from(arguments);
//     let result =0;
//
//     for (const number of arr){
//         result=result+number;
//     }
//     console.log(result)
//     return result;
// }
// const a=sum(2,5,6,7,2,1)
// console.log(a)

// -------------------------------------------/


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a,b) {
//    let result= a*b;
//    return result;
//
// }
// let r1=square(5,6);
// console.log(r1)


// -------------------------------------------/

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function square(r) {
//    let result= 2*Math.PI*r;
//    return result;
//
// }
// let r1=square(5);
// console.log(r1)

// -------------------------------------------/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function square(h,r) {
//     let result= 2*Math.PI*r*(h+r);
//     return result;
//
// }
// let r1=square(5,8);
// console.log(r1)


// -------------------------------------------/
// - створити функцію яка приймає масив та виводить кожен його елемент

// function users(array) {
//     for (const item of array){
//         console.log(item)
//     }
//
// }
// users([])



// -------------------------------------------/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function user( text) {
//     document.write(`<p>${text}</p>`)
//
// }
// user('Danylo')

// -------------------------------------------/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function uluser( text) {
//     document.write(`<ul>`);
//     for (let i = 0; i< 3; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// uluser('Danylo')


// -------------------------------------------/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function uluser( text, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i< count; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// uluser('Danylo',4);
// uluser('Danylo',5);

// -------------------------------------------/
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1,index2) {
//     const numIndex1=arr[index1];
//     const numIndex2=arr[index2];
//
//     arr[index1]=numIndex2;
//     arr[index2]=numIndex1;
//
//     return arr;
// }
//
//  console.log(swap([11,22,33,44],0,1));

// -------------------------------------------/
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sum,currencies,resultCurrency) {
    for (const cur of currencies) {
        if(cur.currency===resultCurrency){
           return  sum/cur.value
        }

    }
}

const result  =exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(`result :`, result)