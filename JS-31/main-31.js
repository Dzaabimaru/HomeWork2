// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(basePrice = +prompt("Введите базовую цену товара:"), discountPercent = +prompt("Введите процент скидки:"), taxRate = +prompt("Введите налоговую ставку:")) {
  let sumDiscountPercent = basePrice * (discountPercent / 100);
  let basePriceAfterDiscount = basePrice - sumDiscountPercent;
  let sumTaxRate = basePriceAfterDiscount * (taxRate / 100);
  return basePriceAfterDiscount + sumTaxRate;
}

alert(`Итоговая сумма товара: ${calculateFinalPrice()}`);

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".


function checkAccess(name, password) {
  name = prompt("Введите имя пользователя:");
  password = prompt("Введите пароль пользователя:");

  if (name === "admin" && password === "123456") {
    alert("Доступ разрешён")
  } else {
    alert("Доступ запрещен")
  }
}
checkAccess();


// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(time = +prompt("Введите текущее время:")) {
  if (time <= 5) {
    alert("Сейчас: Ночь")
  } else if (time <= 11) {
    alert("Сейчас: Утро")
  } else if (time <= 17) {
    alert("Сейчас: День")
  } else if (time <= 23) {
    alert("Сейчас: Вечер")
  } else {
    alert("Некорректное время")
  }
}
getTimeOfDay();

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"


function findFirstEven(start = +prompt("Введите начальное число:"), end = +prompt("Введите конечное число:")) {
  for (start; start <= end; start++) {
    if (start % 2 === 0) {
      return alert(`Первое чётное число: ${start}`)
    }
  } 
  return alert("Чётных чисел нет")
}
findFirstEven();