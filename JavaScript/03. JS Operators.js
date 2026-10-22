// ASSIGNMENT: JAVASCRIPT OPERATORS

// A] ARITHMETIC OPERATORS

// 1. ADDITION (+)

// 1
console.log("1. Total collection:", 15000 + 12500);

// 2
console.log("2. Total pages:", 18 + 25);

// 3
console.log("3. Total items sold:", 125 + 178);

// 4
let a1 = "10";
let b1 = 5;
let result1 = a1 + b1;
console.log("4. Output:", result1);

// 5
let x1 = 5;
let y1 = "3";
let result2 = x1 + y1;
console.log("5. Output:", result2);

// 6
console.log("6. Output:", 15 + 27);

// 7
console.log("7. Total price:", 350 + 45);

// 8
console.log("8. Output:", "25" + 10);

// 9
let totalSpent = 750 + 320;
let remainingBalance = 2000 - totalSpent;

console.log("9. Total spent:", totalSpent);
console.log("9. Remaining balance:", remainingBalance);

// 10
console.log("10a:", 5 + "5" + 5);
console.log("10b:", 5 + 5 + "5");
console.log("10c:", "5" + 5 + 5);


// 2. SUBTRACTION (-)

// 1
console.log("1. Empty seats:", 80 - 53);

// 2
console.log("2. Final marks:", 500 - 35);

// 3
console.log("3. Remaining boxes:", 2500 - 875);

// 4
let a2 = "10";
let b2 = 3;
let result3 = a2 - b2;
console.log("4. Output:", result3);

// 5
let x2 = "20";
let y2 = "5";
let result4 = x2 - y2;
console.log("5. Output:", result4);

// 6
console.log("6. Output:", 100 - 37);

// 7
console.log("7. Water left:", 500 - 175, "litres");

// 8
console.log('8a. "50" - 20 =', "50" - 20);
console.log('8b. "50" - "20" =', "50" - "20");

// 9
let apples = 240;
let applesLeft = apples - 95 - 67;
console.log("9. Apples left:", applesLeft);

// 10
console.log('10a. "100" - 50 =', "100" - 50);
console.log('10b. "abc" - 10 =', "abc" - 10);
console.log('10c. 10 - "5" - "2" =', 10 - "5" - "2");
console.log('10d. "10" - "5" - "2" =', "10" - "5" - "2");


// 3. MULTIPLICATION (*)

// 1
console.log("1. Cost of 8 notebooks:", 45 * 8);

// 2
console.log("2. Bottles produced:", 120 * 6);

// 3
console.log("3. Total plants:", 7 * 15);

// 4
let a3 = "5";
let b3 = 4;
let result5 = a3 * b3;
console.log("4. Output:", result5);

// 5
let x3 = "10";
let y3 = "2";
let result6 = x3 * y3;
console.log("5. Output:", result6);

// 6
console.log("6. Output:", 12 * 8);

// 7
console.log("7. Cost of 4 pizzas:", 299 * 4);

// 8
console.log('8a. "7" * 6 =', "7" * 6);
console.log('8b. "7" * "6" =', "7" * "6");

// 9
let unitsProduced = 45 * 8;
console.log("9. Units produced:", unitsProduced);

// 10
console.log('10a. "5" * 3 * "2" =', "5" * 3 * "2");
console.log('10b. "abc" * 4 =', "abc" * 4);
console.log('10c. 10 * "2.5" =', 10 * "2.5");
console.log('10d. "10" * "2.5" * "0" =', "10" * "2.5" * "0");

// 4. DIVISION (/)

// 1
console.log("1. Pencils per student:", 144 / 12);

// 2
console.log("2. Distance per hour:", 360 / 6, "km/hour");

// 3
console.log("3. Amount per department:", 72000 / 9);

// 4
let a4 = "20";
let b4 = 4;
let result7 = a4 / b4;
console.log("4. Output:", result7);

// 5
let x4 = "100";
let y4 = "5";
let result8 = x4 / y4;
console.log("5. Output:", result8);

// 6
console.log("6. Output:", 144 / 12);

// 7
console.log("7. Students per classroom:", 360 / 9);

