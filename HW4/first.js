// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function users(id, name, age) {
//     document.write(
//
//         `<div>${id}</div>
//             <div>${name}</div>
//                <div>${age}</div>`
// );
// }
//
// users('id:1', 'name:Danylo', 'age:23' )

// -------------------------------------------/

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function aaa(a, b, c) {
//     console.log(a, b, c)
// }
//
// aaa(23, 'Danylo', true )
// aaa(19, 'Maryana', false )


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
