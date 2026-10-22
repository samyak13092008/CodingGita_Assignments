// JS Conditional Statement Assignment

//A] if Statement

//1
let num1 = 10;
if(num1%5==0){
    console.log("1. Divisible by 5")
}

//2
let age = 60;
if(age>=60){
    console.log("2. Senior Citizen")
}

//3
let num2 = 777;
if(num2>100){
    console.log("3. Big Number")
}

//4
let temperature = 7;
if(temperature<10){
    console.log("4. Very Cold")
}

//5
let marksScored = 100;
if(marksScored == 100){
    console.log("5. Perfect Score")
}

//6
let num3 = -7;
if(num3<0){
    console.log("6. Negative Number")
}

//7
let userInput = "";
if(userInput == ""){
    console.log("7. No input provided")
}

//8
let year = 2000;
if(year%100==0){
    console.log("8. Century Year")
}

//9
let num4 = 12;
if(num>0 && num%2==0){
    console.log("9. Positive Even Number")
}

//10
let marks = 77;
if(marks>=35 && marks<=100){
    console.log("10. Valid Marks")
}

//B] if...else Statement

//1 
let num = 7;
if(num%2==0){
    console.log("1. Number",num,"is Even")
}else{
    console.log("1. Number",num,"is Odd")
}

//2
let age = 18;
if(age>=18){
    console.log("2. Eligible")
}else{
    console.log("2. Not Eligible")
}

//3
let num1 = 7;
if(num1>=0){
    console.log("3. Positive")
}else{
    console.log("3. Negative")
}

//4
let marks = 77;
if(marks>=35){
    console.log("4. Passed")
}else{
    console.log("4. Failed")
}

//5
let char = S;
if(char>=A && char<=Z){
    console.log("5. Uppercase Letter")
}else{
    console.log("5. Not an Uppercase Letter")
}

//6
let num2 = 15;
if(num2%3==0){
    console.log("6. Divisible by 3")
}else{
    console.log("6. Not Divisible by 3")
}

//7
let password  = "admin123";
if(password == "admin123"){
    console.log("7. Login Successful")
}else{
    console.log("7. Incorrect Password")
}

//8
let checkYear = 2026;
if(checkYear%4==0){
    console.log("8. Leap Year")
}else{
    console.log("8. Not a Leap Year")
}

//9
let a = 60;
let b = 45;
if(a>b){
    console.log("9.",a,"is Greater")
}else{
    console.log("9.",b,"is Greater")
}

//10
let number = 7;
if(number>0){
    console.log("10. Positive")
}else if(number<0){
    console.log("10. Negative")
}else{
    console.log("10. Zero")
}

//C] if...else if...else Statement

//1
let month = 4;

if (month == 12 || month == 1 || month == 2) {
    console.log("Winter");
} else if (month >= 3 && month <= 5) {
    console.log("Summer");
} else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else {
    console.log("Invalid month");
}

//2
let income = 500000;
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}
console.log("Tax amount: Rs.", tax);

//3
let score = 85;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

//4
let speed = 65;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}

//5
let height = 165;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}

//6
let day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day == 6 || day == 7) {
    console.log("Weekend");
} else {
    console.log("Invalid day");
}

//7
let units = 120;
let bill;

if (units <= 50 && units >= 0) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}
console.log("Electricity bill: Rs.", bill);

//8
let attendance = 82;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

//9
let mark1 = 78;
let mark2 = 92;
let mark3 = 85;

if (mark1 >= mark2 && mark1 >= mark3) {
    console.log("Highest mark:", mark1);
} else if (mark2 >= mark1 && mark2 >= mark3) {
    console.log("Highest mark:", mark2);
} else {
    console.log("Highest mark:", mark3);
}

//10
let number = -7;

if (number == 0) {
    console.log("Zero");
} else if (number > 0 && number % 2 == 0) {
    console.log("Positive Even");
} else if (number > 0 && number % 2 != 0) {
    console.log("Positive Odd");
} else if (number < 0 && number % 2 == 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}

//D] Nested if Statement

//1
let n1 = 15;

if (n1 > 10) {
    if (n1 % 3 == 0) {
        console.log("Greater than 10 and divisible by 3");
    } else {
        console.log("Greater than 10 but not divisible by 3");
    }
} else {
    console.log("Number is not greater than 10");
}

//2
let age = 20;
let hasVoterID = true;

if (age >= 18) {
    if (hasVoterID) {
        console.log("Can Vote");
    } else {
        console.log("Voter ID required");
    }
} else {
    console.log("Not eligible to vote");
}