// 8
console.log('8a. "100" / 4 =', "100" / 4);
console.log('8b. "100" / "4" =', "100" / "4");

// 9
let billShare = 2400 / 6;
console.log("9. Each friend's share:", billShare);

// 10
console.log("10a. 10 / 0 =", 10 / 0);
console.log("10b. -10 / 0 =", -10 / 0);
console.log("10c. 0 / 0 =", 0 / 0);
console.log('10d. "20" / "4" / 2 =', "20" / "4" / 2);
console.log('10e. "abc" / 5 =', "abc" / 5);

// 5. MODULUS (%)

// 1
console.log("1. Students left:", 53 % 5);

// 2
console.log("2. Candies left:", 128 % 10);

// 3
console.log("3. Toys left:", 237 % 6);

// 4
console.log("4. People left:", 185 % 40);

// 5
let a5 = 10;
let b5 = 0;
let result9 = a5 % b5;
console.log("5. Output:", result9);

// 6
console.log("6. Output:", 29 % 5);

// 7
console.log("7. Chocolates left:", 23 % 4);

// 8
console.log("8a. 0 % 7 =", 0 % 7);
console.log("8b. 15 % 0 =", 15 % 0);

// 9
let pages = 47;
let pagesPerSheet = 6;

let fullSheets = Math.floor(pages / pagesPerSheet);
let leftoverPages = pages % pagesPerSheet;

console.log("9. Full sheets:", fullSheets);
console.log("9. Leftover pages:", leftoverPages);

// 10
console.log("10a. 17 % 5 =", 17 % 5);
console.log("10b. -17 % 5 =", -17 % 5);
console.log("10c. 17 % -5 =", 17 % -5);
console.log("10d. -17 % -5 =", -17 % -5);
console.log("10e. 10 % 0 =", 10 % 0);

// 6. EXPONENTIATION (**)

// 1
let cubeSide = 6;
console.log("1. Cube volume:", cubeSide ** 3, "cm³");

// 2
let squareSide = 9;
console.log("2. Total cells:", squareSide ** 2);

// 3
console.log("3. 5 ** 4 =", 5 ** 4);

// 4
let pixels = 1024;
console.log("4. Total pixels:", pixels ** 2);

// 5
let base = 2;
let power = -1;
let result10 = base ** power;
console.log("5. Output:", result10);

// 6
console.log("6. 3 ** 4 =", 3 ** 4);

// 7
let side = 9;
console.log("7. Square area:", side ** 2);

// 8
console.log("8a. 2 ** 5 =", 2 ** 5);
console.log("8b. 5 ** 2 =", 5 ** 2);

// 9
console.log("9a. 2 ** 3 ** 2 =", 2 ** 3 ** 2);
console.log("9b. (2 ** 3) ** 2 =", (2 ** 3) ** 2);
console.log("9c. 2 ** -3 =", 2 ** -3);
console.log("9d. (-2) ** 2 =", (-2) ** 2);
console.log("9e. 4 ** 0.5 =", 4 ** 0.5);

// 10
let number = 10;
let exponent = 0;
let result11 = number ** exponent;

console.log("10. 10 ** 0 =", result11);

//B] ASSIGNMENT OPERATORS

//1. Simple Assignment = 

//1
let studentName = "Priya";
let studentMarks = 92;
console.log("1.",studentName)
console.log("1.",studentMarks)

//2
let score = 0;
console.log("2.",score)

//3
let a=b=c=50;
console.log("3.",a,b,c)

//4
let x;
x = 100;
console.log("4.",x); //100

//5
let p = 15;
let q = p;
q = 30;
console.log("5.",p, q); //15,30

//2. Add and Assign +=

//1
let playerScore=80;
playerScore+=25;
console.log("1.",playerScore)

//2
let walletBalance=1500;
walletBalance+=120;
console.log("2.",walletBalance)

//3
let count = 10;
count += 5;
console.log("3.",count); //15

//4
let msg = "Good";
msg += " Morning";
console.log("4.",msg); //Good Morning

