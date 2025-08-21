function make_avg(arr, size) {
    let sum = 0;

    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }

    const average = sum / size;
    return average;
}

const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);
// console.log(numbers.length);

const avg = make_avg(numbers, numbers.length);
console.log(avg);