//3
let studentMarks = 85;

if (studentMarks >= 40) {
    if (studentMarks >= 80) {
        console.log("Passed with Distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}

//4
let correctPin = 1234;
let enteredPin = 1234;
let balance = 5000;
let withdrawal = 2000;

if (enteredPin == correctPin) {
    if (balance >= withdrawal) {
        balance = balance - withdrawal;
        console.log("Withdrawal successful");
        console.log("Remaining balance:", balance);
    } else {
        console.log("Insufficient balance");
    }
} else {
    console.log("Incorrect PIN");
}

//5
let year = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}

//6
let email = "student123@gmail.com";

if (email.includes("@")) {
    if (email.endsWith(".com")) {
        if (email.length > 10) {
            console.log("Valid Email");
        } else {
            console.log("Email is too short");
        }
    } else {
        console.log("Email must end with .com");
    }
} else {
    console.log("Email must contain @");
}

//7
let cartTotal = 1500;
let premiumMember = true;
let finalAmount;

if (cartTotal >= 1000) {
    if (premiumMember) {
        finalAmount = cartTotal - cartTotal * 0.20;
    } else {
        finalAmount = cartTotal - cartTotal * 0.10;
    }
} else {
    finalAmount = cartTotal;
}
console.log("Final amount: Rs.", finalAmount);

//8
let n2 = 16;

if (n2 > 0) {
    if (n2 % 2 == 0) {
        if (n2 % 4 == 0) {
            console.log("Positive Even and Divisible by 4");
        } else {
            console.log("Positive Even but not divisible by 4");
        }
    } else {
        console.log("Positive Odd");
    }
} else {
    console.log("Number is not positive");
}

//9
let candidateAge = 25;
let hasDegree = true;
let experience = 3;

if (candidateAge >= 21 && candidateAge <= 30) {
    if (hasDegree) {
        if (experience >= 2) {
            console.log("Eligible for Interview");
        } else {
            console.log("Not enough experience");
        }
    } else {
        console.log("Graduation degree required");
    }
} else {
    console.log("Age criteria not satisfied");
}

//10
let isPresent = true;
let internalMarks = 35;
let externalMarks = 40;

if (isPresent) {
    if (internalMarks >= 30) {
        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        } else {
            console.log("External marks are insufficient");
        }
    } else {
        console.log("Internal marks are insufficient");
    }
} else {
    console.log("Student is absent");
}

//switch Statement

//1
let monthNumber = 2;

switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 days");
        break;
    default:
        console.log("Invalid month");
}

//2
let character = "e";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        if (character.length == 1 && character >= "a" && character <= "z") {
            console.log("Consonant");
        } else {
            console.log("Invalid character");
        }
}

//3
let seasonNumber = 3;

switch (seasonNumber) {
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
        console.log("Summer");
        break;
    default:
        console.log("Invalid season number");
}

//4
let examMarks = 68;

switch (true) {
    case examMarks >= 75:
        console.log("Distinction");
        break;
    case examMarks >= 60:
        console.log("1st class");
        break;
    case examMarks >= 50:
        console.log("2nd class");
        break;
    case examMarks >= 35:
        console.log("3rd class");
        break;
    default:
        console.log("Failed");
}

//5
let role = "admin";
let action = "edit";

switch (role) {
    case "admin":
        switch (action) {
            case "create":
                console.log("Create action allowed");
                break;
            case "edit":
                console.log("Edit action allowed");
                break;
            case "delete":
                console.log("Delete action allowed");
                break;
            default:
                console.log("Invalid admin action");
        }
        break;
    case "user":
        console.log("Limited Access");
        break;
    default:
        console.log("Invalid role");
}

//6
let fruit = "mango";

switch (fruit) {
    case "apple":
        console.log("Apple is red");
    case "mango":
        console.log("Mango is yellow");
    case "banana":
        console.log("Banana is yellow");
    default:
        console.log("Unknown fruit");
}

// The above code prints Mango is yellow, Banana is yellow, and Unknown fruit.
// Missing break statements cause fall-through.

// Correct version
switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;
    case "mango":
        console.log("Mango is yellow");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    default:
        console.log("Unknown fruit");
}

//7
let value = "0";

switch (value) {
    case 0:
        console.log("Number zero");
        break;
    case "0":
        console.log("String zero");
        break;
    case false:
        console.log("Boolean false");
        break;
    case null:
        console.log("Null value");
        break;
    case undefined:
        console.log("Undefined value");
        break;
    default:
        console.log("Other value");
}
// switch uses strict equality, so 0 and "0" are different.

