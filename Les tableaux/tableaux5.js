
const prompt=require("prompt-sync")();
let numbers = [];
for (let i = 0; i < 7; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log("Array:", numbers);
console.log("Maximum:", max);
console.log("Minimum:", min);




