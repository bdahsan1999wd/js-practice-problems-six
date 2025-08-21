function oddEvenCalc(num) {
    if (num % 2 !== 0) {
        return num * 2;
    } else {
        return num / 2;
    }
}

console.log(oddEvenCalc(110));
console.log(oddEvenCalc(111));