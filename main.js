// =================== 1 ===================
// var num = Number(window.prompt("Enter a number :"));
// window.alert(num);


// =================== 2 ===================
// var num = Number(window.prompt("Enter a number :"));
// if (num%3==0) {
//     if (num%4==0) {
//         window.alert("Yes");
//     }
//     else {
//         window.alert("No");
//     }
// }
// else {
//     window.alert("No");
// }


// =================== 3 ===================
// var num1 = Number(window.prompt("Enter first number:"));
// var num2 = Number(window.prompt("Enter second number:"));
// if (num1>num2) {
//     window.alert(num1);
// }
// else {
//     window.alert(num2);
// }


// =================== 4 ===================
// var num = Number(window.prompt("Enter a number :"));
// if (num<0) {
//     window.alert("Negative");
// }
// else {
//     window.alert("Positive");
// }


// =================== 5 ===================
// var num1 = Number(window.prompt("Enter first number:"));
// var num2 = Number(window.prompt("Enter second number:"));
// var num3 = Number(window.prompt("Enter therd number:"));
// var max;
// var min;
// if (num1>num2 && num1>num3) {
//     max = num1;
// }
// else if (num2>num1 && num2>num3) {
//     max = num2;
// }
// else {
//     max = num3;
// }

// if (num1<num2 && num1<num3) {
//     min = num1;
// }
// else if (num2<num1 && num2<num3) {
//     min = num2;
// }
// else {
//     min = num3;
// }

// window.alert("Max = "+max+"   Min = "+min);



// =================== 6 ===================
// var num = Number(window.prompt("Enter a number :"));
// if (num%2 == 0) {
//     window.alert("Even");
// }
// else {
//     window.alert("Odd");
// }


// =================== 8 ===================
// var char = window.prompt("Enter a char :");
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     window.alert("Vowel");
// }
// else {
//     window.alert("Constant");
// }


// =================== 9 ===================
// var num = Number(window.prompt("Enter a number :"));
// if (num >= 1) {
//     for (let i = 1; i <= num; i++) {
//         console.log(i);
//     }
// }
// else {
//     console.log("out of range");
// }


// =================== 10 ===================
// var num = Number(window.prompt("Enter a number :"));
// for (let i = 1; i <= 12; i++){
//     console.log(i*num);
// }


// =================== 11 ===================
// var num = Number(window.prompt("Enter a number :"));
// for (let i = 1; i <= num; i++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }


// =================== 12a ===================
// var num1 = Number(window.prompt("Enter the base number :"));
// var num2 = Number(window.prompt("Enter the power number >= 1 :"));
// var result = num1;
// if (num2 == 1) {
//     console.log(result);
// }
// else if (num2 > 1) {
//     for (let i = 1; i < num2; i++) {
//         result = result * num1;
//     }
//     console.log(result);
// }
// else if (num2 == 0) {
//     console.log("1");
// }
// else {
//     console.log("Invaled power number");
// }


// =================== 12b ===================
// var num1 = Number(window.prompt("Enter mark for the first subject :"));
// var num2 = Number(window.prompt("Enter mark for the second subject :"));
// var num3 = Number(window.prompt("Enter mark for the therd subject :"));
// var num4 = Number(window.prompt("Enter mark for the fourth subject :"));
// var num5 = Number(window.prompt("Enter mark for the fifth subject :"));
// console.log("Total marks = " + (num1 + num2 + num3 + num4 + num5));
// console.log("Average marks = " + ((num1 + num2 + num3 + num4 + num5)/5));
// console.log("Percentage = " + (((num1 + num2 + num3 + num4 + num5)/500)*100) + "%");


// =================== 13 ===================
// var num = Number(window.prompt("Enter month number :"));
// if (num==1) {
//     console.log("Days in month: 31");
// }
// else if (num==2) {
//     console.log("Days in month: 28");
// }
// else if (num==3) {
//     console.log("Days in month: 31");
// }
// else if (num==4) {
//     console.log("Days in month: 30");
// }
// else if (num==5) {
//     console.log("Days in month: 31");
// }
// else if (num==6) {
//     console.log("Days in month: 30");
// }
// else if (num==7) {
//     console.log("Days in month: 31");
// }
// else if (num==8) {
//     console.log("Days in month: 31");
// }
// else if (num==9) {
//     console.log("Days in month: 30");
// }
// else if (num==10) {
//     console.log("Days in month: 31");
// }
// else if (num==11) {
//     console.log("Days in month: 30");
// }
// else if (num==12) {
//     console.log("Days in month: 31");
// }
// else {
//     console.log("Invaled month number.");
// }