//8
let num1 = 10;
let num2 = 3;
let operator = "**";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 != 0) {
            console.log(num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    case "%":
        if (num2 != 0) {
            console.log(num1 % num2);
        } else {
            console.log("Cannot calculate remainder with zero divisor");
        }
        break;
    case "**":
        console.log(num1 ** num2);
        break;
    default:
        console.log("Invalid operator");
}

//9
let date = 18;

switch (true) {
    case date >= 1 && date <= 10:
        console.log("Beginning of the month");
        break;
    case date >= 11 && date <= 20:
        console.log("Middle of the month");
        break;
    case date >= 21 && date <= 31:
        console.log("End of the month");
        break;
    default:
        console.log("Invalid date");
}

//10
let category = "veg";
let item = "paneer";
let size = "full";
let price = 0;

switch (category) {
    case "veg":
        switch (item) {
            case "paneer":
                switch (size) {
                    case "half":
                        price = 120;
                        break;
                    case "full":
                        price = 220;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            case "burger":
                switch (size) {
                    case "half":
                        price = 50;
                        break;
                    case "full":
                        price = 100;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            default:
                console.log("Invalid veg item");
        }
        break;

    case "nonveg":
        switch (item) {
            case "chicken":
                switch (size) {
                    case "half":
                        price = 150;
                        break;
                    case "full":
                        price = 280;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            case "egg":
                switch (size) {
                    case "half":
                        price = 60;
                        break;
                    case "full":
                        price = 100;
                        break;
                    default:
                        console.log("Invalid size");
                }
                break;
            default:
                console.log("Invalid nonveg item");
        }
        break;

    default:
        console.log("Invalid category");
}

if (price > 0) {
    console.log("Category:", category);
    console.log("Item:", item);
    console.log("Size:", size);
    console.log("Final price: Rs.", price);
}

//F] Ternary Operator 

//1
let number1 = 21;
let result1 = number1 % 7 == 0
    ? "Divisible by 7"
    : "Not Divisible by 7";
console.log(result1);

//2
let temperature = 32;
let result2 = temperature >= 30 
    ? "Hot Day" 
    : "Pleasant Day";
console.log(result2);

//3
let textValue = "";
let result3 = textValue === "" 
    ? "Empty String" 
    : "String has content";
console.log(result3);

//4
let personAge = 16;
let result4 = personAge < 13
    ? "Child"
    : personAge <= 19
        ? "Teenager"
        : "Adult";
console.log(result4);

//5
let a = 12;
let b = 25;
let c = 18;

let greatest = a >= b
    ? (a >= c ? a : c)
    : (b >= c ? b : c);
console.log("Greatest:", greatest);

//6
let marks1 = 62;

let result6 = marks1 >= 75
    ? "Distinction"
    : marks1 >= 60
        ? "First Class"
        : marks1 >= 50
            ? "Second Class"
            : marks1 >= 35
                ? "Pass"
                : "Fail";
console.log(result6);

//7
let number2 = -9;

let result7 = number2 === 0
    ? "Zero"
    : number2 > 0
        ? (number2 % 2 === 0 ? "Positive Even" : "Positive Odd")
        : (number2 % 2 === 0 ? "Negative Even" : "Negative Odd");
console.log(result7);

//8
let year1 = 2024;

let result8 = year1 % 4 === 0
    ? (year1 % 100 === 0
        ? (year1 % 400 === 0 ? "Leap Year" : "Not a Leap Year")
        : "Leap Year")
    : "Not a Leap Year";
console.log(result8);

//9
let userRole = "admin";
let userAction = "delete";

let result9 = userRole === "admin"
    ? (userAction === "delete"
        ? "Admin Delete"
        : userAction === "edit"
            ? "Admin Edit"
            : "Admin Other")
    : userRole === "user"
        ? (userAction === "view" ? "User View" : "User Restricted")
        : "Invalid Role";

console.log(result9);

//10
let total = 3500;

let result10 = total >= 5000
    ? { discount: "20%", payable: total * 0.80 }
    : total >= 2000
        ? { discount: "10%", payable: total * 0.90 }
        : total >= 1000
            ? { discount: "5%", payable: total * 0.95 }
            : { discount: "0%", payable: total };

console.log("Discount:", result10.discount)
console.log("Final payable amount: Rs.", result10.payable)
