// Функция для проверки длины строки.
/*
Проверка результата
Cтрока короче 20 символов
имяФункции('проверяемая строка', 20); // true
Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
Строка короче 10 символов
имяФункции('проверяемая строка', 10); // false
*/

const phraseLength = function (phrase, length) {
  if (phrase.length === length) {
    return true;
  } else if (phrase.length < length) {
    return true;
  } else if (phrase.length > length) {
    return false;
  }
};

phraseLength('qwertyuiopasdfghjk', 20);
phraseLength('qwertyuiopasdfghjk', 18);
phraseLength('qwertyuiopasdfghjk', 10);

//console.log('Функция для проверки длины строки');
//console.log('Cтрока qwertyuiopasdfghjk короче 20 символов?');
//console.log(phraseLength('qwertyuiopasdfghjk', 20));
//console.log('Cтрока qwertyuiopasdfghjk ровно 18 символов?');
//console.log(phraseLength('qwertyuiopasdfghjk', 18));
//console.log('Cтрока qwertyuiopasdfghjk короче 10 символов?');
//console.log(phraseLength('qwertyuiopasdfghjk', 10));
//console.log('');

// Функция для проверки, является ли строка палиндромом
/*
Проверка результата
имяФункции('топот'); // true
имяФункции('ДовОд'); // true
имяФункции('Кекс');  // false
Усложненное задание когда в строке встречаются пробелы. Они не должны учитываться при проверке
имяФункции('Лёша на полке клопа нашёл '); // true
*/

const reverseString = function (string) {
  string = string.replace(/\s/g, '');
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  if (string.toLowerCase() === newString.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

reverseString('топот');
reverseString('ДовОд');
reverseString('Кекс');
reverseString('Лёша на полке клопа нашёл ');

//console.log('Функция для проверки, является ли строка палиндромом');
//console.log('Cтрока', 'топот', 'является полиндромом?');
//console.log(reverseString('топот'));
//console.log('Cтрока', 'ДовОд', 'является палиндромом?');
//console.log(reverseString('ДовОд'));
//console.log('Cтрока', 'Кекс', 'является палиндромом?');
//console.log(reverseString('Кекс'));
//console.log('Cтрока', 'Лёша на полке клопа нашёл ', 'является палиндромом?');
//console.log(reverseString('Лёша на полке клопа нашёл '));
//console.log('');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:
/*
Проверка результата
имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
Усложненное задание вместо строки приходит число
имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15
*/

const retractNumber = function (string) {
  string = string.toString();
  const number = string.replace(/[^0-9]/g, '');
  return parseInt(number, 10);
};

retractNumber('2023 год');
retractNumber('ECMAScript 2022');
retractNumber('1 кефир, 0.5 батона');
retractNumber('агент 007');
retractNumber('а я томат');
retractNumber(2023);
retractNumber(-1);
retractNumber(1.5);

//console.log('Функция извлечения цифры из строки');
//console.log('Строка: 2023 год');
//console.log(retractNumber('2023 год'));
//console.log('Строка: ECMAScript 2022');
//console.log(retractNumber('ECMAScript 2022'));
//console.log('Строка: 1 кефир, 0.5 батона');
//console.log(retractNumber('1 кефир, 0.5 батона'));
//console.log('Строка: агент 007');
//console.log(retractNumber('агент 007'));
//console.log('Строка: а я томат');
//console.log(retractNumber('а я томат'));
//console.log('Число: 2023');
//console.log(retractNumber(2023));
//console.log('Число: -1');
//console.log(retractNumber(-1));
//console.log('Число: 1.5');
//console.log(retractNumber(1.5));
//console.log('');

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку,
// дополненную указанными символами до заданной длины. Символы добавляются в начало строки.
// Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
/*
Проверка результата
имя_функции('1', 4, '0');      // Результат: строка '0001'
имя_функции('q', 4, 'werty');  // Результат: строка 'werq'
имя_функции('q', 4, 'we');     // Результат: строка 'wweq'
имя_функции('qwerty', 4, '0'); // Результат: строка 'qwerty'
Усложненное задание не использовать при этом функцию padStart()
*/

let finalString = '';
let preString = '';

const stringAdd = function (string, stringAddition) {
  preString = stringAddition + string;
  return preString;
};

const stringConstructor = function (initString, stringLength, stringAddition) {
  finalString = initString;
  if (initString.length >= stringLength) {
    return finalString;
  } else if (initString.length < stringLength) {
    while (finalString.length < stringLength) {
      if (stringAddition.length <= stringLength - finalString.length) {
        finalString = stringAdd(finalString, stringAddition);
      } else if (
        stringAddition.length >
        stringLength - finalString.length
      ) {
        stringAddition = stringAddition.slice(
          0,
          stringLength - finalString.length
        );
        finalString = stringAdd(finalString, stringAddition);
      }
    }
    return finalString;
  }
};

stringConstructor('1', 4, '0');
stringConstructor('q', 4, 'werty');
stringConstructor('q', 4, 'we');
stringConstructor('qwerty', 4, '0');

//console.log('Функция дополнения строки');
//console.log('Вводим', '1', 4, '0');
//console.log(stringConstructor('1', 4, '0'));
//console.log('Вводим', 'q', 4, 'werty');
//console.log(stringConstructor('q', 4, 'werty'));
//console.log('Вводим', 'q', 4, 'we');
//console.log(stringConstructor('q', 4, 'we'));
//console.log('Вводим', 'qwerty', 4, '0');
//console.log(stringConstructor('qwerty', 4, '0'));