// =================== 14 ===================
// var num1 = Number(window.prompt("Enter mark for Physics :"));
// var num2 = Number(window.prompt("Enter mark for Chemistry :"));
// var num3 = Number(window.prompt("Enter mark for Biology :"));
// var num4 = Number(window.prompt("Enter mark for Mathematics :"));
// if (num1 >= 1 && num1 <= 100) {
//     if (num1 >= 90) {
//         console.log("Percentage = " + num1 + "%   , Grad: A");
//     }
//     else if (num1 >= 80) {
//         console.log("Percentage = " + num1 + "%   , Grad: B");
//     }
//     else if (num1 >= 70) {
//         console.log("Percentage = " + num1 + "%   , Grad: C");
//     }
//     else if (num1 >= 60) {
//         console.log("Percentage = " + num1 + "%   , Grad: D");
//     }
//     else if (num1 >= 40) {
//         console.log("Percentage = " + num1 + "%   , Grad: E");
//     }
//     else {
//         console.log("Percentage = " + num1 + "%   , Grad: F");
//     }
// }
// else {
//     console.log("Invaled mark.");
// }
// if (num2 >= 1 && num2 <= 100) {
//     if (num2 >= 90) {
//         console.log("Percentage = " + num2 + "%   , Grad: A");
//     }
//     else if (num2 >= 80) {
//         console.log("Percentage = " + num2 + "%   , Grad: B");
//     }
//     else if (num2 >= 70) {
//         console.log("Percentage = " + num2 + "%   , Grad: C");
//     }
//     else if (num2 >= 60) {
//         console.log("Percentage = " + num2 + "%   , Grad: D");
//     }
//     else if (num2 >= 40) {
//         console.log("Percentage = " + num2 + "%   , Grad: E");
//     }
//     else {
//         console.log("Percentage = " + num2 + "%   , Grad: F");
//     }
// }
// else {
//     console.log("Invaled mark.");
// }
// if (num1 >= 3 && num3 <= 100) {
//     if (num3 >= 90) {
//         console.log("Percentage = " + num3 + "%   , Grad: A");
//     }
//     else if (num3 >= 80) {
//         console.log("Percentage = " + num3 + "%   , Grad: B");
//     }
//     else if (num3 >= 70) {
//         console.log("Percentage = " + num3 + "%   , Grad: C");
//     }
//     else if (num3 >= 60) {
//         console.log("Percentage = " + num3 + "%   , Grad: D");
//     }
//     else if (num3 >= 40) {
//         console.log("Percentage = " + num3 + "%   , Grad: E");
//     }
//     else {
//         console.log("Percentage = " + num3 + "%   , Grad: F");
//     }
// }
// else {
//     console.log("Invaled mark.");
// }
// if (num4 >= 1 && num4 <= 100) {
//     if (num1 >= 90) {
//         console.log("Percentage = " + num4 + "%   , Grad: A");
//     }
//     else if (num4 >= 80) {
//         console.log("Percentage = " + num4 + "%   , Grad: B");
//     }
//     else if (num4 >= 70) {
//         console.log("Percentage = " + num4 + "%   , Grad: C");
//     }
//     else if (num4 >= 60) {
//         console.log("Percentage = " + num4 + "%   , Grad: D");
//     }
//     else if (num4 >= 40) {
//         console.log("Percentage = " + num4 + "%   , Grad: E");
//     }
//     else {
//         console.log("Percentage = " + num4 + "%   , Grad: F");
//     }
// }
// else {
//     console.log("Invaled mark.");
// }


// =================== 15 ===================
// var num = Number(window.prompt("Enter month number: "));
// switch (num) {
//     case 1:
//         console.log("31");
//         break;
//     case 2:
//         console.log("28");
//         break;
//     case 3:
//         console.log("31");
//         break;
//     case 4:
//         console.log("30");
//         break;
//     case 5:
//         console.log("31");
//         break;
//     case 6:
//         console.log("31");
//         break;
//     case 7:
//         console.log("30");
//         break;
//     case 8:
//         console.log("31");
//         break;
//     case 9:
//         console.log("30");
//         break;
//     case 10:
//         console.log("31");
//         break;
//     case 11:
//         console.log("30");
//         break;
//     case 12:
//         console.log("31");
//         break;
//     default:
//         console.log("Invaled month number.");
// }


// =================== 16 ===================
// var char = window.prompt("Enter a char: ");
// switch (char.toLowerCase()) {
//     case ("a"):
//         console.log("Vowel.");
//         break;
//     case ("o"):
//         console.log("Vowel.");
//         break;
//     case ("u"):
//         console.log("Vowel.");
//         break;
//     case ("e"):
//         console.log("Vowel.");
//         break;
//     case ("i"):
//         console.log("Vowel.");
//         break;
//     default:
//         console.log("Constant.");
// }


// =================== 17 ===================
// var num1 = Number(window.prompt("Enter a number: "));
// var num2 = Number(window.prompt("Enter a second number: "));
// switch (true) {
//     case num1 > num2:
//         console.log("The max is = " + num1);
//         break;
//     case num1 == num2:
//         console.log("The tow numbers are equals.");
//         break;
//     case num1 < num2:
//         console.log("The max is = " + num2);
//         break;
// }


// =================== 18 ===================
// var num = Number(window.prompt("Enter a number: "));
// var result = num % 2;
// switch (result) {
//     case 0:
//         console.log("Even.");
//         break;
//     default:
//         console.log("Odd.");
// }


// =================== 19 ===================
// var num1 = Number(window.prompt("Enter a number: "));
// switch (true) {
//     case num1 > 0:
//         console.log("Positive");
//         break;
//     case num1 == 0:
//         console.log("Zero");
//         break;
//     case num1 < 0:
//         console.log("Negative");
//         break;
//     default:
//         console.log("out of range");
// }


// =================== 20 ===================
// var num1 = Number(window.prompt("Enter a number: "));
// var num2 = Number(window.prompt("Enter a second number: "));
// var chose = Number(window.prompt("Enter 1 to +\nEnter 2 to -\nEnter 3 to *\nEnter 4 to /"));

// switch (chose) {
//     case 1:
//         console.log(num2 + num1);
//         break;
//     case 2:
//         console.log(num1 - num2);
//         break;
//     case 3:
//         console.log(num1 * num2);
//         break;
//     case 4:
//         console.log(num1 / num2);
//         break;
//     default:
//         console.log("Invaled choyes.")
// }