// // 1
const showMessage = () => {
    const userInput = prompt("Напишіть будь щось");
    if (userInput !== null) {
        alert("Hello World!");
    }
};

showMessage();

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
// const clicksPrompt = prompt("Введіть текст");

// const clicksLenght = clicksPrompt.length;

// alert(`Ви клікнули ${clicksLenght} разів по клевіатурі`)
// // 3

// 4
const applyCallbackToEachElement = (arr, callback) => {
    return arr.map(callback);
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);

for (const value of result) {
    console.log(value);
};


console.log(result);
// 4

// 5
const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};


const showDiscountedPrice = (discountedPrice) => {
    console.log(`Дисконтна ціна: ${discountedPrice.toFixed(2)} грн`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice)
// 5