const numbers = [100, 55, 15, 300, 20]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(`${sum} + ${numbers[i]} = ${sum + numbers[i]}`);
    sum += numbers[i]
}
console.log(`итоговая сумма: ${sum}`);