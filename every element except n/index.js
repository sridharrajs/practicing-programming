const A = [1, 2, 3, 4, 5, 6, 7, 8];

const format = (array, n) => {
    return [...array.splice(0, n), ...array.splice(n)];
}

const a = 12 + 3;

const n = 3;
console.log(format(A, n));
