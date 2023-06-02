// Factorial:

function Factorial(number) {
    fact = 1;
    while (number > 0) {
        fact *= number;
        number--;
    }
    return fact;
}

// Fibonacci Number : 

function Fibonacci(number) {
    if (number <= 1) {
        return number;
    }
    let prev = 0;
    let current = 1;

    for (let i = 2; i <= number; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}
// Matrices : Operations on matrices (Addition, Subtracting, Multiplying)

function MatriceOperations() {
    const matrix = [];
    this.generateRandomMatrix = function (rows, columns) {
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                const randomNumber = Math.random();
                const scaledNumber = randomNumber * 100;
                const roundedNumber = Math.round(scaledNumber);
                row.push(roundedNumber);
            }
            matrix.push(row);
        }
        return matrix;
    }

}