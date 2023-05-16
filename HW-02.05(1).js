//1.  Ви прийшли в Макдональдз з трьома друзями.
//Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//то виводити в консоль текст "Ми йдемо в інше кафе"
//(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburgers = 4;
let fries = 1;

if (hamburgers >= 4 && fries >= 1){
    console.log('Ми поїли')   
}else{
    console.log('Ми йдемо в інше кафе')
}

let hamburgers1 = 4;
let fries1 = 0;

if (hamburgers1 >= 4 &&fries1){
    console.log('Ми поїли')   
}else{
    console.log('Ми йдемо в інше кафе')
}

//2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

let price = 1500;

if (price >= 1000 && price <= 1900){
    console.log('ціна товару знаходиться в діапазоні між 1000 та 1900')
}

//3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//Результат виводити в консоль.

let price1 = 2300;

if (!(price1 >= 1000 && price1 <= 1900)){
    console.log('ціна товару не знаходиться в діапазоні між 1000 та 1900')
}

let price2 = 1901;

if (price2 < 1000 || price2 > 1900){
    console.log('ціна товару не знаходиться в діапазоні між 1000 та 1900')
}

//4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//Результат виводити в консоль.

let season = 3;

if(season === 1){
    console.log('winter')
}else if (season === 2){
    console.log('spring')
}else if (season === 3){
    console.log ('summer')
}else if (season === 4){
    console.log ('autumn')
}else {
    console.log('error')
}

//5.  Задано 3 числа (a, b, c), які не рівні між собою.
//Визначити середнє між цими трьома числами
//(не середнє арифметичне значення, а яке з трьох заданих чисел середнє за значенням) використовуючи оператор if-else.
//Використати вкладені оператори if
//Результат виводити в консоль.

let a = 1, b = 2, c = 3;

if (a > b) {
    if (a > c) {
      if (c > b) {
        console.log(b);
      } else {
        console.log(c);
      }
    } else {
      console.log(a);
    }
  } else {
    if (a > c) {
      console.log(a);
    } else {
      if (c > b) {
        console.log(b);
      } else {
        console.log(c);
      }
    }
  }

//6.  Задано номер дня тижня.
//За заданим номером вивести назву дня тижня використовуючи switch.
//Результат виводити в консоль.

let num3 = 3;

switch(num3){
    case 1: 
        console.log('monday');
        break;
    case 2: 
        console.log('tuesday');
        break;
    case 3: 
        console.log('wednesday');
        break;
    case 4: 
        console.log('thursday');
        break;  
    case 5: 
        console.log('friday');
        break;
    case 6: 
        console.log('saturday');
        break;
    case 7: 
        console.log('sunday');
        break;      
    default:
        console.log('error');
        break;  
}

//7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//Математичні операції для обчислення: "+", "-", "*", "/".
//Результат виводити в консоль.

let symbol = '*'
let x = 6, y = 3, z

switch(symbol){
    case '-': z = x - y;
        console.log('2');
        break;
    case '*': z = x * y; 
        console.log('18');
        break;
    case '/': z = x / y; 
        console.log('2');
        break;
    case '+': z = x + y;
        console.log('9');
        break;
    default:
        console.log('error');
        break;  
}

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

const str = 'Hello Beautiful World';
const noVowels = str.replace(/[eoaui]/gi, '');
console.log(noVowels); 

//9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//так щоб в консоль виводився результат обчислень з правильним закінченням.
//Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let num = 18;

if( num === 1500){
    console.log('1.5 кілометри')
}else if (num === 900){
    console.log('0.9 кілометра')
}else if (num === 90000){
    console.log ('90 кілометрів')
}else if (num === 18){
    console.log ('0.018 кілометра')
}else if (num === 134){
    console.log ('0.134 кілометра')
}else {
    console.log('error')
}

// Function

//1.  Ви прийшли в Макдональдз з трьома друзями.
//Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//то виводити в консоль текст "Ми йдемо в інше кафе"
//(Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const arrowFunc = (hamburgers, fries) => {
    if (hamburgers >= 4 && fries >= 1){
        console.log('Ми поїли')   
    }else{
        console.log('Ми йдемо в інше кафе')
    }
}    
arrowFunc (4 , 1);
arrowFunc (4 , 0);

let hamburgers = 4;
let fries = 1;

if (hamburgers >= 4 && fries >= 1){
    console.log('Ми поїли')   
}else{
    console.log('Ми йдемо в інше кафе')
}

let hamburgers1 = 4;
let fries1 = 0;

if (hamburgers1 === 4 &&fries1 === 1){
    console.log('Ми поїли')   
}else{
    console.log('Ми йдемо в інше кафе')
}

//2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//Результат виводити в консоль.

const arrowFunc = (price) => {
    if (price >= 1000 && price <= 1900){
        console.log('ціна товару знаходиться в діапазоні між 1000 та 1900')
   }
}
arrowFunc (1500);

let price = 1500;

if (price >= 1000 && price <= 1900){
    console.log('ціна товару знаходиться в діапазоні між 1000 та 1900')
}

//3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//Результат виводити в консоль.

const arrowFunc = (price3) => {
    if (!(price3 >= 1000 && price3 <= 1900)){
        console.log('ціна товару не знаходиться в діапазоні між 1000 та 1900')
   }
}
arrowFunc (1901);
arrowFunc (999, 1901);

let price1 = 2300;

if (!(price1 >= 1000 && price1 <= 1900)){
    console.log('ціна товару не знаходиться в діапазоні між 1000 та 1900')
}

let price2 = 1901;

if (price2 < 1000 || price2 > 1900){
    console.log('ціна товару не знаходиться в діапазоні між 1000 та 1900')
}

