//Part A] For Loop

//1
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

//2
for (let i = 2; i <= 40; i += 2) {
    console.log(i);
}

//3
for (let i = 1; i <= 35; i += 2) {
    console.log(i);
}

//4
let total = 0;

for (let i = 1; i <= 10; i++) {
    total = total + (i * 10);
}
console.log("Total savings after 10 days: ₹" + total);

//5
for (let i = 1; i <= 10; i++) {
    console.log("12 x " + i + " = " + (12 * i));
}

//6
let water = 0;

for (let i = 1; i <= 7; i++) {
    water = water + 3;
    console.log("Day " + i + ": " + water + " glasses");
}

//7
for (let i = 1; i <= 10; i++) {
    console.log(i + " chocolates = ₹" + (i * 15));
}

//8
let sum = 0;

for (let i = 2; i <= 30; i += 2) {
    sum = sum + i;
}
console.log("Sum of even numbers: " + sum);

//9
for (let i = 1; i <= 7; i++) {
    console.log("Day " + i + ": " + (i * 5) + " push-ups");
}

//10
for (let i = 1; i <= 8; i++) {
    if (i === 1) {
        console.log(i + " person: ₹" + (i * 150));
    } else {
        console.log(i + " people: ₹" + (i * 150));
    }
}

//Part B] For Loop (Additional advanced questions)

//1
let temperatures = [28, 32, 25, 40, 18, 35];
let count = 0;

for (let i = 0; i < temperatures.length; i++){
    if (temperatures[i] > 30){
        count++;
    }
}
console.log("Days hotter than 30°C:", count)

//2
let num = 4729;
let sum = 0;

for (let num > 0; num = Math.floor(num / 10)){
    sum += num % 10;
}
console.log("Sum of digits:", sum)

//3
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0){
        console.log(i)
    }
}

//4
let string = "JavaScript";
let result = "";

for (let i = 0; i < string.length; i++){
    if(string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u"){
        result += string[i];
    }
}
console.log("Consonants:", result)

//5
let numbers = [12, 45, 23, 89, 34, 67];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("Largest number:", largest)

//6
let num = 28;
let sum = 0;

for(let i = 1; i < num; i++){
    if (num % i === 0) {
        sum = sum + i;
    }
}
if (sum === num){
    console.log("Perfect number")
} else {
    console.log("Not a perfect number")
}

//7
let num = 1;

for (let i = 1; i <= 8; i++){
    console.log(num);
    num = num * 2;
}

//9
let marks = [45, 78, 90, 32, 56, 88];
let sum = 0;

for (let i = 0; i < marks.length; i++){
    sum = sum + marks[i];
}

let average = sum / marks.length;
let count = 0;

for (let i = 0; i < marks.length; i++){
    if (marks[i] > average) {
        count++;
    }
}
console.log("Average:", average)
console.log("Students above average:", count)

//Part C-a] break inside a for Loop

//1
let numbers = [3, 5, 7, 2, 7, 9];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === 7){
        console.log(i)
        break;
    }
}

//2
let correctPassword = "sk123";
let access = false;

for (let i = 1; i <= 5; i++) {
    let password = "sk123"

    if (password === correctPassword) {
        console.log("Access granted");
        access = true;
        break;
    }
}

if (access === false) {
    console.log("Account locked")
}

//3
let sum = 0;

for (let i = 1; ; i++){
    sum = sum + i;

    if (sum > 100) {
        console.log("Last number added:", i)
        break;
    }
}

//4
let names = ["Amit", "Rahul", "Sam", "Suresh", "Priya"];

for (let i = 0; i < names.length; i++){
    if (names[i][0] === "S"){
        console.log(names[i]);
        break;
    }
}

//5
for (let i = 1; i <= 50; i++){
    let root = i**(1/2);

    if (i > 20 && root%1==0){
        console.log(i);
        break;
    }

    console.log(i);
}

//Part C-b] continue inside a for Loop

//1
for (let i = 1; i <= 30; i++){
    if (i % 4 === 0){
        continue;
    }
    console.log(i)
}

//2
let numbers = [10, -5, 20, -8, 15, -3];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] <= 0) {
        continue;
    }
    sum = sum + numbers[i];
}
console.log("Sum:", sum)

//3
let word = "Hello World";

for (let i = 0; i < word.length; i++){
    if (word[i] === " "){
        continue;
    }
    console.log(word[i])
}

//4
for (let i = 1; i <= 12; i++){
    let product = 6 * i;
    if (product % 5 === 0){
        continue;
    }
    console.log("6 x " + i + " = " + product)
}

//5
let ages = [12, 18, 25, 15, 30, 17, 22];

for (let i = 0; i < ages.length; i++){
    if (ages[i] < 18){
        continue;
    }
    console.log(ages[i])
}
