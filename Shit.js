// 1) задание, напишите if, аналогичнй switch!

//let browser;
//if(browser === 'edge') {
//    alert ("You've got the Edge!");
//} else if (!(browser === 'Chrome'
//    || browser === 'Firefox'
//    || browser === 'Safari'
//    || browser === 'Opera')) {
//    alert('We hope that this page looks ok!')
//} else {
//    alert('Okey we support these browsers too')
 //}


// 2) переписать условия switch на if

const number = +prompt('Введите число между 0и3', '');
switch (number) {
    case 0:
        alert('Вы ввели чило 0');
        break;
    case 1:
        alert('вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели чило 2 или 3')
        break;
}