//5
let n = 20;
n+="5";
console.log("5.",n) //205, concatination
//The number 20 is converted to a string,and "5" is joined to it, producing "205".

//3. Subtract and Assign -=

//1
let health = 100;
health-=35;
console.log("1.",health)

//2
let stock = 300;
stock-=45;
console.log("2.",stock)

//3
let lives = 5;
lives -= 2;
console.log("3.",lives); //3

//4
let num = "40";
num -= 15;
console.log("4.",num); //25

//5
// let x = "abc";
// x-=5;
// console.log("5.",x) //NaN
//"abc" cannot be converted into a valid number,so the result is NaN.

//4. Multiply and Assign *=

//1
let itemPrice = 500;
itemPrice*=1.18;
console.log("1.",itemPrice)

//2
let quantity = 8;
quantity*=3;
console.log("2.",quantity)

//3
let amount = 200;
amount *= 1.1;
console.log("3.",amount); //220

//4
let val = "7";
val *= 3;
console.log("4.",val); //21

//5
// let y = "hello";
// y*=2;
// console.log("5.",y) //NaN
//"hello" cannot be converted into a number.

//5. Divide and Assign /=

//1
let totalChocolates = 180;
totalChocolates/=6;
console.log("1.",totalChocolates)

//2
let distance = 300;
distance/=5;
console.log("2.",distance)

//3
let total = 400;
total /= 8;
console.log("3.",total); //50

//4
console.log("4.",25); 

//5
let z=50;
z/=0;
console.log("5.",z) //Infinity
//In JavaScript, a positive number divided by positive zero gives Infinity.

//6. Modulus and Assign %=

//1
let number = 47;
number%=6
console.log("1. Remainder",number)

//2
let counter = 23;
counter%=12;
console.log("2. Remainder",counter)

//3
console.log("3.",4); 

//4
console.log("4.",2); 

//5
let m = 15;
m %=0;
console.log("5.",m) //NaN
//The remainder operation with a zero divisor produces NaN in JavaScript.

//7. Exponentiation and Assign **=

//1
let cubeSide=5;
cubeSide**=3;
console.log("1. Volume",cubeSide)

//2
let numb = 4;
numb**=2;
console.log("2.",numb)

//3
let base = 2;
base **= 5;
console.log("3.",base); //32

//4
console.log("4.",2); 

//5
let po = 2;
po**=-1;
console.log("5.",po)

// C] COMPARISON OPERATORS

//1. Loose Equality ==

//1
console.log("1.","25"==25)

//2
console.log("2.",0==false) //true

//3
console.log("3.",10 == "10"); //true
console.log("3.",null == undefined); //true

//4
console.log("4.","" == 0); //true
console.log("4.",[] == false); true

//5
console.log("5.",NaN==NaN) //false beacuse NaN is not equal to anything, including another NaN.

//2. Loose Inequality !=

//1
console.log("1.","18"!=18) //false

//2
console.log("2.","1234"!=1234) //false

//3
console.log("3.",5 != "5"); //false
console.log("3.",0 != false); //false

//4
console.log("4.",null != undefined); //false
console.log("4.","" != 0); //false

console.log("5.",NaN!=NaN) //true

//3. Strict Equality ===

//1
console.log("1.","25"===25) //false because "25" is a string, while 25 is a number.

//2
console.log("2.",0===false) //false
console.log("2.",null===undefined) //false

//3
console.log("3.",10 === "10"); //false
console.log("3.",true === 1); //false

//4
console.log("4.","" === 0); //false
console.log("4.",[] === false); //false

//5
//=== checks both value and data type.

//4. Strict Inequality !==

//1
console.log("1.","18"!==18) //true

//2
console.log("2.",0!==false) //true
console.log("2.",null!==undefined) //true

//3
console.log("3.",5 !== "5"); //true
console.log("3.",true !== 1); //true

//4
console.log("4.","" !== 0); //true
console.log("4.",NaN !== NaN); //true

//5
let input = "5";

if (input !== "0") {
    console.log("5. Input is not equal to string 0");
}

// Part C] Relational Operator

//5. Greater Than >

//1
let studentsMarks = 78;
let passingMarks = 40;
console.log("1.",studentsMarks > passingMarks)

