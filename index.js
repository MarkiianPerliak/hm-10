// // 1
// const showMessage = () => {
//     const userInput = confirm("Клікни");
//     if (userInput === true) {
//         alert("Hello World!");
//     }
// };

// showMessage()

// showMessage();

// // 1

// // 2
// const randomNumber = Math.random() * (100 - 1) + 1;

// const randomNumberNormal = Math.round(randomNumber);

// console.log(randomNumberNormal)

// const quetionPrompt = prompt("Вгадайте число від 1 до 100");


// if (Number(quetionPrompt) === randomNumberNormal) {
//     alert("Ваша відповідь є правильна!")
// } else {
//     alert("Ваша відповідь не є правильна")
// }
// // 2

// // 3
// let clickCount = 0;

// function ifClick() {
//     while (true) {
//         const ifConfirmed = confirm("Зарахувати цей клік?");
//         if (!ifConfirmed) {
//             break;
//         }
//         clickCount++;
//         alert(`Кількість кліків: ${clickCount}`);
//     }
//     alert(`Всього кліків: ${clickCount}`);
// }
// ifClick();
// // 3

// 4
// const applyCallbackToEachElement = (arr, callback) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// };

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num;

// const result = applyCallbackToEachElement(arr, squareCallback);

// for (const value of result) {
//     console.log(value);
// };

// console.log(result);
// 4

// 5
// const calculateDiscountedPrice = (price, discount, callback) => {
//     const discountedPrice = price - (price * discount / 100);
//     callback(discountedPrice);
// };

// const showDiscountedPrice = (discountedPrice) => {
//     const normalPrice = Math.round(discountedPrice * 100) / 100;
//     console.log(`Дисконтна ціна: ${normalPrice} грн`);
// };

// calculateDiscountedPrice(100, 10, showDiscountedPrice);
// 5