//4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//Результат виводити в консоль.

const arrowFunc = (season) => {
    if(season === 1){
        console.log('winter')
    }else if (season === 2){
        console.log('spring')
    }else if (season === 3){
        console.log ('summer')
    }else if (season === 4){
        console.log ('autumn')
    }else {
        console.log('error')
    }
}
arrowFunc (1);
arrowFunc (2);
arrowFunc (3);
arrowFunc (4);

let season = 3;

if(season === 1){
    console.log('winter')
}else if (season === 2){
    console.log('spring')
}else if (season === 3){
    console.log ('summer')
}else if (season === 4){
    console.log ('autumn')
}else {
    console.log('error')
}

//5.  Задано 3 числа (a, b, c), які не рівні між собою.
//Визначити середнє між цими трьома числами
//(не середнє арифметичне значення, а яке з трьох заданих чисел середнє за значенням) використовуючи оператор if-else.
//Використати вкладені оператори if
//Результат виводити в консоль.

const arrowFunc = (a, b, c) => {
    if (a > b) { //1
        if (a > c) {//1.1
          if (c > b) {//1.1.1
            console.log(b);
          } else { 
            console.log(c);
          }
        } else {
          console.log(a);
        }
      } else { //2
        if (a > c) {//2.1
          console.log(a);
        } else {
          if (c > b) {//2.1.1
            console.log(b);
          } else {
            console.log(c);
          }
        }
      }
}
arrowFunc (1, 2, 3);

let a = 1, b = 2, c = 3;

if (a > b) { //1
    if (a > c) {//1.1
      if (c > b) {//1.1.1
        console.log(b);
      } else { 
        console.log(c);
      }
    } else {
      console.log(a);
    }
  } else { //2
    if (a > c) {//2.1
      console.log(a);
    } else {
      if (c > b) {//2.1.1
        console.log(b);
      } else {
        console.log(c);
      }
    }
  }

//6.  Задано номер дня тижня.
//За заданим номером вивести назву дня тижня використовуючи switch.
//Результат виводити в консоль.

const arrowFunc = (num3) => {
    switch(num3){
        case 1: 
            console.log('monday');
            break;
        case 2: 
            console.log('tuesday');
            break;
        case 3: 
            console.log('wednesday');
            break;
        case 4: 
            console.log('thursday');
            break;  
        case 5: 
            console.log('friday');
            break;
        case 6: 
            console.log('saturday');
            break;
        case 7: 
            console.log('sunday');
            break;      
        default:
            console.log('error');
            break;  
    }
}
arrowFunc (1);
arrowFunc (2);
arrowFunc (3);
arrowFunc (4);
arrowFunc (5);
arrowFunc (6);
arrowFunc (7);

let num3 = 3;

switch(num3){
    case 1: 
        console.log('monday');
        break;
    case 2: 
        console.log('tuesday');
        break;
    case 3: 
        console.log('wednesday');
        break;
    case 4: 
        console.log('thursday');
        break;  
    case 5: 
        console.log('friday');
        break;
    case 6: 
        console.log('saturday');
        break;
    case 7: 
        console.log('sunday');
        break;      
    default:
        console.log('error');
        break;  
}

//7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//Математичні операції для обчислення: "+", "-", "*", "/".
//Результат виводити в консоль.

const arrowFunc = (symbol) => {
    x = 6, y = 3
    switch(symbol){
        case '-': z = x - y;
            console.log('2');
            break;
        case '*': z = x * y; 
            console.log('18');
            break;
        case '/': z = x / y; 
            console.log('2');
            break;
        case '+': z = x + y;
            console.log('9');
            break;
        default:
            console.log('error');
            break;  
    }
}
arrowFunc ('*');
arrowFunc ('-');
arrowFunc ('+');
arrowFunc ('/');

let symbol = '*'
let x = 6, y = 3, z

switch(symbol){
    case '-': z = x - y;
        console.log('2');
        break;
    case '*': z = x * y; 
        console.log('18');
        break;
    case '/': z = x / y; 
        console.log('2');
        break;
    case '+': z = x + y;
        console.log('9');
        break;
    default:
        console.log('error');
        break;  
}

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

const f1 = (text) => {
    return text.replace(/[eoaui]/gi, '');
}
console.log(f1('Hello Beautiful World'))


const f1 = (text) => {
    console.log(text.replace(/[eoaui]/gi, ''));
}
f1('Hello Beautiful World')


const str1 = 'Hello Beautiful World';
const noVowels1 = str1.replace(/[eoaui]/gi, '');
console.log(noVowels1); 

//9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//так щоб в консоль виводився результат обчислень з правильним закінченням.
//Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

const arrowFunc = (num) => {
    if( num === 1500){
        console.log('1.5 кілометри')
    }else if (num === 900){
        console.log('0.9 кілометра')
    }else if (num === 90000){
        console.log ('90 кілометрів')
    }else if (num === 18){
        console.log ('0.018 кілометра')
    }else if (num === 134){
        console.log ('0.134 кілометра')
    }else {
        console.log('error')
    }
}
arrowFunc (18);
arrowFunc (1500);
arrowFunc (900);
arrowFunc (90000);
arrowFunc (134);

let num = 18;

if( num === 1500){
    console.log('1.5 кілометри')
}else if (num === 900){
    console.log('0.9 кілометра')
}else if (num === 90000){
    console.log ('90 кілометрів')
}else if (num === 18){
    console.log ('0.018 кілометра')
}else if (num === 134){
    console.log ('0.134 кілометра')
}else {
    console.log('error')
}