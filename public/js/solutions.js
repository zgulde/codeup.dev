'use strict';

////////////////////////////////////////////////////////////////////////////////
// Switch
////////////////////////////////////////////////////////////////////////////////

// Now, suppose there's a promotion in Walmart, If your lucky number is 0 you have
// no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get all
// for free!. Write a JS program that logs to the console, how much you will have
// to pay if your receipt is for $60. Every time you reload your page you should
// see a different result. Use a switch statement for this exercise.

// var luckyNumber = Math.floor(Math.random()* 6);

// var priceBeforeDiscount = 60;
// var discountPercentage;
// var finalPrice;

// switch (luckyNumber) {
//     case 1:
//         discountPercentage = .1;
//         break;
//     case 2:
//         discountPercentage = .25;
//         break;
//     case 3:
//         discountPercentage = .35;
//         break;
//     case 4:
//         discountPercentage = .5;
//         break;
//     case 5:
//         discountPercentage = 1;
//         break;
//     default:
//         discountPercentage = 0;
//         break;
// }

// finalPrice = (1 - discountPercentage) * priceBeforeDiscount;

// console.log('Price before discount: $' + priceBeforeDiscount);
// console.log('Lucky Number: ' + luckyNumber);
// console.log('Discount: ' + (discountPercentage * 100) + '%');
// console.log('You will pay: $' + finalPrice.toFixed(2));

// Suppose you have been assigned a task and you need to convert a number to the
// name of a month. 1 should be shown as January, 2 as February and so on. Using a
// switch statement write the JS code that shows the names of the months in the
// console.

// var monthNumber = 10;
// var monthName;

// switch (monthNumber) {
//     case 1:
//         monthName = 'Jan';
//         break;
//     case 2:
//         monthName = 'Feb';
//         break;
//     case 3:
//         monthName = 'Mar';
//         break;
//     case 4:
//         monthName = 'Apr';
//         break;
//     case 5:
//         monthName = 'May';
//         break;
//     case 6:
//         monthName = 'Jun';
//         break;
//     case 7:
//         monthName = 'Jul';
//         break;
//     case 8:
//         monthName = 'Aug';
//         break;
//     case 9:
//         monthName = 'Sep';
//         break;
//     case 10:
//         monthName = 'Oct';
//         break;
//     case 11:
//         monthName = 'Nov';
//         break;
//     case 12:
//         monthName = 'Dec';
//         break;
// }

// console.log('Month number: ' + monthNumber);
// console.log('The month is ' + monthName);

////////////////////////////////////////////////////////////////////////////////
// While
////////////////////////////////////////////////////////////////////////////////

// An ice cream seller can't go home until she sells all of her cones. Write a
// JS program that generates a random number between 50 and 100 representing
// the amount of cones to sell. Your code should generate numbers between 1 and
// 5, simulating the amount of cones being bought by her clients. Use a
// do-while loop to log to the console the amount of cones sold to each person.
// This is how you get the random numbers.

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;

// do {
//     // This is how you get a random number between 1 and 5
//     var cones = Math.floor(Math.random() * 5) + 1;
//     if (cones <= allCones) {
//         console.log('Sold ' + cones + ' cones...');
//         allCones -= cones;
//     } else {
//         console.log('I can\'t sell you ' + cones + ' cones, I only have ' + allCones + '.');
//     }

// } while (allCones > 0);

// console.log('Sold all the cones!');

// var i = 2;

// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }

////////////////////////////////////////////////////////////////////////////////
// For
////////////////////////////////////////////////////////////////////////////////

// desired output: 
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 0000000000

// var line = '';

// for (var i = 1; i <= 20; i++) {
//     line = '';
//     for (var j = 0; j < i; j++) {
//         line += i % 10;
//     }
//     console.log(line);
// }

// Write the JS code to log to the console the multiplication table for a
// random number between 1 and 10.
// var n = Math.floor(Math.random() * 10) + 1;

// for (var i = 1; i <= 10; i++) {
//     console.log(n + ' x ' + i + ' = ' + (n * i));
// }

// Using a for loop and the code to generate a random number from the
// previous lessons, generate 10 random numbers between 20 and 200 and output
// to the console whether each number is odd or even

// var n;
// var isEven;

// for (var i = 0; i < 10; i++) {
//     n = Math.floor(Math.random() * 180) + 20;
//     isEven = (n % 2) == 0;
    
//     console.log(n + ' is ' + (isEven ? 'even' : 'odd'));
// }

// for (var i = 100; i >= 5; i -= 5) {
//     console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////
// Break Continue
////////////////////////////////////////////////////////////////////////////////

// var numberToSkip;

// do {
//     numberToSkip = Math.floor((Math.random()*50)+1);
// } while (numberToSkip % 2 == 0);

// console.log('Random odd number to skip: ' + numberToSkip);

// for (var i = 0; i < 50; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     if (i == numberToSkip) {
//         console.log('Yikes! Skipping number: ' + i);
//         continue;
//     }
//     console.log('Here is an odd number: ' + i);
// }

// in the previous for loop it would also be acceptable to start i at 1 and
// increment to 49, the exercise is to demonstrate 'continue'