//2
let todayTemperature = 35;
let yesterdayTemperature = 28;
console.log("2.",todayTemperature > yesterdayTemperature)

//3
console.log("3.",15 > 10); //true
console.log("3.",10 > 15); //false
console.log("3.",10 > 10); //false

//4
console.log("4.","20" > 15); //true
console.log("4.","5" > "10"); //false
console.log("4.","abc" > 10); //false

//5
console.log("5.",null > 0); //false
console.log("5.",undefined > 0); //false
//null is converted to 0 during numeric comparison, undefined becomes NaN, and comparisons with NaN return false.

//6
let stock = 120;
let itemsWanted = 85;
let stockSufficient = stock > itemsWanted;
console.log("6.",stockSufficient)

//7
console.log("7.",true > false); //true
console.log("7.","10" > "2"); //false
console.log("7.",NaN > 5); //false
// true becomes 1 and false becomes 0.
// Strings are compared lexicographically when both operands are strings,"1" comes before "2", so "10" > "2" is false.
// Comparisons involving NaN return false.

//6. Less Than <

//1
let currentWeight = 42;
let maximumWeight = 50;
console.log("1.",currentWeight < maximumWeight)

//2
let personAge = 16;
let minimumAge = 18;
console.log("2.", personAge < minimumAge)

//3
console.log("3.",8 < 12); //true
console.log("3.",20 < 10);  //false
console.log("3.",7 < 7); //false

//4
console.log("4.","8" < 10); //true
console.log("4.","20" < "3"); //true
console.log("4.","hello" < 5); //false

//5
console.log("5.",null < 0); //false
console.log("5.",undefined < 0 ); //false
// null becomes 0 during numeric comparison, undefined becomes NaN, so the comparison returns false.

//6
let currentWaterLevel = 375;
let tankCapacity = 500;
console.log("6.",currentWaterLevel < tankCapacity)

//7
console.log("7.",false < true); //true
console.log("7.","5" < "15"); //false
console.log("7.",NaN < 10); //false
// false becomes 0 and true becomes 1.
// "5" < "15" is false because the first character "5" comes after "1".
// Comparisons involving NaN return false.

//7. Greater Than or Equal to >=

//1
let studentMarks = 75;
let distinctionMarks = 75;
console.log("1.",studentMarks >= distinctionMarks)

//2
let money = 300;
let ticketPrice = 300;
console.log("2.",money >= ticketPrice)

//3
console.log("3.",25 >= 25); //true
console.log("3.",30 >= 25); //true
console.log("3.",20 >= 25); //false

//4
console.log("4.","25" >= 25); //true
console.log("4.","10" >= "2"); //false
console.log("4.",null >= 0); //true

//5
console.log("5.",undefined >= 0) //false
// undefined becomes NaN, and comparisons involving NaN return false.

//6
let currentPeople = 8;
let maximumPeople = 8;
console.log("6.",currentPeople >= maximumPeople)

//7
console.log("7.",true >= 1); //true
console.log("7.","" >= 0); //true
console.log("7.",NaN >= NaN); //false
// true becomes 1, so 1 >= 1 is true.
// An empty string becomes 0, so 0 >= 0 is true.
// Comparisons involving NaN return false.

//8. Less than or Equal to <=

//1
let vehicleSpeed = 60;
let maximumSpeedLimit = 60;
console.log("1.",vehicleSpeed <= maximumSpeedLimit)

//2
let studentMarks = 39;
let passingMarks = 40;
console.log("2.",studentMarks <= passingMarks)

//3
console.log("3.",15 <= 20); //true
console.log("3.",20 <= 15); //false
console.log("3.",15 <= 15); //true

//4
console.log("4.","15" <= 20); //true
console.log("4.","30" <= "5"); //true
console.log("4.",null <= 0); //true

//5
console.log("5.",undefined <= 0) //false
// undefined becomes NaN, and comparisons involving NaN return false.

//6
let currentBooks = 10;
let maximumBooks = 10;
console.log("6.",currentBooks <= maximumBooks)

