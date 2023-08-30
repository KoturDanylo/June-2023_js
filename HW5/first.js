// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// const users =[
//     {id:1, name: 'vasya', age: 31},
//     {id:2, name: 'petya', age: 30},
//     {id:3, name: 'kolya', age: 29},
//     {id:4, name: 'olya', age: 28},
//     {id:5, name: 'max', age: 30},
//     {id:6, name: 'anya', age: 31}
// ];
// const usersCreator=(arr)=> {
//     for(const users of arr ){
//         document.write(`
//         <div>
//             <p>id: ${users.id}</p>
//             <p>name: ${users.name}</p>
//             <p>age: ${users.age}</p>
//          </div>
//                 `);
//     }
// }
// usersCreator(users);

// -------------------------------------------/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// const ulCreator=(arr)=> {
//     document.write(`<ul>`);
//     for (const item of arr){
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ulCreator([`nkl`,`jnlnln`,122,true,false]);
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

// const  sum=() => {
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

// const square =(a,b) =>a*b;
//
// console.log(square(10,5));


// -------------------------------------------/

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const square=(r) =>2*Math.PI*r;
//
// console.log(square(5))

// -------------------------------------------/
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const  square=(h,r) => 2*Math.PI*r*(h+r);
//
//
// console.log(square(14,5))


// -------------------------------------------/
// - створити функцію яка приймає масив та виводить кожен його елемент

// const users=(arr)=> {
//     for (const item of arr){
//         console.log(`item`,item)
//     }
// }
// users([123,46,true,`uhgii`,`klmklm`])
//

// -------------------------------------------/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const user=( text)=> {
//     document.write(`<p>${text}</p>`)
//
// }
// user('Danylo')

// -------------------------------------------/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const uluser=( text) =>{
//     document.write(`<ul>`);
//     for (let i = 0; i< 3; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// uluser('Danylo')
//

// -------------------------------------------/
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const uluser=( text, count) =>{
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

// const swap=(arr, index1,index2) =>{
//     const numIndex1=arr[index1];
//     const numIndex2=arr[index2];
//
//     arr[index1]=numIndex2;
//     arr[index2]=numIndex1;
//     return arr;
// }
//
//  console.log(swap([11,22,33,44],0,1));

// -------------------------------------------/
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// const exchange=(sum,currencies,resultCurrency) =>{
//     for (const cur of currencies) {
//         if(cur.currency===resultCurrency){
//             return  sum/cur.value
//         }
//
//     }
// }
// const result  =exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
// console.log(`result :`, result)