//7
console.log("7.",false <= 0); //true
console.log("7.","" <= 0); //true
console.log("7.",NaN <= 5); //false
// false becomes 0, so 0 <= 0 is true.
// An empty string becomes 0, so 0 <= 0 is true.
// Comparisons involving NaN return false.

//9. Mixed Practice (>,<,>=,<=)

//1
//A
let age = 18;
let votingAge = 18;
console.log("1.",age >= votingAge)

//B
let temperature1 = 32;
let temperature2 = 35;
console.log("1.",temperature1 < temperature2)

//C
let score1 = 90;
let score2 = 85;
console.log("1.",score1 > score2)

//2
console.log("2.",10 > 5 && 5 < 10); //true
console.log("2.","10" >= 10); //true
console.log("2.",null <= undefined); //false
console.log("2.","5" < "10" && 5 > 2); //false

//3
let productCosts = 499;
let customerMoney = 500;
console.log("3.",customerMoney >= productCosts)
console.log("3.",customerMoney > productCosts)

let change = customerMoney - productCosts
console.log("3.",change)

//4
console.log("4.","10" > 2); //false
console.log("4.",10 > 2); //true
// When both operands are strings, JavaScript compares them lexicographically (character by character). The first character "1" comes before "2", so "10" > "2" is false.
// When both operands are numbers, JavaScript compares their numeric values. Since 10 is greater than 2, 10 > 2 is true.

// E] INCREMENT/DECREMENT OPERATORS(++/--)

//Part a:

//1
let counter = 5;
counter ++;
console.log("1.",counter)

//2
let lives = 3;
lives --;
console.log("2. Remaining Lives =",lives)

//3
let score = 10;
score ++;
console.log("3.",score)

//4
let items = 8;
items --;
console.log("4.",items)

//5
let count = 0;
count ++;
count ++;
console.log("5.",count)

//Part b

//6
let x = 5;
let y = x++;
console.log("6.",x,y)
//Post-increment (x++) assigns the current value of x (5) to y first, and then increments x to 6. Hence, y is 5 and x is 6.

//7
let a = 5;
let b = ++a;
console.log("7.",a,b)
//Pre-increment (++a) increments a first (making it 6), and then assigns that new value to b. Both variables end up equal to 6, unlike the previous question where y kept the original value.

//8
let lives = 3;
let previousLives = lives--;
console.log("8.",lives,previousLives)

//9
let attempts = 0;
let currentAttempts = ++attempts;
console.log("9.",attempts,currentAttempts)

//10
let points = 100;
points ++;
points --;
console.log("10.",points)

//Part c

//11
let x = 10;
let y = x++;
let z = ++x;
console.log(x, y, z); //12,10,12

//12
let a = 5;
let b = a-- + ++a;
console.log(a, b); //5,10

//13
let m = 7;
let n = --m + m++;
console.log(m, n); //7,12

//14
let p = 3;
let q = p++ + ++p + p;
console.log(p, q); //5,13

//15
let val = 0;
val = val++ + ++val;
console.log(val); //2

// F]:LOGICAL OPERATORS

//1. Logical AND &&

//1
let username = "admin";
let password = 1234;
let isValid = (username === "admin" && password === 1234);
console.log("1.",isValid)

//2
let isLoggedIn = true;
let hasPermission = true;
let accessPage = isLoggedIn && hasPermission;
console.log("2.",accessPage)

//3
let inStock = true;
let price = 800;
let bought = inStock && (price<1000);
console.log("3.",bought)

//4
let studentMarks = 75;
let studentAttendance = 80;
let passing = (studentMarks>65) && (studentAttendance>70);
console.log("4.",passing)

//5
let isWeekend = true;
let isHoliday = false;
let partyHappens = isWeekend && isHoliday;
console.log("5.",partyHappens)

//6
let a = 0;
let b = 10;
let result = a && b;
console.log("6.",result); //0

//7
let x = 5;
let y = 10;
let result = (x > 3 && y) || 0;
console.log("7.",result); //10

//8
let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log("8.",result //""

//9
let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log("9.",val); //0,0

//10
let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log("10.",result); //false

//2. Logical OR ||

//1
let passwordCorrect = true;
let otpValid = false;
let loginAllowed = passwordCorrect || otpValid;
console.log("1.",loginAllowed)

//2
let isMember = false;
let hasCoupon = true;
let discountApplies = isMember || hasCoupon;
console.log("2.",discountApplies)

//3
let age = 16;
let height = 155;
let entryAllowed = (age>18) || (height>150);
console.log("3.",entryAllowed)

//4
let emailGiven = true;
let phoneGiven = false;
let formValid = emailGiven || phoneGiven;
console.log("4.",formValid)

//5
let score = 900;
let timeBonus = true;
let gameLevelOpens = (score>1000) || timeBonus;
console.log("5.",gameLevelOpens)

//6
let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log("6.",result); //42

//7
let x = "Hello" || 0;
let y = 0 || "Hi";
console.log("7.",x, y); //Hello, Hi

//8
let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log("8.",result); //true

//9
let val = 5;
let condition = val || (val = 0);
console.log(condition);
console.log("9.",val); //5,5

//10
let x = "" || 0 || false || null || undefined || "OK";
console.log("10.",x); //OK

//3. Logical NOT !

//1
let isBanned = false;
let canLogin = !isBanned;
console.log("1.",canLogin)

//2
let isCompleted = false;
let isPending = !isCompleted;
console.log("2.",isPending)

//3
let isOn = true;
let isOff = !isOn;
console.log("3.",isOff)

//4
let isActive = false;
let cannotAccess = !isActive;
console.log("4.",cannotAccess)

//5
let isReadyOnly = false;
let canEdit = !isReadyOnly;
console.log("5.",canEdit)

//6
let a = 0;
let b = 1;
console.log("6.",!a, !b); //true,false

//7
let x = "Hello";
let y = "";
console.log("7.",!x, !y); //false,true

//8
let val = 5;
let result = !val;
console.log("8.",result); //false

//9
let a = 10;
let b = 20;
let result = !(a && b);
console.log("9.",result); //false

//10
let x = 0;
let y = 1;
let result = !(x || y);
console.log("10.",result); //false

//Part G]: typeof Operator

//Part a:

//1
let name = "Rahul";
console.log("1.",typeof(name))

//2
let age = 25;
console.log("2.",typeof(age))

//3
let isStudent = true;
console.log("3.",typeof(isStudent))

//4
let city;
console.log("4.",typeof(city))

//5
console.log("5.",typeof(null))

//Part b:

//6
console.log("6.",typeof 42); //number
console.log("6.",typeof "Hello"); //string
console.log("6.",typeof true); //Boolean
console.log("6.",typeof undefined); //undefined

//7
console.log("7.",typeof null); //Object
console.log("7.",typeof {}); //Object
console.log("7.",typeof []); //Object

//8
console.log("8.",typeof NaN); //number
console.log("8.",typeof Infinity); //number
console.log("8.",typeof function(){}); //function

//9
let price = 99.99;
let message = "Welcome";
let isActive = false;
console.log("9.",typeof price)
console.log("9.",typeof message)
console.log("9.",typeof isActive)

//10
let value = null;
console.log("10.",typeof value); //object
console.log("10.",typeof value === "object"); //true

//Part c:

//11
console.log("11.",typeof typeof 100); //string
console.log("11.",typeof typeof "Hi"); //string
console.log("11.",typeof typeof true); //string

//12
let a = 10;
let b = "10";
console.log("12.",typeof a === typeof b); //false
console.log("12.",typeof a == typeof b); //false

//13
console.log("13.",typeof null === "object"); //true
console.log("13.",typeof [] === "object"); //true
console.log("13.",typeof {} === "object"); //true

//14
let x;
console.log("14.",typeof x); //undefined
x = null;
console.log("14.",typeof x); //object
x = 0;
console.log("14.",typeof x); //number

//15
console.log("15.",typeof NaN === "number"); //true
console.log("15.",typeof Infinity === "number"); //true
console.log("15.",typeof (1 / 0)); //number

//Part H] Type Coercion

//Part a:

//1
let result1 = Number("25") + 10;
console.log("1.",result1)

//2
let result2 = String(100) + " rupees";
console.log("2.",result2)

//3
let result3 = Boolean(0);
console.log("3.",result3)

//4
let result4 = Boolean("Hello");
console.log("4.",result4)

//5
let result5 = +"50"*2;
console.log("5.",result5)

//Part b :

//6
console.log("6.","10" - 5); //5
console.log("6.","10" + 5); //105
console.log("6.","10" * 2); //20
console.log("6.","10" / 2); //5

//7
console.log("7.","5" - "2"); //3
console.log("7.","5" + "2"); //52
console.log("7.","5" * "2"); //10
console.log("7.","5" / "2"); //2.5

//8
console.log("8.",Number("123")); //123
console.log("8.",Number("123abc")); //NaN
console.log("8.",Number(true)); //1
console.log("8.",Number(false)); //0
console.log("8.",Number(null)); //0
console.log("8.",Number(undefined)); //NaN

//9
console.log("9.",Boolean(0)); //false
console.log("9.",Boolean("")); //false
console.log("9.",Boolean("0")); //true
console.log("9.",Boolean([])); //true
console.log("9.",Boolean({})); //true
console.log("9.",Boolean(null)); //false

//10
console.log("10.",String(100)); //100
console.log("10.",String(true)); //true
console.log("10.",String(null)); //null
console.log("10.",String(undefined)); //undefined
console.log("10.",100 + ""); //100

//Part c:

//11
console.log("11.","5" + 3 + 2); //"532"
console.log("11.",5 + 3 + "2"); //"82"
console.log("11.","5" - 3 + 2); //4
console.log("11.",5 - "3" + "2"); //"22"

//12
console.log("12.",true + true); //2
console.log("12.",true + false); //1
console.log("12.",true + "false"); //"truefalse"
console.log("12.",false + "true"); //"falsetrue"

//13
console.log("13.",null + 5); //5
console.log("13.",undefined + 5); //NaN
console.log("13.",null + "5"); //"05"
console.log("13.",undefined + "5"); //"undefined5"

//14
console.log("14.",[] + []); //empty
console.log("14.",[] + {}); //[object Object]
console.log("14.",{} + []); //[object Object]
console.log("14.",{} + {}); //[object Object][object Object]

//15
let a = "10";
let b = 5;
let c = a + b;
let d = a - b;
let e = +a + b;
console.log("15.",c, typeof c); //"105",string
console.log("15.",d, typeof d); //5,number
console.log("15.",e, typeof e); //15,number

//16
console.log("16.",!!"Hello"); //true
console.log("16.",!!""); //false
console.log("16.",!!0); //false
console.log("16.",!!1); //true
console.log("16.",!!null); //false
console.log("16.",!!undefined); //false

//17
console.log("17.",Number("")); //0
console.log("17.",Number(" ")); //0
console.log("17.",Number("0")); //0
console.log("17.",Number("  25  ")); //25
console.log("17.",Number("25px")); //NaN

//18
let val1 = "5";
let val2 = 2;
console.log("18.",val1 + val2); //"52"
console.log("18.",+val1 + val2); //7
console.log("18.",val1 - val2); //3
console.log("18.",val1 * val2); //10
console.log("18.",val1 / val2); //2.5

//19
let count = 5;
console.log("19.",typeof count++); //number
console.log("19.",count); //6
console.log("19.",typeof ++count); //number
console.log("19.",count); //7

//20
let x = "10";
let y = ++x;
console.log("20.",x, y, typeof x, typeof y); //11,11,number,number

//21
let a = "5";
let b = a++;
console.log("21.",a, b, typeof a, typeof b); //6,5,number,number

//22
console.log("22.",typeof (1 + "2")); //string
console.log("22.",typeof (1 - "2")); //number
console.log("22.",typeof (1 * "2")); //number
console.log("22.",typeof (1 / "2")); //number

//23
let val = null;
console.log("23.",typeof val); //object
console.log("23.",val + 1); //1
console.log("23.",val - 1); //-1
console.log("23.",val * 1); //0
console.log("23.",Boolean(val)); //false
